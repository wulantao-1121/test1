<template>
  <!-- 仪器搜索 -->
  <div class="yiqi_search">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-select v-model="formInline.xiId" placeholder="按系分类">
        <el-option label='' value=''></el-option>
        <el-option :label=item.ximing :value=item.id v-for="item in yiqixi" :key="item.id"></el-option>
      </el-select>
      <el-select v-model="formInline.yiqifenleiId" placeholder="按类分类">
        <el-option value="shanghai"></el-option>
        <el-option value="beijing"></el-option>
      </el-select>
      <el-form-item>
        <el-input v-model="formInline.yiqiming" placeholder="请输入内容"></el-input>
        <el-button type="primary" @click="getForm()">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'yiqisearch',
  props: ['yiqixi'],
  data() {
    return {
      formInline: {
        xiId: '',
        yiqifenleiId: '',
        yiqiming: ''
      }
    }
  },
  methods: {
    getForm() {
      console.log(this.formInline)
    }
  }
}
</script>

<style>
</style>