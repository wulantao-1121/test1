<template>
  <!-- 内容主体 -->
  <div class="main">
    <div class="top20"></div>
    <div class="main_box">
      <div class="left">
        <h1>3D打印机</h1>
        <div class="t"></div>
        <p>在3D打印过程中，保持小于25ppm超低氧气量，生产出高强度、 高纯度金属产品，配套增材制造设计软件实现工艺参数可调， 熔池粉床监控软件实现对增材制造过程的实时监控和预测。</p>
        <a href="#">更多设备>></a>
      </div>
      <div class="center">
        <video src="../assets/uploads/WeChat_20230508111713.mp4" class="v"></video>
      </div>
      <div class="right">
        <h1>--实时设备--</h1>
        <div class="myscroll">
          <ul>
            <li v-for="item in homeList.records" :key="item.id">
              <a href="javascript:;">{{ item.yiqiming }}</a>
            </li>
          </ul>
        </div>
        <a href="javascript:;" class="more">更多信息>></a>
        <a href="javascript:;" class="yyxt">进入仪器预约系统</a>
      </div>
    </div>
    <!-- 统计 -->
    <div class="tongji">
      <ul>
        <li>
          <img src="../assets/images/仪器.png" alt="" />
          <div class="title">
            <h1>{{ homezongshu.yiqiZongshu }}</h1>
            <h3>共{{ homezongshu.yiqiZongshu }}台仪器</h3>
          </div>
        </li>
        <li>
          <img src="../assets/images/开始.png" alt="" />
          <div class="title">
            <h1>{{ homezongshu.zhengzhaiShiyong }}</h1>
            <h3>共{{ homezongshu.zhengzhaiShiyong }}台正在使用</h3>
          </div>
        </li>
        <li>
          <img src="../assets/images/待机.png" alt="" />
          <div class="title">
            <h1>{{ homezongshu.xianzhi }}</h1>
            <h3>共{{ homezongshu.xianzhi }}台待机中</h3>
          </div>
        </li>
      </ul>
    </div>
    <!-- 新闻动态 -->
    <div class="news">
      <div class="news_header">新闻动态</div>
      <div class="container">
        <div class="container_bg"></div>
        <div class="container_list">
          <ul>
            <homeNews v-for="(item) in article.records" :key="item.id" :newsList="item"></homeNews>
          </ul>
        </div>
      </div>
      <div class="news_more">
        <a href="javascript:;" @click="$router.push('/news')">浏览更多+</a>
      </div>
    </div>
    <!-- 通知公告 -->
    <div class="notice">
      <div class="notice_header">通知公告</div>
      <ul>
        <homeNotice v-for="item in notice.records" :key="item.id" :noticeList="item"></homeNotice>
      </ul>
      <div class="notice_more">
        <a href="javascript:;" @click="$router.push('/notice')">浏览更多+</a>
      </div>
    </div>
  </div>
</template>

<script>
import homeNews from './Home/homeNews.vue'
import homeNotice from './Home/homeNotice.vue'
import '../assets/css/index.less'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Index',
  components: {
    homeNews,
    homeNotice
  },
  data() {
    return {
      homelist: {
        page: 1,
        pageSize: 6,
        shiYong: 1,
        order: ''
      },
      news: {
        page: 1,
        leixing: 1,
        pageSize: 4
      },
      notices: {
        page: 1,
        leixing: 2,
        pageSize: 6
      }
    }
  },
  mounted() {
    this.getHomeyiqi()
    this.getHomeList()
    this.getHomeNews()
    this.getHomeNotice()
  },
  computed: {
    ...mapState({
      homezongshu: state => state.home.homezongshu,
      homeList: state => state.home.homeList,
      article: state => state.home.article,
      notice: state => state.home.notice
    })
  },
  methods: {
    getHomeyiqi() {
      this.$store.dispatch('yiqiList', this.homelist)
    },
    getHomeList() {
      this.$store.dispatch('homeList', this.homeList)
    },
    getHomeNews() {
      this.$store.dispatch('article', this.news)
    },
    getHomeNotice() {
      this.$store.dispatch('notice', this.notices)
    }
  }
}
</script>

<style lang="less" scoped>
.myscroll {
  height: 210px;
  overflow: hidden;
}
</style>
