<template>
  <div class="post">
    <div class="head">
      <h2 class="title">{{ article.title }}</h2>
      <div class="icon">
        <span>作者：者之梦</span>
        <span>时间：{{ article.createdAt }}</span>
        <span>分类：{{ article.type?.name || "其他" }}</span>
        <span>阅读：{{ article.clickCount || 0 }}</span>
      </div>
    </div>
    <div v-html="article.desc" class="content"></div>
    <div class="footer">
      <div v-if="article.tags?.length" class="tags">
        <el-tag
          v-for="item in article.tags"
          :key="item.id"
          class="tag"
          size="small"
          type="info"
        >{{ item.name }}</el-tag>
      </div>
      <el-button type="danger" class="read" @click="navigateTo(`/article/${article.id}`)">阅读全文</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
type ArticleSummary = {
  id: string;
  title: string;
  desc?: string | null;
  clickCount?: number | null;
  createdAt?: string | null;
  type?: { name?: string | null } | null;
  tags?: Array<{ id: string; name?: string | null }>;
};

withDefaults(defineProps<{ article?: ArticleSummary }>(), {
  article: () => ({ id: "", title: "" })
});
</script>

<style>
.post .head {
  margin-bottom: 10px;
    text-align: center;
}
.post .head .icon i {
  margin-right: 5px;
}
.post .head .icon {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  color: #909399;
  font-size: 13px;
}
.post .content {
  margin-bottom: 10px;
}

.post .footer {
  clear: both;
  overflow: hidden;
}
.post .footer .tags {
  float: left;
}
.post .footer .tags .tag {
  margin-right: 5px;
}
.post .footer .read {
  float: right;
}
</style>
