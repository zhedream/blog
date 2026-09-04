<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
      <span>热门标签</span>
      <el-button link>全部标签</el-button>
      </div>
    </template>
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

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/*  */
.box-card .tags .tag {
  margin: 0 5px 5px 0;
}
</style>
