<template>
  <!-- 规章指南 -->
  <div class="guide_container">
    <!-- 面包屑 -->
    <div id="crumbs">
      <el-breadcrumb separator>
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">规章指南</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="guide_list">
      <ul class="guide_ul">
        <gudieList v-for="item in guide.records" :key="item.id" :gudieList="item"></gudieList>
      </ul>
    </div>
    <Page :total="guide.total" :pageSize="guide.size" :currentPage="guide.current" @getPage="getPage"></Page>
  </div>
</template>

<script>
import '@/assets/css/newsornotice.less'
import { mapState } from 'vuex'
import gudieList from './gudieList.vue'
export default {
  name: 'Guide',
  data() {
    return {
      guideitem: {
        page: 1,
        pageSize: 10,
        leixing: 3
      }
    }
  },
  components: {
    gudieList
  },
  methods: {
    getGuide() {
      this.$store.dispatch('getGuide', this.guideitem)
    },
    getPage(index) {
      this.guideitem.page = index
      this.$router.push({ name: 'gudie', query: { page: this.guideitem.page, pageSize: this.guideitem.pageSize, leixing: this.guideitem.leixing } })
      this.getGuide()
    }
  },
  mounted() {
    this.guideitem.page = this.$route.query.page || 1
    this.guideitem.pageSize = this.$route.pageSize || 10
    this.getGuide()
  },
  computed: {
    ...mapState({
      guide: state => state.guide.guide
    })
  }
}
</script>

<style></style>
