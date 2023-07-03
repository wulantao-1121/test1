<template>
  <div>
    <div class="grxx_yiqi_list">
      <ul class="grxx_yiqi_ul">
        <NotusedList v-for="item in weishiyongList.records" :key="item.id" :weishiyong="item"></NotusedList>
      </ul>
    </div>
    <Page :total="weishiyongList.total" :pageSize="weishiyongList.size" :currentPage="parseInt($route.query.page)" @getPage="getPage"></Page>
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
  beforeCreate() {
    this.$bus.$off('again')
  },
  mounted() {
    this.weishiyong.page = this.$route.query.page || 1
    this.weishiyong.pageSize = this.$route.query.pageSize || 6
    this.getweishiyong()
    this.$bus.$on('again', value => {
      if (value) {
        this.getweishiyong()
        if (this.$store.state.used.weishiyongList.records.length - 1 === 0) {
          if (this.$route.query.page === 1) {
            this.weishiyong.page = 1
            this.$store.dispatch('weishiyong', this.weishiyong)
          } else if (this.$route.query.page > 1) {
            this.weishiyong.page = this.$route.query.page - 1
            this.$router.push({ name: 'weishiyong', query: { page: this.weishiyong.page, pageSize: this.weishiyong.pageSize, shiYong: this.weishiyong.shiYong, order: this.weishiyong.order } })
            this.$store.dispatch('weishiyong', this.weishiyong)
          }
        }
      }
    })
  },
  methods: {
    getweishiyong() {
      this.$store.dispatch('weishiyong', this.weishiyong)
    },
    getPage(index) {
      this.weishiyong.page = index
      this.$router.push({ name: 'weishiyong', query: { page: this.weishiyong.page, pageSize: this.weishiyong.pageSize, shiYong: this.weishiyong.shiYong, order: this.weishiyong.order } })
      this.getweishiyong()
    },
    againRequest() {}
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