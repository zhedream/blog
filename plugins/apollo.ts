import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const endpoint = import.meta.server
    ? config.graphqlUpstream
    : config.public.graphqlEndpoint;

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: endpoint }),
    ssrMode: import.meta.server
  });

  nuxtApp.vueApp.provide(DefaultApolloClient, client);
});
