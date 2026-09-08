<template>
  <article class="post post-summary">
    <div class="post-kicker">
      <span>{{ article.type?.name || "随笔" }}</span
      ><span class="post-date">{{ formatDate(article.createdAt) }}</span>
    </div>
    <h2 class="title">
      <NuxtLink :to="`/article/${article.id}`">{{ article.title }}</NuxtLink>
    </h2>
    <div v-html="article.desc" class="content"></div>
    <div class="footer">
      <div class="tags">
        <span v-for="item in article.tags" :key="item.id" class="summary-tag"
          ># {{ item.name }}</span
        >
      </div>
      <NuxtLink :to="`/article/${article.id}`" class="text-link read"
        >阅读全文 <span aria-hidden="true">↗</span></NuxtLink
      >
    </div>
  </article>
</template>
<script setup lang="ts">
import type { ArticleSummary } from "~/types/article";
defineProps<{ article: ArticleSummary }>();
function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        timeZone: "UTC",
      }).format(date);
}
</script>
