<template>
  <div>
    <!-- 面包屑 -->
    <div id="crumbs">
      <el-breadcrumb separator>
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><router-link to="/guide">规章指南</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">规章详情</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="gudieDateils">
      <div class="gudieDateils_head">
        <div class="gudieDateils_title">{{ gudieDateils.biaoti }}</div>
        <div class="gudieDateils_title_info">
          <div class="gudies_author">
            <span>撰稿人：</span>
            <span>{{ gudieDateils.fabuzhe }}</span>
          </div>
          <div class="gudie_time">
            <span>时间：</span>
            <span>{{ gudieDateils.addtime }}</span>
          </div>
          <div class="gudie_count">
            <span>浏览次数：</span>
            <span>{{ gudieDateils.dianjilv }}</span>
          </div>
        </div>
      </div>
      <div class="gudieDateils_main" v-html="gudieDateils.neirong"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'gudieDatelisInfo',
  data() {
    return {
      gudieid: {
        id: ''
      }
    }
  },
  methods: {
    $cleanup() {
      this.$store.commit('clearData')
    }
  },
  created() {
    this.gudieid.id = this.$route.query.wenzhang
    this.$store.dispatch('getGudieDateils', this.gudieid)
  },
  computed: {
    ...mapState({
      gudieDateils: state => state.GudieDateils.gudieDateils
    })
  },
  beforeDestroy() {
    this.$cleanup()
  }
}
</script>

<style lang="less" scoped>
.gudieDateils {
  margin: auto;
  width: 1200px;
  .gudieDateils_head {
    border-bottom: dashed 1px #ccc;
    .gudieDateils_title {
      padding-top: 25px;
      font-size: 20px;
      text-align: center;
    }
    .gudieDateils_title_info {
      padding: 20px 0;
      display: flex;
      justify-content: center;
      font-size: 14px;
      .gudies_author,
      .gudie_time,
      .gudie_count {
        padding: 0 15px;
      }
    }
  }
  .gudieDateils_main {
    padding: 20px;
  }
}
/deep/table {
  border-collapse: collapse;
  tbody {
    th,
    td {
      border: 1px solid #000;
    }
  }
}
</style>
