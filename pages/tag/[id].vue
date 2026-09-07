<template>
  <div>
    <el-alert v-if="error" title="标签文章加载失败，请稍后重试" type="error" show-icon />
    <el-skeleton :loading="status === 'pending'" :rows="5" animated>
      <h1 class="page-title">标签：{{ tag?.name || id }}</h1>
      <el-empty v-if="!tag?.articles.length" description="该标签下暂无文章" />
      <el-card v-for="article in tag?.articles || []" :key="article.id" class="article-card">
        <PostCard :article="article" />
      </el-card>
    </el-skeleton>
  </div>
</template>

<script setup lang="ts">
import { useApolloClient } from "@vue/apollo-composable";
import { tagQuery } from "~/apollo/queries/taxonomies";
import PostCard from "~/components/post.vue";
import type { TaxonomyDetail } from "~/types/taxonomy";

const route = useRoute();
const id = computed(() => String(route.params.id));
const { resolveClient } = useApolloClient();
const { data: tag, status, error } = await useAsyncData(
  () => `tag:${id.value}`,
  async () => {
    const { data } = await resolveClient().query<{ tag: TaxonomyDetail | null }>({
      query: tagQuery,
      variables: { where: { id: id.value } }
    });
    return data.tag;
  },
  { watch: [id], default: () => null }
);

useHead(() => ({ title: tag.value?.name ? `标签：${tag.value.name}` : "标签" }));
</script>

<style scoped>
.page-title {
  margin-bottom: 18px;
}
.article-card {
  margin-bottom: 20px;
}
</style>
