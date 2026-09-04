import { gql } from "@apollo/client/core";

export default gql`
  query getArticle($where: ArticleWhereUniqueInput!) {
    article(where: $where) {
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
