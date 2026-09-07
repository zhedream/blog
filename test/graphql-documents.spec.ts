import { Kind, type DocumentNode } from "graphql";
import { describe, expect, it } from "vitest";
import articleQuery from "../apollo/queries/article";
import articlesQuery from "../apollo/queries/articles";
import archiveQuery from "../apollo/queries/archive";
import {
  publishedArticleCountQuery,
  randomArticleQuery
} from "../apollo/queries/randomArticle";
import {
  categoriesQuery,
  categoryQuery,
  tagsQuery,
  tagQuery
} from "../apollo/queries/taxonomies";

function operationName(document: DocumentNode) {
  const operation = document.definitions.find((definition) => definition.kind === Kind.OPERATION_DEFINITION);
  return operation?.kind === Kind.OPERATION_DEFINITION ? operation.name?.value : undefined;
}

describe("GraphQL documents", () => {
  it("keeps the article list operation", () => {
    expect(operationName(articlesQuery)).toBe("getArticles");
  });

  it("keeps the archive operation", () => {
    expect(operationName(archiveQuery)).toBe("getArchiveArticles");
  });

  it("keeps the article detail operation", () => {
    expect(operationName(articleQuery)).toBe("getArticle");
  });

  it("keeps the taxonomy operations", () => {
    expect([
      operationName(categoriesQuery),
      operationName(categoryQuery),
      operationName(tagsQuery),
      operationName(tagQuery)
    ]).toEqual(["getCategories", "getCategory", "getTags", "getTag"]);
  });

  it("keeps the random article operations", () => {
    expect(operationName(publishedArticleCountQuery)).toBe("getPublishedArticleCount");
    expect(operationName(randomArticleQuery)).toBe("getRandomArticle");
  });
});
