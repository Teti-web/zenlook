import { gql } from '@apollo/client';

export const GET_FOOTER = gql`
  query GetFooter {
    footer {
      email
      links {
        id
        children
        href
        variant
      }
    }
  }
`;
