import { gql } from "@apollo/client/core";

export default gql`
  query getArchiveArticles {
    articles(where: { isPublished: true }, orderBy: { createdAt: desc }) {
      id
      title
      createdAt
    }
  }
`;
