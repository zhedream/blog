<template>
  <div class="topbar">
    <NuxtLink to="/" class="brand" aria-label="者之梦首页"
      ><span class="brand-mark">梦</span
      ><span>者之梦<small>ZHEDREAM / BLOG</small></span></NuxtLink
    >
    <nav aria-label="主导航">
      <NuxtLink
        v-for="item in links"
        :key="item.to"
        :to="item.to"
        :class="{ active: route.path === item.to }"
        :aria-current="route.path === item.to ? 'page' : undefined"
        >{{ item.label }}</NuxtLink
      >
    </nav>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const links = [
  { to: "/", label: "首页" },
  { to: "/archive", label: "归档" },
  { to: "/article/random", label: "随便看看" },
  { to: "/about", label: "关于我" },
];
</script>
