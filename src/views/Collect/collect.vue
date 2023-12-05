<template>
  <div class="right_sidebar">
    <div class="right_header">
      <div class="right_title">
        <div class="right_collect"><a href="javascript:;">我的收藏</a></div>
      </div>
    </div>
    <div>
      <div class="grxx_yiqi_list">
        <ul class="grxx_yiqi_ul">
          <collectList v-for="item in collectList.records" :key="item.id" :collect="item" ref="grxx_yiqi_li"></collectList>
        </ul>
      </div>
      <Page :total="collectList.total" :pageSize="collectList.size" :currentPage="collectList.current" @getPage="getPage"></Page>
    </div>
  </div>

</template>

<script>
import '@/assets/css/my.less'
import collectList from './collectList.vue'
import { mapState } from 'vuex'
export default {
  name: 'collect',
  components: {
    collectList
  },
  data() {
    return {
      collect: {
        page: 1,
        pageSize: 6
      }
    }
  },
  // 创建之前销毁 delCollect 全局事件总线
  beforeCreate() {
    this.$bus.$off('delCollect')
  },
  created() {},
  mounted() {
    this.collect.page = this.$route.query.page || 1
    this.collect.pageSize = this.$route.query.pageSize || 6
    this.getCollectList()
    // 接收collectList组件发来的通信，进行判断如果返回的value是true就重新获取一次收藏信息
    this.$bus.$on('delCollect', value => {
      if (value === 0) {
        this.getCollectList()
        // 判断每一页数组里的数据还有没有，如果没有就进行翻页
        if (this.$store.state.collect.collectList.records.length - 1 === 0) {
          if (this.$route.query.page === 1) {
            this.collect.page = 1
            this.$store.dispatch('getCollecr', this.collect)
          } else if (this.$route.query.page > 1) {
            this.collect.page = this.$route.query.page - 1
            this.$router.push({ name: 'collect', query: { page: this.collect.page, pageSize: this.collect.pageSize } })
            this.$store.dispatch('getCollecr', this.collect)
          }
        }
      }
    })
  },
  methods: {
    getCollectList() {
      this.$store.dispatch('getCollecr', this.collect)
    },
    getPage(index) {
      this.collect.page = index
      this.$router.push({ name: 'collect', query: { page: this.collect.page, pageSize: this.collect.pageSize } })
      this.getCollectList()
    }
  },
  updated() {},
  computed: {
    ...mapState({
      collectList: state => state.collect.collectList
    })
  }
}
</script>

<style>
</style>