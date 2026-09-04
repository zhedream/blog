<template>
  <el-container class="site-shell">
    <el-header class="site-header">
      <div class="container">
        <TopMenu />
      </div>
    </el-header>
    <el-main>
      <div class="container">
        <main class="left">
          <slot />
        </main>
        <aside class="right">
          <div class="card">
            <InfoCard />
          </div>
          <div class="card">
            <TypeCard />
          </div>
          <div class="card">
            <TagCard />
          </div>
        </aside>
      </div>
    </el-main>
    <el-footer />
  </el-container>
</template>

<script setup lang="ts">
import InfoCard from "~/components/index/info.vue";
import TagCard from "~/components/index/tag.vue";
import TypeCard from "~/components/index/type.vue";
import TopMenu from "~/components/TopMenu.vue";
</script>

<style>
html {
  height: 100%;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  height: 100%;
  background-color: #f4f4f4;
}
.site-shell {
  min-height: 100vh;
}
.site-header {
  background-color: #545c64;
}
.left {
  float: left;
  width: 68%;
}
.right {
  float: right;
  width: 26%;
}
.right .card{
  margin-bottom: 18px;
}

@media (max-width: 900px) {
  .left,
  .right {
    float: none;
    width: 100%;
  }

  .right {
    margin-top: 20px;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
