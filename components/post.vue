<template>
  <div class="post">
    <div class="head">
      <h1 class="title">{{article.title}}</h1>
      <div class="icon">
        <i class="el-icon-user">&nbsp;者之梦</i>
        <i class="el-icon-time">&nbsp;{{article.createdAt}}</i>
        <i class="el-icon-folder">&nbsp;{{article.type?article.type.name:'其他'}}</i>
        <i class="el-icon-view">&nbsp;{{article.clickCount?article.clickCount:0}}</i>
      </div>
    </div>
    <div v-html="article.desc" class="content"></div>
    <div class="footer">
      <div class="tags" v-if="article.tags">
        <el-tag
          class="tag"
          size="mini"
          v-for="(item, index) in article.tags"
          :key="index"
          type="info"
        >{{item.name}}</el-tag>
      </div>
      <el-button type="danger" class="read" @click="linkto('/article/'+article.id)">
        <a :href="'/article/'+article.id">阅读全文</a>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: {}
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
  },
  methods: {
    linkto(path) {
      location.href = path;
    }
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
