<template>
  <div class="page">
    <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize" :current-page="currentPage" @current-change="getPage">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: ['total', 'pageSize', 'currentPage'],
  data() {
    return {}
  },
  methods: {
    getPage(index) {
      this.$emit('getPage', index)
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped></style>