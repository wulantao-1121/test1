<template>
  <div>
    <div class="title">
      <table cellspacing="0px">
        <tr class="table_title">
          <th class="xuhao">序号</th>
          <th class="xinxi">仪器信息</th>
          <th class="fuzeren">负责人</th>
          <th class="caozuo">操作</th>
        </tr>
        <yiqiList v-for="item in yiqiList.records" :key="item.id" :yiqi="item"></yiqiList>
      </table>
    </div>
    <page :total="yiqiList.total" :pageSize="yiqiList.size" :currentPage="parseInt($route.query.page)" @getPage="getPage"></page>
  </div>
</template>

<script>
import page from '@/components/page.vue'
import yiqiList from './yiqiList.vue'
export default {
  name: 'yiqiSreach',
  components: {
    page,
    yiqiList
  },
  data() {
    return {
      yiqiSreach: {
        page: 1,
        pageSize: 7,
        isname: ''
      },
      yiqiList: []
    }
  },
  beforeCreate() {
    this.$bus.$off('yiqiSreach')
  },
  mounted() {
    let yiqiSreachFun = value => {
      // console.log('搜索', value)
      this.yiqiSreach.isname = value
      this.getYiQISreach()
    }
    this.$bus.$on('yiqiSreach', yiqiSreachFun)
  },
  methods: {
    async getYiQISreach() {
      let res = await this.$API.API.yiQiSreach(this.yiqiSreach)
      console.log(res)
      if (res.code == 1) {
        this.yiqiList = res.data
        this.$message({
          message: '搜索成功',
          type: 'success',
          duration: 1000
        })
      } else {
        this.$message({
          message: '搜索失败',
          type: 'error',
          duration: 1000
        })
      }
    },
    getPage(index) {
      this.yiqiSreach.page = index
      this.$router.push({ name: 'yiqiguanli', query: { page: this.yiqiSreach.page, pageSize: this.yiqiSreach.pageSize } })
      this.getYiQISreach()
    }
  }
}
</script>

<style>
</style>