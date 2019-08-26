<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>热门标签</span>
      <el-button style="float: right; padding: 3px 0" type="text">全部标签</el-button>
    </div>
    <div class="tags">
      <el-tag class="tag">标签一(11)</el-tag>
      <el-tag class="tag" type="success">标签二(21)</el-tag>
      <el-tag class="tag" type="info">标签三(24)</el-tag>
      <el-tag class="tag" type="warning">标签四(21)</el-tag>
      <el-tag class="tag" type="danger">标签五(31)</el-tag>
    </div>
  </el-card>
</template>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
/*  */
.box-card .tags .tag {
  margin-bottom: 5px;
}
</style>