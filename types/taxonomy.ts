import type { ArticleSummary } from "./article";

export type TaxonomySummary = {
  id: string;
  name?: string | null;
  articles: Array<{ id: string }>;
};

export type TaxonomyDetail = Omit<TaxonomySummary, "articles"> & {
  articles: ArticleSummary[];
};
