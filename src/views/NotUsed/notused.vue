<template>
  <div>
    <div class="grxx_yiqi_list">
      <ul class="grxx_yiqi_ul">
        <NotusedList v-for="item in weishiyongList.records" :key="item.id" :weishiyong="item"></NotusedList>
      </ul>
    </div>
    <Page :total="weishiyongList.total" :pageSize="weishiyongList.size" :currentPage="weishiyongList.current" @getPage="getPage"></Page>
  </div>
</template>

<script>
import '@/assets/css/my.less'
import NotusedList from '../NotUsed/notusedList.vue'
import { mapState } from 'vuex'
export default {
  name: 'notused',
  components: {
    NotusedList
  },
  data() {
    return {
      weishiyong: {
        page: 1,
        pageSize: 6,
        shiYong: 2,
        order: 'add',
        total: '', //返回数据的总个数
        pages: ''
      }
    }
  },
  mounted() {
    this.getweishiyong()
  },
  methods: {
    getweishiyong() {
      this.$store.dispatch('weishiyong', this.weishiyong)
    },
    getPage(index) {
      this.yishiyong.page = index
      this.$router.push({ name: 'yishiyong', query: { page: this.yishiyong.page, pageSize: this.yishiyong.pageSize, shiYong: this.yishiyong.shiYong, order: this.yishiyong.order } })
      this.getweishiyong()
    }
  },
  computed: {
    ...mapState({
      weishiyongList: state => state.used.weishiyongList
    })
  }
}
</script>

<style>
</style>