<template>
  <div class="index">
    <el-card class="box-card">
      <post />
    </el-card>
    <el-card class="box-card">
      <post />
    </el-card>
    <el-card class="box-card">
      <post />
    </el-card>
    <el-card class="box-card">
      <post />
    </el-card>
    <el-card class="box-card">
      <post />
    </el-card>
  </div>
</template>

<script>
import Post from "~/components/post.vue";
import users from "~/apollo/queries/users";

export default {
  apollo: {
    users: {
      prefetch: true,
      query: users
    }
  },
  components: {
    Post
  },
  head: {
    title: "Users with Apollo"
  }
};
</script>

<style>
.index {
  width: 100%;
  background: white;
}
.index .box-card{
  margin-bottom: 20px;
}
</style>
