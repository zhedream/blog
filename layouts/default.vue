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
      <div v-if="icp.miit || icp.police" class="site-beian">
        <a
          v-if="icp.miit"
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          >{{ icp.miit }}</a
        >
        <a
          v-if="icp.police"
          :href="policeHref"
          target="_blank"
          rel="noopener noreferrer"
          ><img :src="beianIcon" alt="" width="14" height="14" />{{
            icp.police
          }}</a
        >
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import InfoCard from "~/components/index/info.vue";
import TagCard from "~/components/index/tag.vue";
import TypeCard from "~/components/index/type.vue";
import TopMenu from "~/components/TopMenu.vue";
import beianIcon from "~/assets/images/beian.png";

const icp = useRuntimeConfig().public.icp;
const policeHref = computed(() =>
  icp.policeCode
    ? `https://beian.mps.gov.cn/#/query/webSearch?code=${icp.policeCode}`
    : "https://beian.mps.gov.cn/",
);
</script>
