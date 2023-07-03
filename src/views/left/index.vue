<template>
  <div class="left">
    <h3>后台管理</h3>
    <div class="le-tupian">
      <div class="le-tupianimg">
        <img src="" alt="" />
      </div>
      <div class="le-tupiantext">
        <div class="admin">admin</div>
        <div class="outLogin" @click="loginOut">退出登录</div>
      </div>
    </div>
    <ul class="le-ul">
      <li><router-link to="/home/yiqiguanli" active-class="let">仪器管理</router-link></li>
      <li><router-link to='/home/user/jihuo' active-class="let">用户管理</router-link></li>
      <li><router-link to="/home/yuyue" active-class="let">预约管理</router-link></li>
      <li><router-link to="/home/news" active-class="let">新闻管理</router-link></li>
      <li><router-link to="/home/gonggao" active-class="let">公告管理</router-link></li>
      <li><router-link to="/home/video" active-class="let">首页视频上传</router-link></li>
      <li><router-link to="/home/regulations" active-class="let">规章指南</router-link></li>
      <li><router-link to="/home/platform" active-class="let">平台简介</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'left',
  data() {
    return {}
  },
  methods: {
    async loginOut() {
      let res = await this.$API.API.loginOut()
      if (res.code == 1) {
        sessionStorage.removeItem('admin')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.left {
  height: 100vh;
  width: 240px;
  background-color: #2e4050;
  h3 {
    padding-top: 25px;
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    color: #fff;
  }
  .le-tupian {
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    .le-tupianimg {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      background-color: #5ca55c;
    }

    .le-tupiantext {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
      margin-left: 20px;
    }
    .outLogin {
      margin-top: 5px;
      margin-left: 10px;
      color: #fff;
      font-size: 12px;
    }
    .admin {
      font-size: 20px;
    }
  }
  .le-ul {
    margin-top: 20px;
    li {
      width: 100%;
      height: 60px;
      a {
        display: block;
        height: 60px;
        font-size: 18px;
        color: #fff;
        text-align: center;
        line-height: 60px;
      }
      .let {
        color: #000;
        background: #fff;
      }
    }
  }
}
</style>