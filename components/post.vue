<template>
  <div class="post">
    <div class="head">
      <h1 class="title">{{title}}</h1>
      <div class="icon">
        <i class="el-icon-user">&nbsp;者之梦</i>
        <i class="el-icon-time">&nbsp;2019-10-26</i>
        <i class="el-icon-folder">&nbsp;分类</i>
        <i class="el-icon-view">&nbsp;999</i>
      </div>
    </div>
    <div v-html="content" class="content"></div>
    <div class="footer">
      <div class="tags">
        <el-tag type="info">标签二</el-tag>
      </div>
      <el-button type="danger" class="read"><a href="/article/1">阅读全文</a></el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "这里是标题"
    },
    content: {
      type: String,
      default:
        '<p>欢迎来到我的个人主页，Have a good time! ヾ(≧▽≦*)o</p><p>于 2018/4/21，终于借助 Hexo 和 Coding 的页面托管服务将个人主页搭建完毕。</p><p>于 2019/1/28，更新主题并换用 Netlify 托管。</p><p>于 2019/7/21，更换Valine评论后端储存，评论丢失，从零开始。</p><p>P.S. 如果有谁想一起建个人主页的，可以通过”关于”联系我一起探讨，顺便交换一下友链蛤</p><div class="full-width auto-padding tags"><a href="/tags/其他/"><i class="fas fa-hashtag fa-fw"></i> 其他</a></div>'
    }
  },
  computed: {
    aaa() {
      return "hello";
    }
  },
  data() {
    return {
      markdownOption: {
        bold: true // 粗体
      },
      handbook: "hello"
    };
  },
  created() {
    console.log(this.hello);
  }
};
</script>

<style>
.post .head {
  margin-bottom: 10px;
}
.post .head .icon i {
  margin-right: 5px;
}
.post .content {
  margin-bottom: 10px;
}

.post .footer{
    clear: both;
    overflow: hidden;
}
.post .footer .tags{
    float: left;
}
.post .footer .read{
    float: right;
}
</style>
