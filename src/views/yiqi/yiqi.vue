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
    <Yiqisearch></Yiqisearch>
    <!-- 仪器列表 -->
    <div class="yiqi_list">
      <ul class="yiqi_ul">
        <YiqiList></YiqiList>
        <YiqiList></YiqiList>
        <YiqiList></YiqiList>
        <YiqiList></YiqiList>
        <YiqiList></YiqiList>
        <YiqiList></YiqiList>
      </ul>
      <!-- 热门仪器 -->
      <YiqiHot></YiqiHot>
      <!-- 页码 -->
      <YiqiPage></YiqiPage>
    </div>
  </div>
</template>

<script>
import '@/assets/css/instrumentList.css'
import Yiqisearch from './yiqisearch.vue'
import YiqiList from './yiqiList.vue'
import YiqiHot from './yiqiHot.vue'
import YiqiPage from './yiqiPage.vue'
export default {
  name: 'Yiqi',
  components: {
    Yiqisearch,
    YiqiList,
    YiqiHot,
    YiqiPage
  }
}
</script>

<style>
</style>