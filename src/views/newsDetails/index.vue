<template>
  <div>
    <!-- 面包屑 -->
    <div id="crumbs">
      <el-breadcrumb separator>
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><router-link to="/news">新闻动态</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">新闻详情</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="newsDateils">
      <div class="newsDateils_head">
        <div class="newsDateils_title">{{ newsDateils.biaoti }}</div>
        <div class="newsDateils_title_info">
          <div class="news_author">
            <span>撰稿人：</span>
            <span>{{ newsDateils.fabuzhe }}</span>
          </div>
          <div class="news_time">
            <span>时间：</span>
            <span>{{ newsDateils.addtime }}</span>
          </div>
          <div class="news_count">
            <span>浏览次数：</span>
            <span>{{ newsDateils.dianjilv }}次</span>
          </div>
        </div>
      </div>
      <div class="newsDateils_main" v-html="newsDateils.neirong"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'newsDateils',
  data() {
    return {
      newsid: {
        id: ''
      }
    }
  },
  created() {
    this.newsid.id = this.$route.query.wenzhang
    console.log(this.newsid)
    this.$store.dispatch('getNewsDateils', this.newsid)
  },
  methods: {
    $cleanup() {
      this.$store.commit('clearData')
    }
  },
  computed: {
    ...mapState({
      newsDateils: state => state.newsDateils.newsDateils
    })
  },
  beforeDestroy() {
    this.$cleanup()
  }
}
</script>

<style lang="less" scoped>
.newsDateils {
  margin: auto;
  width: 1200px;

  .newsDateils_head {
    border-bottom: dashed 1px #ccc;

    .newsDateils_title {
      padding-top: 25px;
      font-size: 20px;
      text-align: center;
    }

    .newsDateils_title_info {
      padding: 20px 0;
      display: flex;
      justify-content: center;
      font-size: 14px;

      .news_author,
      .news_time,
      .news_count {
        padding: 0 15px;
      }
    }
  }

  .newsDateils_main {
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
