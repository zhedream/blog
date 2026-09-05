<template>
  <el-card>
    <template #header><strong>文章分类</strong></template>
    <el-alert v-if="error" title="分类加载失败，请稍后重试" type="error" show-icon />
    <el-skeleton :loading="status === 'pending'" :rows="4" animated>
      <el-empty v-if="!categories.length" description="暂无分类" />
      <div v-else class="taxonomy-grid">
        <el-button
          v-for="category in categories"
          :key="category.id"
          @click="navigateTo(`/category/${category.id}`)"
        >{{ category.name || "未命名" }}（{{ category.articles.length }}）</el-button>
      </div>
    </el-skeleton>
  </el-card>
</template>

<script setup lang="ts">
import { useApolloClient } from "@vue/apollo-composable";
import { categoriesQuery } from "~/apollo/queries/taxonomies";
import type { TaxonomySummary } from "~/types/taxonomy";

useHead({ title: "分类" });

const { resolveClient } = useApolloClient();
const { data: categories, status, error } = await useAsyncData(
  "taxonomy:categories",
  async () => {
    const { data } = await resolveClient().query<{ categories: TaxonomySummary[] }>({
      query: categoriesQuery
    });
    return data.categories;
  },
  { default: () => [] }
);
</script>

<style scoped>
.taxonomy-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
