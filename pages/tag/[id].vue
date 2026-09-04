<template>
  <el-card>
    <h1>标签：{{ route.params.id }}</h1>
    <p>标签文章列表将在标签查询接口接入后显示。</p>
  </el-card>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
