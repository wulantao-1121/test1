<template>
  <div>
    <!-- 面包屑 -->
    <div id="crumbs">
      <el-breadcrumb separator>
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><router-link to="/notice">通知公告</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">公告详情</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="noticeDateils">
      <div class="noticeDateils_head">
        <div class="noticeDateils_title">{{ noticeDateils.biaoti }}</div>
        <div class="noticeDateils_title_info">
          <div class="notice_author">
            <span>撰稿人：</span>
            <span>{{ noticeDateils.fabuzhe }}</span>
          </div>
          <div class="notice_time">
            <span>时间：</span>
            <span>{{ noticeDateils.addtime }}</span>
          </div>
          <div class="notice_count">
            <span>浏览次数：</span>
            <span>{{ noticeDateils.dianjilv }}次</span>
          </div>
        </div>
      </div>
      <div class="noticeDateils_main" v-html="noticeDateils.neirong">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'noticeDateils',
  data() {
    return {
      noticeid: {
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
    // 拿到公告id
    this.noticeid.id = this.$route.query.notice
    // 发送公告详情请求
    this.$store.dispatch('getNoticeDateils', this.noticeid)
  },
  computed: {
    ...mapState({
      noticeDateils: state => state.noticeDateils.noticeDateils
    })
  },
  beforeDestroy() {
    this.$cleanup()
  }
}
</script>

<style lang="less" scoped>
.cursor {
  cursor: default;
}
.noticeDateils {
  margin: auto;
  width: 1200px;
  .noticeDateils_head {
    border-bottom: dashed 1px #ccc;
    .cursor;
    .noticeDateils_title {
      padding-top: 25px;
      font-size: 20px;
      text-align: center;
    }
    .noticeDateils_title_info {
      padding: 20px 0;
      display: flex;
      justify-content: center;
      font-size: 14px;
      .notice_author,
      .notice_time,
      .notice_count {
        padding: 0 15px;
      }
    }
  }
  .noticeDateils_main {
    padding: 20px;
    .cursor;
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