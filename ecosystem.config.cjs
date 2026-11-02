module.exports = {
  apps: [
    {
      name: "blog",
      cwd: "/home/lhz/apps/blog",
      script: ".output/server/index.mjs",
      env_production: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: "3000",
        NITRO_PORT: "3000",
        NUXT_GRAPHQL_UPSTREAM: "http://127.0.0.1:7200/graphql",
        GRAPHQL_ENDPOINT: "http://127.0.0.1:7200/graphql"
      }
    }
  ]
};
