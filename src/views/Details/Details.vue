<template>
  <!-- 仪器详情主体 -->
  <div class="details">
    <!-- 面包屑 -->
    <div id="crumbs">
      <el-breadcrumb separator>
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <!-- "{name:' yiqi',query:{page:yiqi.page,pageSize:yiqi.pageSize}}" -->
        <el-breadcrumb-item><router-link to="/yiqi/page?page=2&pageSize=10">仪器列表</router-link></el-breadcrumb-item>
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
            <dd>运行状态: <span class="gongxaing">可共享</span></dd>
            <dd>
              负责人: <span>{{ yiqiDto.fuzeren }}{{ yiqiDto.fuzerendianhua }}</span>
            </dd>
            <dd v-if="details.yiqiShiyongZhuangtai=='空闲中'">使用状态: <span class="shiyong">空闲中</span></dd>
            <dd v-else>使用状态: <span class="shiyong">使用中</span></dd>
          </dl>
          <div class="yuyue_shoucang">
            <el-button type="primary" class="yuyue_btn" @click="$router.push('/yiqi/reservation')">立即预约</el-button>
            <a href="javascript:;" class="collect">
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
      }
    }
  },
  created() {
    this.$store.dispatch('details', this.$route.params.id)
  },
  computed: {
    ...mapGetters(['details', 'yiqiDto'])
  },
  mounted() {},
  methods: {
    $cleanup() {
      this.$store.commit('clearData')
    }
  },
  beforeDestroy() {
    this.$cleanup()
  }
}
</script>

<style></style>
