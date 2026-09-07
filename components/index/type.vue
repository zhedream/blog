<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>文章分类</span>
        <el-button link @click="navigateTo('/category')">全部分类</el-button>
      </div>
    </template>
    <el-alert v-if="error" title="分类加载失败" type="error" :closable="false" />
    <button
      v-for="category in categories"
      :key="category.id"
      class="category-link"
      type="button"
      @click="navigateTo(`/category/${category.id}`)"
    >
      <span>{{ category.name || "未命名" }}</span>
      <el-text type="info">{{ category.articles.length }}</el-text>
    </button>
    <el-text v-if="status !== 'pending' && !categories.length && !error" type="info">暂无分类</el-text>
  </el-card>
</template>

<script setup lang="ts">
import { useApolloClient } from "@vue/apollo-composable";
import { categoriesQuery } from "~/apollo/queries/taxonomies";
import type { TaxonomySummary } from "~/types/taxonomy";

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

<style>
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.category-link {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 8px 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  text-align: left;
}

</style>
