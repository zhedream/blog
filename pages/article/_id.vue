<template>
  <div class="post">
    <el-card shadow="always">
      <div class="head">
        <h1 class="title">{{article.title}}</h1>
        <div class="icon">
          <i class="el-icon-user">&nbsp;者之梦</i>
          <i class="el-icon-time">&nbsp;{{article.createdAt}}</i>
          <i class="el-icon-folder">&nbsp;{{article.type?article.type.name:'其他'}}</i>
          <i class="el-icon-view">&nbsp;{{article.clickCount?article.clickCount:0}}</i>
        </div>
      </div>
      <div v-html="article.html" class="content"></div>
      <div class="footer">
        <div class="tags" v-if="article.tags" >
          <el-tag class="tag" v-for="(item, index) in article.tags" :key="index" type="info">{{item.name}}</el-tag>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import article from "~/apollo/queries/article.gql";
export default {
  apollo: {
    article: {
      prefetch: true,
      query: article,
      variables() {
        return {
          where: {
            id: this.$route.params.id
          }
        };
      }
    }
  },
  data() {
    return {
      title: "这里是标题",
      content:
        '<p>欢迎来到我的个人主页，Have a good time! ヾ(≧▽≦*)o</p><p>于 2018/4/21，终于借助 Hexo 和 Coding 的页面托管服务将个人主页搭建完毕。</p><p>于 2019/1/28，更新主题并换用 Netlify 托管。</p><p>于 2019/7/21，更换Valine评论后端储存，评论丢失，从零开始。</p><p>P.S. 如果有谁想一起建个人主页的，可以通过”关于”联系我一起探讨，顺便交换一下友链蛤</p><div class="full-width auto-padding tags"><a href="/tags/其他/"><i class="fas fa-hashtag fa-fw"></i> 其他</a></div>'
    };
  },
  created() {
    console.log(123);
  }
};
</script>

<style>
.post .head {
  margin-bottom: 10px;
  text-align: center;
}

.post .head .icon i {
  margin-right: 5px;
}
.post .content {
  margin-bottom: 10px;
}
.post .footer {
  clear: both;
  overflow: hidden;
}
.post .footer .tags {
  float: left;
}
.post .footer .tags .tag {
  margin-right: 5px;
}
.post .footer .read {
  float: right;
}
</style>
