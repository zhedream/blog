<template>
  <el-card>
    <template #header><strong>文章标签</strong></template>
    <el-alert v-if="error" title="标签加载失败，请稍后重试" type="error" show-icon />
    <el-skeleton :loading="status === 'pending'" :rows="4" animated>
      <el-empty v-if="!tags.length" description="暂无标签" />
      <div v-else class="taxonomy-grid">
        <el-tag
          v-for="tag in tags"
          :key="tag.id"
          class="tag"
          type="info"
          @click="navigateTo(`/tag/${tag.id}`)"
        >{{ tag.name || "未命名" }}（{{ tag.articles.length }}）</el-tag>
      </div>
    </el-skeleton>
  </el-card>
</template>

<script setup lang="ts">
import { useApolloClient } from "@vue/apollo-composable";
import { tagsQuery } from "~/apollo/queries/taxonomies";
import type { TaxonomySummary } from "~/types/taxonomy";

useHead({ title: "标签" });

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
</script>

<style scoped>
.taxonomy-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.tag {
  cursor: pointer;
}
</style>
