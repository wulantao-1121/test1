<template>
  <!-- 新闻主体内容 -->
  <div class="news_container">
    <!-- 面包屑 -->
    <div id="crumbs">
      <el-breadcrumb separator>
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">新闻动态</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 新闻列表 -->
    <div class="news_list">
      <ul class="news_ul">
        <newsList v-for="item in news.records" :key="item.id" :newList="item"></newsList>
      </ul>
      <!-- 新闻热点 -->
      <div class="news_hot">
        <div class="hot_title">
          <h1>新闻热点</h1>
          <a href="javascript:;" class="hot_more">更多>></a>
        </div>
        <ul class="hot_list">
          <newsHot v-for="item in hot.records" :key="item.id" :newsList="item"></newsHot>
        </ul>
      </div>
    </div>
    <Page :total="news.total" :pageSize="news.size" :currentPage="news.current" @getPage="getPage"></Page>
  </div>
</template>

<script>
import '@/assets/css/newsornotice.less'
import newsList from './newsList.vue'
import newsHot from './newsHot.vue'
import { mapState } from 'vuex'
export default {
  name: 'News',
  components: {
    newsList,
    newsHot
  },
  data() {
    return {
      newsitem: {
        page: 1,
        pageSize: 10,
        leixing: 1
      },
      hotList: {
        pageSize: 5,
        leixing: 1
      }
    }
  },
  computed: {
    ...mapState({
      news: state => state.news.news,
      hot: state => state.news.hot
    })
  },
  methods: {
    getNews() {
      this.$store.dispatch('news', this.newsitem)
    },

    getPage(index) {
      this.newsitem.page = index
      this.$router.push({ name: 'news', query: { page: this.newsitem.page, pageSize: this.newsitem.pageSize, leixing: this.newsitem.leixing } })
      this.getNews()
    },
    getHotList() {
      this.$store.dispatch('hot', this.hotList)
    }
  },
  mounted() {
    this.getNews()
    this.getHotList()
  }
}
</script>

<style>
</style>