<template>
  <div class="header">
    <!-- 登录 -->
    <div class="login_box">
      <div class="login_nav">
        <template v-if="!$store.state.login.token">
          <div class="loginandout">
            <a href="javascript:;" class="login_prompt" @click="$router.push('/login')">欢迎您！请登录</a>
          </div>
        </template>
        <template v-else>
          <div class="loginandout">
            <a href="javascript:;" class="login_prompt" @click="$router.push('/my/used/yishiyong/page')">{{$store.state.login.token}}</a>
            <span>|</span>
            <a href="javascript:;" class="login_out" @click="loginOut">退出登录</a>
          </div>
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
            <router-link :to="{name:'yiqi',query:{page:yiqi.page,pageSize:yiqi.pageSize}}">仪器列表</router-link>
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
        </ul> <!-- @click="$router.push('/search')" -->
        <div class="search">
          <el-form :label-position="labelPosition" label-width="80px" :model="searchFrom">
            <el-form-item>
              <el-input v-model="searchFrom.biaoti" placeholder="请输入要搜索的新闻或公告"></el-input>
              <el-button type="primary" @click="$router.push(`/search/${searchFrom.biaoti}`)">搜索</el-button>
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
      searchFrom: {
        biaoti: ''
      },
      yiqi: {
        page: 1, //当前页数
        pageSize: 10, //每页数据个数
        orders: [],
        total: '', //返回数据的总个数
        pages: ''
      },
      token: localStorage.getItem('token')
    }
  },

  methods: {
    // 退出登录
    loginOut() {
      try {
        this.$store.dispatch('userLoginOut')
        // 退出成功到首页
        if (this.$route.path !== '/') {
          this.$router.push('/')
        }
      } catch (error) {
        alert(error.message)
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