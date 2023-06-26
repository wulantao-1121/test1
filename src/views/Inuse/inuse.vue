<template>
  <div>
    <div>
      <div class="grxx_yiqi_list">
        <ul class="grxx_yiqi_ul">
          <inuseList v-for="item in shiyongzhongList.records" :key="item.id" :shiyongzhong="item"></inuseList>
        </ul>
      </div>
      <Page :total="shiyongzhongList.total" :pageSize="shiyongzhongList.size" :currentPage="shiyongzhongList.current" @getPage="getPage"></Page>
    </div>
  </div>
</template>

<script>
import '@/assets/css/my.less'
import inuseList from './inuseList.vue'
import { mapState } from 'vuex'
export default {
  name: 'inuse',
  components: {
    inuseList
  },
  data() {
    return {
      shiyongzhong: {
        page: 1,
        pageSize: 6,
        shiYong: 1,
        order: 'add',
        total: '', //返回数据的总个数
        pages: ''
      }
    }
  },
  mounted() {
    this.getshiyongzhong()
  },
  methods: {
    getshiyongzhong() {
      this.$store.dispatch('shiyongzhong', this.shiyongzhong)
    },
    getPage(index) {
      this.shiyongzhong.page = index
      this.$router.push({ name: 'shiyongzhong', query: { page: this.shiyongzhong.page, pageSize: this.shiyongzhong.pageSize, shiYong: this.shiyongzhong.shiYong, order: this.shiyongzhong.order } })
      this.getshiyongzhong()
    }
  },
  computed: {
    ...mapState({
      shiyongzhongList: state => state.used.shiyongzhongList
    })
  }
}
</script>

<style>
</style>