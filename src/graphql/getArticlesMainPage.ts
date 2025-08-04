import { gql } from "@apollo/client";

export interface MainPageArticleData {
  articles: {
    documentId: string,
    Hero: {
      id: string;
      title: string;
      description: string;
      background: {
        url: string;
        name: string;
      };
    };
    tags: {
      system_title: string;
    }[];
  }[];
}

export interface MainPageTagsData {
  tags: {
    system_title: string;
  }[];
}

export const GET_ARTICLES = gql`
  query GetArticles($filters: ArticleFiltersInput, $status: PublicationStatus) {
    articles(filters: $filters, status: $status) {
      documentId
      Hero {
        title
        description
        id
        background {
          url
          name
        }
      }
      tags {
        system_title
      }
    }
  }
`;

export const GET_TAGS = gql`
  query GetTags {
    tags {
      system_title
    }
  }
`;
