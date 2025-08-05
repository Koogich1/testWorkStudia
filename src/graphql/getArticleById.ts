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
    content: ArticleContent[];
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

export type GridText = {
  __typename: "ComponentUiGridText";
  text: string;
  id: string;
};

export type GridImage = {
  __typename: "ComponentUiGridImage";
  image: {
    url: string;
    name: string;
  };
  id: string;
};

export type GridTextUnderImage = {
  __typename: "ComponentUiGridTextUnderImage";
  text: string;
  image: {
    url: string;
    name: string;
  };
};

export type GridTextOverImage = {
  __typename: "ComponentUiGridTextOverImage";
  text: string;
  image: {
    url: string;
    name: string;
  };
};

export type ArticleContent = GridText | GridImage | GridTextUnderImage | GridTextOverImage;

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
    content: ArticleContent[];
  };
}

export function isGridText(item: ArticleContent): item is GridText {
  return item.__typename === "ComponentUiGridText";
}

export function isGridImage(item: ArticleContent): item is GridImage {
  return item.__typename === "ComponentUiGridImage";
}

export function isGridTextUnderImage(item: ArticleContent): item is GridTextUnderImage {
  return item.__typename === "ComponentUiGridTextUnderImage";
}

export function isGridTextOverImage(item: ArticleContent): item is GridTextOverImage {
  return item.__typename === "ComponentUiGridTextOverImage";
}
