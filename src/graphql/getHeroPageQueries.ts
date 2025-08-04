import { gql } from "@apollo/client";

export interface HeroPageQueryData {
  homePage: {
    hero: {
      background: {
        url: string;
      };
      decritpion: string;
      foreground: {
        url: string;
      };
      action: {
        label: string;
      };
    };
  };
}

export const GET_HERO_PAGE_QUERIES = gql`
  query ExampleQuery($status: PublicationStatus) {
    homePage(status: $status) {
      hero {
        background {
          url
        }
        decritpion
        foreground {
          url
        }
        action {
          label
        }
      }
    }
  }
`;