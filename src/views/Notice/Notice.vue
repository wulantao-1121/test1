<template>
  <!-- 公告主体 -->
  <div class="notice_container">
    <!-- 面包屑 -->
    <div id="crumbs">
      <el-breadcrumb separator>
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">平台公告</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 新闻列表 -->
    <div class="notice_list">
      <ul class="notice_ul">
        <NoticeList v-for="item in nocticeList.records" :key="item.id" :noticeList="item"></NoticeList>

      </ul>
      <div class="notice_hot">
        <div class="hot_title">
          <h1>热点公告</h1>
          <a href="javascript:;" class="hot_more">更多>></a>
        </div>
        <ul class="hot_list">
          <NoticeHot v-for="item in hot.records" :key="item.id" :noticeHot="item"></NoticeHot>
        </ul>
      </div>
      <Page :total="nocticeList.total" :pageSize="nocticeList.size" :currentPage="nocticeList.current" @getPage="getPage"></Page>
    </div>

  </div>
</template>

<script>
import '@/assets/css/newsornotice.less'
import NoticeList from './NoticeList.vue'
import NoticeHot from './NoticeHot.vue'
import { mapState } from 'vuex'
export default {
  name: 'Notice',
  components: {
    NoticeList,
    NoticeHot
  },
  data() {
    return {
      notice: {
        page: 1,
        pageSize: 10,
        leixing: 2
      },
      hotList: {
        pageSize: 5,
        leixing: 2
      }
    }
  },

  computed: {
    ...mapState({
      nocticeList: state => state.notice.noticeList,
      hot: state => state.notice.hot
    })
  },
  methods: {
    getNotice() {
      this.$store.dispatch('notice', this.notice)
    },
    getHot() {
      this.$store.dispatch('hot', this.hotList)
    },
    getPage(index) {
      this.notice.page = index
      this.$router.push({ name: 'notice', query: { page: this.notice.page, pageSize: this.notice.pageSize, leixing: this.notice.leixing } })
      this.getNotice()
    }
  },
  mounted() {
    this.getNotice()
    this.getHot()
  }
}
</script>

<style>
</style>