<template>
  <el-container>
    <el-header style="background-color: rgb(84, 92, 100);">
      <!-- 布局 -->
      <div class="container">
        <!-- 范围 -->
        <TopMenu />
      </div>
    </el-header>
    <el-main>
      <div class="container">
        <div class="left" style>
          <nuxt />
        </div>
        <div class="right" style>
          <div class="card">
            <info />
          </div>
          <!-- <div class="card">
            <type />
          </div> -->
          <div class="card">
            <tag />
          </div>
        </div>
      </div>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import TopMenu from "~/layouts/top-menu.vue";
import Info from "~/components/index/info.vue";
import Type from "~/components/index/type.vue";
import Tag from "~/components/index/tag.vue";

export default {
  components: {
    TopMenu,
    Info,
    Type,
    Tag
  }
};
</script>

<style>
@import "../assets/css/default.css";
html {
  height: 100%;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  height: 100%;
  background-color: #f4f4f4;
}
.left {
  float: left;
  width: 68%;
}
.right {
  float: right;
  width: 26%;
}
.right .card{
  margin-bottom: 18px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
