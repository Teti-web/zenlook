'use client';

import { ApolloProvider } from '@apollo/client/react';

import client from '@/helpers/appoloClient';

export function ProviderAppolo({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
