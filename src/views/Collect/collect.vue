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
          <collectList v-for="item in collectList.records" :key="item.id" :collect="item"></collectList>
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
  mounted() {
    this.getCollectList()
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
  computed: {
    ...mapState({
      collectList: state => state.collect.collectList
    })
  }
}
</script>

<style>
</style>