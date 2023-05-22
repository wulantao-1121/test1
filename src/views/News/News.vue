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
        <newsList></newsList>
        <newsList></newsList>
        <newsList></newsList>
        <newsList></newsList>
      </ul>
      <!-- 新闻热点 -->
      <newsHot></newsHot>
    </div>
    <div class="news_page">
      <el-pagination background layout="prev, pager, next" :total="100"> </el-pagination>
    </div>
  </div>
</template>

<script>
import '@/assets/css/newsornotice.css'
import newsList from './newsList.vue'
import newsHot from './newsHot.vue'
export default {
  name: 'News',
  components: {
    newsList,
    newsHot
  }
}
</script>

<style>
</style>