<template>
  <el-menu
    :default-active="route.path"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/archive">归档</el-menu-item>
    <el-menu-item index="/article/random">随便看看</el-menu-item>
    <el-menu-item index="/about">关于我</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped>
.el-menu {
  border-bottom: 0;
}
</style>
