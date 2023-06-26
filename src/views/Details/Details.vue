<template>
  <!-- 仪器详情主体 -->
  <div class="details">
    <!-- 面包屑 -->
    <div id="crumbs">
      <el-breadcrumb separator>
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><a @click="$router.push(`/yiqi/page?&page=${yiqiPage}`)">仪器列表</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">仪器详情</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="kong"></div>
    <div class="yiqi_details_content">
      <div class="yiqi_details">
        <div class="yiqi_details_img">
          <img src="" alt="" />
        </div>
        <div class="yiqi_details_parameter">
          <h1>{{ yiqiDto.yiqiming }}</h1>
          <div class="yiqi_tongji">
            <div class="yiqi_num">
              <span class="number">{{ yiqiDto.zongcishu }}</span>
              <span class="number_text">总次数</span>
            </div>
            <div class="yiqi_hours">
              <span class="hours">{{ details.time }}</span>
              <span class="hours_text">总时长</span>
            </div>
            <div class="yiqi_collectors">
              <span class="collectors">{{ details.shoucangRenshu }}</span>
              <span class="collectors_text">收藏者</span>
            </div>
          </div>
          <dl>
            <dd>
              设备型号: <span>{{yiqiDto.yiqixinghao  }}</span>
            </dd>
            <dd>
              放置位置: <span>{{ yiqiDto.yiqididian }}</span>
            </dd>
            <dd v-if="yiqiDto.yiqizhuangtai==1">运行状态: <span class="gongxaing">可共享</span></dd>
            <dd v-else>运行状态: <span class="weixiu">维修中</span></dd>
            <dd>
              负责人: <span>{{ yiqiDto.fuzeren }}{{ yiqiDto.fuzerendianhua }}</span>
            </dd>
            <dd v-if="details.yiqiShiyongZhuangtai=='空闲中'">使用状态: <span class="shiyong">空闲中</span></dd>
            <dd v-else>使用状态: <span class="shiyong">使用中</span></dd>
          </dl>
          <div class="yuyue_shoucang">
            <el-button type="primary" v-if="yiqiDto.yiqizhuangtai==1" class="yuyue_btn" @click="yuyue">立即预约</el-button>
            <el-button type="primary" disabled v-else class="yuyue_btn">立即预约</el-button>
            <a href="javascript:;" class="collect" @click="quxiaoCollect" v-if="viewcollect==1">
              <span class="collect_img">
                <img src="@/assets/images/加星收藏_填充.png" alt="" />
              </span>
              <span class="collect_text">收藏</span>
            </a>
            <a href="javascript:;" class="collect" @click="btnCollect" v-if="viewcollect==0">
              <span class="collect_img">
                <img src="@/assets/images/收藏.png" alt="" />
              </span>
              <span class="collect_text">收藏</span>
            </a>
          </div>
        </div>
      </div>
      <div class="yiqi_xinxi">
        <!-- 主要信息 -->
        <div class="yiqi_info">
          <h1>主要信息</h1>
          <dl>
            <dd>
              所属单位：<span>{{ yiqiDto.xiName }}</span>
            </dd>
            <dd>
              联系邮箱：<span>{{ yiqiDto.lianxiyouxiang }}</span>
            </dd>
            <dd>
              厂家：<span>{{ yiqiDto.yiqipinpai }}</span>
            </dd>
            <dd>
              所属品牌：<span>{{ yiqiDto.yiqipinpai }}</span>
            </dd>
          </dl>
        </div>
        <!-- 主要功能及特色 -->
        <div class="yiqi_function">
          <h1>主要功能及特色</h1>
          <p>
            {{ yiqiDto.gongnengtese }}
          </p>
        </div>
        <!-- 主要规格及技术指标 -->
        <div class="yiqi_guige">
          <h1>主要规格及技术指标</h1>
          <p>{{ yiqiDto.guige }}</p>
        </div>
        <!-- 主要附件及配置 -->
        <div class="yiqi_fujian">
          <h1>主要附件及配置</h1>
          <p>{{ yiqiDto.fujianpeizhi }}</p>
        </div>
        <!-- 安全使用注意事项 -->
        <div class="yiqi_anquan">
          <h1>安全使用注意事项</h1>
          <p>{{yiqiDto.zhuyishixiang }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/details.less'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Details',

  data() {
    return {
      page: {
        page: '',
        pageSize: ''
      },
      collect: {
        yiqiId: ''
      },
      view: {
        whether: 0
      },
      quxiao: {
        ids: ''
      },
      formPage: {
        page: ''
      },
      yiqiPage: ''
    }
  },
  created() {
    this.$store.dispatch('details', this.$route.params.id)
    this.collect.yiqiId = parseInt(this.$route.params.id)
    this.$store.dispatch('viewCollect', this.collect)
    this.yiqiPage = sessionStorage.getItem('yiqiPage')
  },
  computed: {
    ...mapGetters(['details', 'yiqiDto']),
    ...mapState({
      viewcollect: state => state.details.viewcollect
    })
  },
  mounted() {},
  methods: {
    yuyue() {
      localStorage.setItem('yuyue', this.$route.params.id)
      this.$router.push('/yiqi/reservation')
    },
    $cleanup() {
      this.$store.commit('clearData')
    },
    // 收藏
    btnCollect() {
      this.collect.yiqiId = parseInt(this.$route.params.id)
      this.$store.dispatch('Collect', this.collect)
      this.viewCollect()
    },
    // 查看收藏
    viewCollect() {
      this.$store.dispatch('viewCollect', this.collect)
    },
    quxiaoCollect() {
      this.quxiao.ids = this.$route.params.id
      this.$store.dispatch('deleteCollect', this.quxiao)
      this.viewCollect()
    }
  },
  beforeDestroy() {
    this.$cleanup()
  }
}
</script>

<style></style>
