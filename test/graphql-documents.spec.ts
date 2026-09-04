import { Kind, type DocumentNode } from "graphql";
import { describe, expect, it } from "vitest";
import articleQuery from "../apollo/queries/article";
import articlesQuery from "../apollo/queries/articles";

function operationName(document: DocumentNode) {
  const operation = document.definitions.find((definition) => definition.kind === Kind.OPERATION_DEFINITION);
  return operation?.kind === Kind.OPERATION_DEFINITION ? operation.name?.value : undefined;
}

describe("GraphQL documents", () => {
  it("keeps the article list operation", () => {
    expect(operationName(articlesQuery)).toBe("getArticles");
  });

  it("keeps the article detail operation", () => {
    expect(operationName(articleQuery)).toBe("getArticle");
  });
});
