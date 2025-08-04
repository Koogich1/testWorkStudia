import { gql } from "@apollo/client";


export interface ArticleByIdData {
  article: {
    Hero: {
      title: string;
      description: string;
      background: {
        url: string;
        name: string;
      };
    };
    content: (
      | {
          __typename: "ComponentUiGridText";
          text: string;
          id: string;
        }
      | {
          __typename: "ComponentUiGridTextUnderImage";
          text: string;
          image: {
            url: string;
            name: string;
          };
        }
      | {
          __typename: "ComponentUiGridTextOverImage";
          text: string;
          image: {
            url: string;
            name: string;
          };
        }
      | {
          __typename: "ComponentUiGridImage";
          image: {
            url: string;
            name: string;
          };
          id: string;
        }
    )[];
  };
}

export const GET_ARTICLE_BY_ID = gql`
  query GetArticleById($documentId: ID!) {
    article(documentId: $documentId) {
      Hero {
        title
        description
        background {
          url
          name
        }
      }
      content {
        ... on ComponentUiGridText {
          text
          id
        }
        ... on ComponentUiGridTextUnderImage {
          text
          image {
            url
            name
          }
        }
        ... on ComponentUiGridTextOverImage {
          text
          image {
            url
            name
          }
        }
        ... on ComponentUiGridImage {
          image {
            url
            name
          }
          id
        }
      }
    }
  }
`;
