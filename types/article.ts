export type ArticleSummary = {
  id: string;
  title: string;
  desc?: string | null;
  html?: string | null;
  catalogue?: string | null;
  clickCount: number;
  createdAt: string;
  updatedAt: string;
  type?: { id: string; name?: string | null } | null;
  tags: Array<{ id: string; name?: string | null }>;
};
