<template>
  <div>
    <el-alert v-if="error" title="分类文章加载失败，请稍后重试" type="error" show-icon />
    <el-skeleton :loading="status === 'pending'" :rows="5" animated>
      <h1 class="page-title">分类：{{ category?.name || id }}</h1>
      <el-empty v-if="!category?.articles.length" description="该分类下暂无文章" />
      <el-card v-for="article in category?.articles || []" :key="article.id" class="article-card">
        <PostCard :article="article" />
      </el-card>
    </el-skeleton>
  </div>
</template>

<script setup lang="ts">
import { useApolloClient } from "@vue/apollo-composable";
import { categoryQuery } from "~/apollo/queries/taxonomies";
import PostCard from "~/components/post.vue";
import type { TaxonomyDetail } from "~/types/taxonomy";

const route = useRoute();
const id = computed(() => String(route.params.id));
const { resolveClient } = useApolloClient();
const { data: category, status, error } = await useAsyncData(
  () => `category:${id.value}`,
  async () => {
    const { data } = await resolveClient().query<{ category: TaxonomyDetail | null }>({
      query: categoryQuery,
      variables: { where: { id: id.value } }
    });
    return data.category;
  },
  { watch: [id], default: () => null }
);

useHead(() => ({ title: category.value?.name ? `分类：${category.value.name}` : "分类" }));
</script>

<style scoped>
.page-title {
  margin-bottom: 18px;
}
.article-card {
  margin-bottom: 20px;
}
</style>
