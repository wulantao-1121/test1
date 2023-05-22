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
        <li class="notice_li">
          <div class="notice_img"></div>
          <div class="notice_content">
            <h1>
              <a href="javascript:;">关于开展贵重实验仪器设备使用管理情况评价考核工</a>
            </h1>
            <span class="notice_time">发布时间:2023-05-09</span>
          </div>
        </li>
        <li class="notice_li">
          <div class="notice_img"></div>
          <div class="notice_content">
            <h1>
              <a href="javascript:;">关于开展贵重实验仪器设备使用管理情况评价考核工</a>
            </h1>
            <span class="notice_time">发布时间:2023-05-09</span>
          </div>
        </li>
        <li class="notice_li">
          <div class="notice_img"></div>
          <div class="notice_content">
            <h1>
              <a href="javascript:;">关于开展贵重实验仪器设备使用管理情况评价考核工</a>
            </h1>
            <span class="notice_time">发布时间:2023-05-09</span>
          </div>
        </li>
        <li class="notice_li">
          <div class="notice_img"></div>
          <div class="notice_content">
            <h1>
              <a href="javascript:;">关于开展贵重实验仪器设备使用管理情况评价考核工</a>
            </h1>
            <span class="notice_time">发布时间:2023-05-09</span>
          </div>
        </li>
      </ul>
      <div class="notice_hot">
        <div class="hot_title">
          <h1>热点公告</h1>
          <a href="javascript:;" class="hot_more">更多>></a>
        </div>
        <ul class="hot_list">
          <li>
            <a href="javascript:;">关于开展贵重实验仪器设备使用管理情况评</a>
          </li>
          <li>
            <a href="javascript:;">关于开展贵重实验仪器设备使用管理情况评</a>
          </li>
          <li>
            <a href="javascript:;">关于开展贵重实验仪器设备使用管理情况评</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="notice_page">
      <el-pagination background layout="prev, pager, next" :total="100"> </el-pagination>
    </div>
  </div>
</template>

<script>
import '@/assets/css/newsornotice.css'
export default {
  name: 'Notice'
}
</script>

<style>
</style>