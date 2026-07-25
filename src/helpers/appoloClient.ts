import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  CombinedProtocolErrors,
  CombinedGraphQLErrors,
} from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { setContext } from '@apollo/client/link/context';
import { getStrapiBaseUrl } from '@/helpers/getStrapiUrl';
import { ErrorLink } from '@apollo/client/link/error';

const __DEV__ = process.env.NODE_ENV !== 'production';

if (__DEV__) {
  loadDevMessages();
  loadErrorMessages();
}

const baseUrl = getStrapiBaseUrl();

const httpLink = new HttpLink({
  uri: `${baseUrl}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const errorLink = new ErrorLink(({ error }) => {
  if (CombinedGraphQLErrors.is(error)) {
    error.errors.forEach(({ message, path }) => console.error(`[GraphQL error]: Message: ${message},  Path: ${path}`));
  } else if (CombinedProtocolErrors.is(error)) {
    error.errors.forEach(({ message, extensions }) =>
      console.error(`[Protocol error]: Message: ${message}, Extensions: ${JSON.stringify(extensions)}`),
    );
  } else {
    console.error(`[Network error]: ${error}`);
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
  // optionally: defaultOptions
  // defaultOptions: {
  //   watchQuery: { fetchPolicy: 'cache-and-network' },
  //   query: { fetchPolicy: 'network-only' },
  // },
});

export default client;
