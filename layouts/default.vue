<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">跳到正文</a>
    <header class="site-header">
      <div class="container"><TopMenu /></div>
    </header>
    <div class="container site-grid">
      <main id="main-content" class="left"><slot /></main>
      <aside class="right" aria-label="博客信息">
        <InfoCard /><TypeCard /><TagCard />
        <p class="sidebar-note">
          保持好奇，慢慢积累。<br />每一次记录，都是新的开始。
        </p>
      </aside>
    </div>
    <footer class="site-footer container">
      <NuxtLink to="/">者之梦 <span> / </span> 开发 · 思考 · 生活</NuxtLink
      ><span>认真生活，自由书写。</span>
    </footer>
  </div>
</template>
<script setup lang="ts">
import InfoCard from "~/components/index/info.vue";
import TagCard from "~/components/index/tag.vue";
import TypeCard from "~/components/index/type.vue";
import TopMenu from "~/components/TopMenu.vue";
</script>
