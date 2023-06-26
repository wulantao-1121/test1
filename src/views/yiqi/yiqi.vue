<template>
  <!-- 仪器主体内容 -->
  <div class="instrument_container">
    <!-- 面包屑 -->
    <div id="crumbs">
      <el-breadcrumb separator>
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">仪器列表</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 仪器搜索 -->
    <Yiqisearch :yiqixi="yiqiXi" :yiqifenlei="yiqiFenLei" @sousuo="sousuo"></Yiqisearch>
    <!-- 仪器列表 -->
    <div class="yiqi_list">
      <ul class="yiqi_ul">
        <YiqiList v-for="item in yiqiList.records" :key="item.id" :list="item"></YiqiList>
      </ul>
      <!-- 热门仪器 -->
      <YiqiHot :hostList="yiqihot"></YiqiHot>
      <!-- current-page 当前页   -->
      <!-- page-count 总页数 -->
      <!-- page-size 每页显示的个数 -->
      {{ parseInt($route.query.page) }}
      <Page :total="yiqiList.total" :pageSize="yiqiList.size" :currentPage="parseInt($route.query.page)" @getPage="getPage"></Page>
    </div>
  </div>
</template>

<script>
import '@/assets/css/instrumentList.less'
import Yiqisearch from './yiqisearch.vue'
import YiqiList from './yiqiList.vue'
import YiqiHot from './yiqiHot.vue'
import { mapState } from 'vuex'
export default {
  name: 'Yiqi',
  components: {
    Yiqisearch,
    YiqiList,
    YiqiHot
  },
  data() {
    return {
      yiqi: {
        page: 1, //当前页数
        pageSize: 10, //每页数据个数
        orders: [],
        total: '', //返回数据的总个数
        pages: '',
        xiId: '',
        yiqifenleiId: '',
        host: '11'
      },
      yiqiHot: {
        page: 1,
        pageSize: 5,
        host: 'yiqihot'
      }
    }
  },
  mounted() {
    this.yiqi.page = this.$route.query.page || 1
    this.yiqi.pageSize = this.$route.query.pageSize || 10
    this.getyiqidata()
    this.getyiqiHot()
    this.getyiqiXi()
    this.getYiQiFenlei()
  },
  computed: {
    ...mapState({
      yiqiList: state => state.yiqi.yiqiList,
      yiqiXi: state => state.yiqi.yiqiXi,
      yiqiFenLei: state => state.yiqi.yiqiFenLei,
      yiqihot: state => state.yiqi.yiqiHot
    })
  },
  methods: {
    // 向服务器发请求获取仪器数据，（根据参数不同返回不同的数据进行展示）
    getyiqidata() {
      this.$store.dispatch('yiqiList', this.yiqi)
    },
    getPage(index) {
      this.$cleanup()
      this.yiqi.page = index
      this.$router.push({ name: 'yiqi', query: { page: this.yiqi.page, pageSize: this.yiqi.pageSize, xiId: this.yiqi.xiId, yiqifenleiId: this.yiqi.yiqifenleiId } })
      this.getyiqidata()
      sessionStorage.setItem('yiqiPage', index)
    },
    getyiqiHot() {
      this.$store.dispatch('getyiqiHot', this.yiqiHot)
    },
    getyiqiXi() {
      this.$store.dispatch('yiqiXi')
    },
    getYiQiFenlei() {
      this.$store.dispatch('yiqiFenlei')
    },
    sousuo(value) {
      this.yiqi.xiId = value.xiId
      this.yiqi.yiqifenleiId = value.yiqifenleiId
    },
    // 切换时请空数据
    $cleanup() {
      this.$store.commit('clearData')
    }
  },
  beforeDestroy() {}
}
</script>

<style></style>
