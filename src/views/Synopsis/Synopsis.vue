<template>
  <!-- 平台简介主体 -->
  <div class="synopsis">
    <!-- 面包屑 -->
    <div id="crumbs">
      <el-breadcrumb separator>
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">平台简介</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="ptjj_content">
      <div class="kong"></div>
      <div class="ptjj_title">山东信息职业技术学院平台简介</div>
      <div class="ptjj_introduce" v-for="item in synopsis.records" :key="item.id" v-html="item.neirong"></div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/synopsis.less'
import { mapState } from 'vuex'
export default {
  name: 'Synopsis',

  mounted() {
    this.getSynopsis()
  },
  methods: {
    getSynopsis() {
      this.$store.dispatch('getSynopsis')
    }
  },
  computed: {
    ...mapState({
      synopsis: state => state.synopsis.synopsisList
    })
  }
}
</script>

<style>
</style>