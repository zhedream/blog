import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";

export default defineNuxtPlugin((nuxtApp) => {
  const configuredEndpoint = useRuntimeConfig().public.graphqlEndpoint;
  const endpoint = import.meta.server && configuredEndpoint.startsWith("/")
    ? new URL(configuredEndpoint, useRequestURL()).toString()
    : configuredEndpoint;

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: endpoint }),
    ssrMode: import.meta.server
  });

  nuxtApp.vueApp.provide(DefaultApolloClient, client);
});
