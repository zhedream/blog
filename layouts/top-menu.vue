<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-demo aa"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
  >
    <el-menu-item index="/">首页</el-menu-item>
    <!-- <el-menu-item index="/mavon">编辑器</el-menu-item> -->
    <!-- <el-menu-item index="/category">分类</el-menu-item> -->
    <el-menu-item index="/archive">归档</el-menu-item>
    <!-- <el-menu-item index="/tag">标签</el-menu-item> -->
    <el-menu-item index="/article/random">随便看看</el-menu-item>
    <el-menu-item index="/about">关于我</el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: mapGetters({
    pageIndex: "getPageIndex"
  }),
  asyncData(context) {
    console.log(123);
    // asyncData方法是在组件初始化前被调用的
    //所以该方法没有办法通过this来引用组件的实例对象
  },
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$store.commit("setPageIndex", key);
      console.log(key, keyPath);
    }
  }
};
</script>

<style >
el-menu-item a {
  display: block;
  width: 100%;
  height: 100%;
}
</style>




