<template>
  <div>
    <div class="grxx_yiqi_list">
      <ul class="grxx_yiqi_ul">
        <usedList v-for="item in yishiyongList.records" :key="item.id" :yishiyongList="item"></usedList>
      </ul>
    </div>
    <Page :total="yishiyongList.total" :pageSize="yishiyongList.size" :currentPage="yishiyongList.current" @getPage="getPage"></Page>
  </div>
</template>

<script>
import '@/assets/css/my.less'
import usedList from './usedList.vue'
import { mapState } from 'vuex'
import { yiqiList } from '@/api'
export default {
  name: 'used',
  data() {
    return {
      yishiyong: {
        page: 1,
        pageSize: 6,
        shiYong: 0,
        order: 'add'
      }
    }
  },
  components: {
    usedList
  },
  mounted() {
    this.getyishiyongData()
  },
  computed: {
    ...mapState({
      yishiyongList: state => state.used.yishiyongList
    })
  },
  methods: {
    getyishiyongData() {
      console.log(this.yishiyong)
      this.$store.dispatch('yishiyong', this.yishiyong)
    },
    getPage(index) {
      this.yishiyong.page = index
      this.$router.push({ name: 'yishiyong', query: { page: this.yishiyong.page, pageSize: this.yishiyong.pageSize, shiYong: this.yishiyong.shiYong, order: this.yishiyong.order } })
      this.getyishiyongData()
    }
  }
}
</script>

<style>
</style>