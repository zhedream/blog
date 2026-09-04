<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
      <span>文章分类</span>
      <el-button link>全部分类</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
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

</style>
