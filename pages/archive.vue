<template>
  <el-card>
    <template #header><strong>文章归档</strong></template>
    <el-alert v-if="error" title="归档加载失败，请稍后重试" type="error" show-icon />
    <el-skeleton :loading="status === 'pending'" :rows="6" animated>
      <el-empty v-if="!articles.length" description="暂无已发布文章" />
      <el-timeline v-else>
        <el-timeline-item
          v-for="article in articles"
          :key="article.id"
          :timestamp="formatDate(article.createdAt)"
          placement="top"
        >
          <el-button link type="primary" @click="navigateTo(`/article/${article.id}`)">
            {{ article.title }}
          </el-button>
        </el-timeline-item>
      </el-timeline>
    </el-skeleton>
  </el-card>
</template>

<script setup lang="ts">
import { useApolloClient } from "@vue/apollo-composable";
import archiveQuery from "~/apollo/queries/archive";

type ArchiveArticle = {
  id: string;
  title: string;
  createdAt: string;
};

useHead({ title: "归档" });

const { resolveClient } = useApolloClient();
const { data: articles, status, error } = await useAsyncData(
  "archive:articles",
  async () => {
    const { data } = await resolveClient().query<{ articles: ArchiveArticle[] }>({
      query: archiveQuery
    });
    return data.articles;
  },
  { default: () => [] }
);

const formatter = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "Asia/Shanghai"
});
const formatDate = (value: string) => formatter.format(new Date(value));
</script>
