<template>
  <div class="post">
    <el-alert v-if="error" title="随机文章加载失败，请稍后重试" type="error" show-icon />
    <el-skeleton :loading="status === 'pending'" :rows="8" animated>
      <el-empty v-if="!article" description="暂无已发布文章" />
      <el-card v-else shadow="always">
        <header class="head">
          <h1 class="title">{{ article.title }}</h1>
          <div class="meta">
            <span>作者：者之梦</span>
            <span>时间：{{ article.createdAt }}</span>
            <span>分类：{{ article.type?.name || "其他" }}</span>
            <span>阅读：{{ article.clickCount || 0 }}</span>
          </div>
        </header>
        <article class="content" v-html="article.html" />
        <footer class="footer">
          <div class="tags">
            <el-tag
              v-for="tag in article.tags"
              :key="tag.id"
              class="tag"
              type="info"
              @click="navigateTo(`/tag/${tag.id}`)"
            >{{ tag.name }}</el-tag>
          </div>
          <el-button type="primary" :loading="status === 'pending'" @click="refresh()">换一篇</el-button>
        </footer>
      </el-card>
    </el-skeleton>
  </div>
</template>

<script setup lang="ts">
import { useApolloClient } from "@vue/apollo-composable";
import {
  publishedArticleCountQuery,
  randomArticleQuery
} from "~/apollo/queries/randomArticle";
import type { ArticleSummary } from "~/types/article";

useHead({ title: "随便看看" });

const { resolveClient } = useApolloClient();
const { data: article, status, error, refresh } = await useAsyncData(
  "random-article",
  async () => {
    const client = resolveClient();
    const { data: countData } = await client.query<{
      articlesConnection: { aggregate: { count: number } };
    }>({
      query: publishedArticleCountQuery,
      fetchPolicy: "no-cache"
    });
    const count = countData.articlesConnection.aggregate.count;
    if (!count) return null;

    const { data } = await client.query<{ articles: ArticleSummary[] }>({
      query: randomArticleQuery,
      variables: { skip: Math.floor(Math.random() * count) },
      fetchPolicy: "no-cache"
    });
    return data.articles[0] ?? null;
  },
  { default: () => null }
);
</script>

<style scoped>
.head {
  margin-bottom: 18px;
  text-align: center;
}
.meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  color: #909399;
  font-size: 13px;
}
.content {
  margin-bottom: 16px;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.tag {
  cursor: pointer;
}
</style>
