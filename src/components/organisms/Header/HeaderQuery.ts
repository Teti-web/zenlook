import { gql } from '@apollo/client';

export const GET_HEADER = gql`
  query GetHeader {
    header {
      logo {
        src {
          url
        }
        width
        height
        desktopSrc {
          url
        }
        mobileSrc {
          url
        }
        tableSrc {
          url
        }
        alt
      }
      logoWhite {
        src {
          url
        }
        width
        height
        alt
        mobileSrc {
          url
        }
        desktopSrc {
          url
        }
        tableSrc {
          url
        }
      }
      mobileLinks {
        id
        children
        href
        variant
      }
      firstLinks {
        id
        children
        href
        variant
      }
      secondLinks {
        id
        children
        href
        variant
      }
      button {
        id
        children
        label
        variant
        size
        href
      }
    }
  }
`;
