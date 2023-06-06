<template>
  <!-- 规章指南 -->
  <div class="guide">
    <!-- 面包屑 -->
    <div id="crumbs">
      <el-breadcrumb separator>
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">规章指南</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="gzzn_content">
      <div class="gzzn_title">仪器共享平台使用过程中的常见问题</div>
      <div class="kong"></div>
      <div class="gzzn_regulations" v-for="item,index in guide.records" :key="item.id">
        <h2>{{index +1}}{{ item.biaoti }}</h2>
        <p>{{ item.neirong }}</p>

      </div>
    </div>
  </div>

</template>

<script>
import '@/assets/css/guide.less'
import { mapState } from 'vuex'
export default {
  name: 'Guide',
  methods: {
    getGuide() {
      this.$store.dispatch('getGuide')
    }
  },
  mounted() {
    this.getGuide()
  },
  computed: {
    ...mapState({
      guide: state => state.guide.guide
    })
  }
}
</script>

<style>
</style>