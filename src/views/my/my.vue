<template>
  <!-- 个人信息 我的主体 -->
  <div class="my">
    <!-- 面包屑 -->
    <div id="crumbs">
      <el-breadcrumb separator>
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">我的</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="my_content">
      <div class="information">个人信息</div>
      <div class="grxx_box">
        <div class="left_sidebar">
          <div class="grxx_img">
            <img src="" alt="" />
            <h1 class="grxx_name">王老师</h1>
          </div>
          <Left></Left>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/my.less'
import Left from './left.vue'
export default {
  name: 'my',
  components: {
    Left
  }
}
</script>

<style>
</style>