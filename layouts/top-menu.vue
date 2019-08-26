<template>
  <el-menu
    :default-active="$route.name"
    class="el-menu-demo aa"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="index">
      <a href="/" target>首页</a>
    </el-menu-item>
    <el-menu-item index="mavon">
      <a href="/mavon" target>编辑器</a>
    </el-menu-item>
    <el-menu-item index="category">
      <a href="/category" target>分类</a>
    </el-menu-item>
    <el-menu-item index="archive">
      <a href="/archive" target>归档</a>
    </el-menu-item>
    <el-menu-item index="tag">
      <a href="/tag" target>标签</a>
    </el-menu-item>
    <el-menu-item index="article-random">
      <a href="/article/random" target>随便看看</a>
    </el-menu-item>
    <el-menu-item index="about">
      <a href="/about" target>关于我</a>
    </el-menu-item>
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
</style>




