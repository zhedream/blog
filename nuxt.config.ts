export default defineNuxtConfig({
  srcDir: ".",
  compatibilityDate: "2026-09-01",

  app: {
    head: {
      title: "blog",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "者之梦的个人博客" }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    }
  },

  css: ["~/assets/editor.md/css/editormd.css"],

  modules: ["@element-plus/nuxt"],

  runtimeConfig: {
    public: {
      graphqlEndpoint: "/admin/graphql"
    }
  },

  typescript: {
    typeCheck: true
  }
});
