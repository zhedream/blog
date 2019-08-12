<template>
  <div class="container">
    <div>HELLO NUXT</div>
    <div>ADD nuxtjs-apollo</div>
    <ul>
      <li v-for="user in users" :key="user.id">
        <span>{{user.id}}</span>
        <span>{{user.username}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import users from "~/apollo/queries/users";

export default {
  apollo: {
    users: {
      prefetch: true,
      query: users
    }
  },
  components: {
    Logo
  },
  head: {
    title: "Users with Apollo"
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
