import { proxyRequest } from "h3";

export default defineEventHandler((event) => {
  const upstream = useRuntimeConfig(event).graphqlUpstream;
  return proxyRequest(event, upstream);
});
