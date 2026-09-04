# Blog

基于 Nuxt 4、Vue 3、Element Plus 和 Apollo Client 的个人博客前端。

## 环境要求

- Node.js 20.19–24
- npm 11.9.0
- `blogPrisma` GraphQL API

## 本地运行

```bash
npm ci
npm run dev
```

默认把 `/api/graphql` 请求代理到 `http://127.0.0.1:7200/graphql`。可通过环境变量覆盖后端地址：

```bash
NUXT_GRAPHQL_UPSTREAM=https://api.example.com/graphql npm run dev
```

浏览器始终访问同源 `/api/graphql`，后端地址不会暴露到客户端配置中。

## 验证

```bash
npm test
npm run typecheck
npm run build
npm run security:check
```

`security:check` 会阻止 CVE-2026-69152 受影响的 `brace-expansion` 版本及非官方 npm registry 下载地址进入锁文件。

## 部署

运行 `npm run build` 后，通过以下命令启动 Nitro server：

```bash
NUXT_GRAPHQL_UPSTREAM=https://api.example.com/graphql node .output/server/index.mjs
```
