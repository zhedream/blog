<template>
  <div class="index">
    <el-alert v-if="error" title="文章加载失败，请稍后重试" type="error" show-icon />
    <el-skeleton :loading="status === 'pending'" :rows="5" animated>
      <el-empty v-if="!articles.length" description="暂无文章" />
      <el-card v-for="item in articles" :key="item.id" class="box-card">
        <PostCard :article="item" />
      </el-card>
    </el-skeleton>
  </div>
</template>

<script setup lang="ts">
import { useApolloClient } from "@vue/apollo-composable";
import articlesQuery from "~/apollo/queries/articles";
import PostCard from "~/components/post.vue";
import type { ArticleSummary } from "~/types/article";

useHead({ title: "主页" });

const { resolveClient } = useApolloClient();
const { data: articles, status, error } = await useAsyncData(
  "articles",
  async () => {
    const { data } = await resolveClient().query<{ articles: ArticleSummary[] }>({
      query: articlesQuery,
      variables: { where: { isPublished: true } }
    });
    return data.articles;
  },
  { default: () => [] }
);
</script>

<style scoped>
.index {
  width: 100%;
}
.index .box-card{
  margin-bottom: 20px;
}
</style>
