export default defineNuxtConfig({
  srcDir: ".",
  compatibilityDate: "2026-09-01",

  app: {
    head: {
      title: "者之梦",
      titleTemplate: "%s · 者之梦",
      htmlAttrs: { lang: "zh-CN" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "者之梦的个人博客" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  css: ["~/assets/css/default.css"],

  modules: ["@element-plus/nuxt"],

  runtimeConfig: {
    graphqlUpstream: "http://127.0.0.1:7200/graphql",
    public: {
      graphqlEndpoint: "/api/graphql",
    },
  },

  typescript: {
    typeCheck: true,
  },
});
