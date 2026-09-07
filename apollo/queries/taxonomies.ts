import { gql } from "@apollo/client/core";

const taxonomyArticle = gql`
  fragment TaxonomyArticle on Article {
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
`;

export const categoriesQuery = gql`
  query getCategories {
    categories(orderBy: { name: asc }) {
      id
      name
      articles {
        id
      }
    }
  }
`;

export const tagsQuery = gql`
  query getTags {
    tags(orderBy: { name: asc }) {
      id
      name
      articles {
        id
      }
    }
  }
`;

export const categoryQuery = gql`
  ${taxonomyArticle}
  query getCategory($where: CategoryWhereUniqueInput!) {
    category(where: $where) {
      id
      name
      articles {
        ...TaxonomyArticle
      }
    }
  }
`;

export const tagQuery = gql`
  ${taxonomyArticle}
  query getTag($where: TagWhereUniqueInput!) {
    tag(where: $where) {
      id
      name
      articles {
        ...TaxonomyArticle
      }
    }
  }
`;
