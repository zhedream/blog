import { gql } from "@apollo/client/core";

export const publishedArticleCountQuery = gql`
  query getPublishedArticleCount {
    articlesConnection(where: { isPublished: true }) {
      aggregate {
        count
      }
    }
  }
`;

export const randomArticleQuery = gql`
  query getRandomArticle($skip: Int!) {
    articles(where: { isPublished: true }, skip: $skip, first: 1) {
      id
      title
      desc
      catalogue
      clickCount
      html
      tags {
        id
        name
      }
      type {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;
