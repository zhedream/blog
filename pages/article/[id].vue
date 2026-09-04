<template>
  <div class="post">
    <el-alert v-if="error" title="文章加载失败，请稍后重试" type="error" show-icon />
    <el-skeleton :loading="status === 'pending'" :rows="8" animated>
      <el-empty v-if="!article" description="文章不存在" />
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
        <footer v-if="article.tags.length" class="footer">
          <el-tag
            v-for="tag in article.tags"
            :key="tag.id"
            class="tag"
            type="info"
          >{{ tag.name }}</el-tag>
        </footer>
      </el-card>
    </el-skeleton>
  </div>
</template>

<script setup lang="ts">
import { useApolloClient } from "@vue/apollo-composable";
import articleQuery from "~/apollo/queries/article";
import type { ArticleSummary } from "~/types/article";

const route = useRoute();
const id = computed(() => String(route.params.id));
const { resolveClient } = useApolloClient();

const { data: article, status, error } = await useAsyncData(
  () => `article:${id.value}`,
  async () => {
    const { data } = await resolveClient().query<{ article: ArticleSummary | null }>({
      query: articleQuery,
      variables: { where: { id: id.value } }
    });
    return data.article;
  },
  { watch: [id], default: () => null }
);

useHead(() => ({ title: article.value?.title || "文章" }));
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
.footer .tag {
  margin-right: 5px;
}
</style>
