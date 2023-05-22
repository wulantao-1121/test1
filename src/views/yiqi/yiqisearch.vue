<template>
  <!-- 仪器搜索 -->
  <div class="yiqi_search">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-select v-model="formInline.region" placeholder="活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
      <el-select v-model="formInline.lei" placeholder="按类分类">
        <el-option value="shanghai"></el-option>
        <el-option value="beijing"></el-option>
      </el-select>
      <el-form-item>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'yiqisearch',
  data() {
    return {
      formInline: {
        lei: '',
        region: ''
      },
      input: ''
    }
  }
}
</script>

<style>
</style>