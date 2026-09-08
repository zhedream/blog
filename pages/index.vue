<template>
  <div class="index">
    <section class="home-intro">
      <p class="eyebrow">
        <span class="status-dot"></span> A DEVELOPER’S NOTEBOOK
      </p>
      <h1>把探索写下来，<br />让<span>思考</span>有迹可循。</h1>
      <p class="intro-description">
        关于代码、技术与生活的片段。<br class="mobile-break" />
        在这里，分享所学，记录所想。
      </p>
      <NuxtLink to="/archive" class="intro-link"
        >探索文章归档 <span aria-hidden="true">↗</span></NuxtLink
      >
      <span class="intro-decoration" aria-hidden="true">*</span>
    </section>
    <div class="section-heading">
      <h2>最近的记录<span>LATEST NOTES</span></h2>
      <span>{{ articles.length }} 篇文章</span>
    </div>
    <el-alert
      v-if="error"
      title="文章加载失败，请稍后重试"
      type="error"
      show-icon
    />
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
const {
  data: articles,
  status,
  error,
} = await useAsyncData(
  "articles",
  async () => {
    const { data } = await resolveClient().query<{
      articles: ArticleSummary[];
    }>({
      query: articlesQuery,
      variables: { where: { isPublished: true } },
    });
    return data.articles;
  },
  { default: () => [] },
);
</script>

<style scoped>
.index {
  width: 100%;
}
.index .box-card {
  margin-bottom: 20px;
}
</style>
