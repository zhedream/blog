<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>热门标签</span>
        <el-button link @click="navigateTo('/tag')">全部标签</el-button>
      </div>
    </template>
    <el-alert v-if="error" title="标签加载失败" type="error" :closable="false" />
    <div class="tags">
      <el-tag
        v-for="tag in popularTags"
        :key="tag.id"
        class="tag"
        type="info"
        @click="navigateTo(`/tag/${tag.id}`)"
      >{{ tag.name || "未命名" }} ({{ tag.articles.length }})</el-tag>
      <el-text v-if="status !== 'pending' && !popularTags.length && !error" type="info">暂无标签</el-text>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { useApolloClient } from "@vue/apollo-composable";
import { tagsQuery } from "~/apollo/queries/taxonomies";
import type { TaxonomySummary } from "~/types/taxonomy";

const { resolveClient } = useApolloClient();
const { data: tags, status, error } = await useAsyncData(
  "taxonomy:tags",
  async () => {
    const { data } = await resolveClient().query<{ tags: TaxonomySummary[] }>({
      query: tagsQuery
    });
    return data.tags;
  },
  { default: () => [] }
);
const popularTags = computed(() =>
  [...tags.value]
    .sort((left, right) => right.articles.length - left.articles.length)
    .slice(0, 8)
);
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/*  */
.box-card .tags .tag {
  margin: 0 5px 5px 0;
  cursor: pointer;
}
</style>
