<template>
  <div class="header">
    <!-- 登录 -->
    <div class="login_box">
      <div class="login_nav">
        <template v-if="false">
          <a href="javascript:;" class="login_prompt" @click="$router.push('/login')">欢迎您！请登录</a>
        </template>
        <template>
          <a href="javascript:;" class="login_prompt" @click="$router.push('/my/used/yishiyong')">admin</a>
        </template>
      </div>
    </div>
    <!-- 头部logo -->
    <div class="header_logo">
      <div class="logo">
        <img src="../assets/images/sdcit_logo_white.png" alt="" />
      </div>
    </div>
    <!-- nav导航 -->
    <div class="nav_body">
      <div class="nav">
        <ul class="nav_list">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/yiqi">仪器列表</router-link>
          </li>
          <li>
            <router-link to="/news">新闻动态</router-link>
          </li>
          <li>
            <router-link to="/notice">平台公告</router-link>
          </li>
          <li>
            <router-link to="/guide">规章指南</router-link>
          </li>
          <li>
            <router-link to="/synopsis">平台简介</router-link>
          </li>
        </ul>
        <div class="search">
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item>
              <el-input v-model="formLabelAlign.name"></el-input>
              <el-button type="primary" @click="$router.push('/search')">搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
/deep/.el-form-item__content {
  display: flex;
  .el-input {
    .el-input__inner {
      width: 250px;
    }
  }
}
</style>