import { gql } from "@apollo/client/core";

export default gql`
  query getArticles($where: ArticleWhereInput) {
    articles(where: $where) {
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
