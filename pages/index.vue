<template>
  <div class="index">
    <el-card v-for="(item, index) in articles" :key="index" class="box-card">
      <post :article="item"/>
    </el-card>

  </div>
</template>

<script>
import Post from "~/components/post.vue";
import articles from "~/apollo/queries/articles.gql";

export default {
  apollo: {
    articles: {
      prefetch: true,
      query: articles
    }
  },
  components: {
    Post
  },
  head: {
    title: "主页"
  }
};
</script>

<style>
.index {
  width: 100%;
  background: white;
}
.index .box-card{
  margin-bottom: 20px;
}
</style>
