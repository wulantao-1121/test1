<template>
  <div class="page">
    <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize" :current-page="currentPage" @current-change="getPage"> </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'page',
  props: ['total', 'pageSize', 'currentPage'],
  methods: {
    getPage(index) {
      this.$emit('getPage', index)
    }
  }
}
</script>

<style>
</style>