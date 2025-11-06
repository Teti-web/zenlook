export const GET_HOME_PAGE = `
  query GetHomePage {
  global {
    blocks {
      __typename
      ... on ComponentAtomsAnagraph {
        id
        anagrahpTitle:title
       anagrahpDescription: description
      }
       ... on ComponentMainFeatures {
        id
        label
        title {
          id
            text
            variant
        }
        featuresCards {
          id
          title {
            id
            text
            variant
          }
          description
          decorativeNumber
          image {
            alt
            className
            desktopSrc {
              url
            }
            src {
              url
            }
            mobileSrc {
              url
            }
            tableSrc {
              url
            }
            width
            height
            id
          }
          decoratorsImage {
            id
            alt
            src {
                url
            }
            width
            height
            mobileSrc {
                url
            }
            desktopSrc {
                url
            }
            tableSrc {
                url
            }
            className
          }
          translate
          className
        }
      }
        ... on ComponentMoleculesAutoSlider {
        id
        label
        items {
          id
          alt
          width
          height
          src {
            url
          }
          mobileSrc {
             url
          }
          desktopSrc {
             url
          }
          tableSrc {
             url
          }
          className
        }
      }
        ... on ComponentMainAppointment {
        id
        title {
          id
          text
          variant
        }
        description
        label
        slider {
          id
          items {
            id
            variant
            image {
              alt
              className
              desktopSrc {
                url
              }
              height
              id
              mobileSrc {
                url
              }
              src {
                url
              }
              tableSrc {
                url
              }
              width
            }
            title
            description
            personalInfo {
              description
              id
              name
              profesional
              progress
              rating
            }
          }
          className
        }
      }
        ... on ComponentMainBagFeatures {
        id
        label
        title {
          id
          text
          variant
        }
        image {
          mobileSrc {
            url
          }
          src {
            url
          }
          tableSrc {
            url
          }
          width
          id
          height
          desktopSrc {
            url
          }
          className
          alt
        }
        features {
          id
          title
          description
          position {
            left {
              id
              mobile
              tablet
              desktop
            }
            top {
              id
              mobile
              tablet
              desktop
            }
          }
        }
      }
        ... on ComponentMainBeautyManage {
        id
        title {
          id
          text
          variant
        }
        description
        button {
          id
          children
          label
          variant
          size
          href
        }
        label
        tabs {
          id
          name
          content {
            src {
              url
            }
            alt
            className
            id
            width
            height
            desktopSrc {
              url
            }
            tableSrc {
              url
            }
            mobileSrc {
              url
            }
          }
        }
      }
        ... on ComponentMainReviews {
        id
        label
        title {
          id
          text
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
        reviews {
          id
          text
          author
          backgroundColor
          image {
            id
            width
            height
            alt
            className
            src {
              url
            }
            mobileSrc {
              url
            }
            tableSrc {
              url
            }
            desktopSrc {
              url
            }
          }
        }
      }
    }
    intro {
      id
      label
      introDescription:description {
        id
        description
        title {
          id
          text
          variant
        }
        boldText
        variant
        isAnimated
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
    description {
      id
      description
      button {
        id
        children
        label
        variant
        size
        href
      }
      title {
        id
        text
        variant
      }
      boldText
      variant
      isAnimated
    }
  }
}
` as const;
