<template>
  <li class="grxx_yiqi_li">
    <div class="grxx_yiqi_img">
      <img class="" src="" alt="" />
    </div>
    <div class="grxx_yiqi_xiangqing">
      <h1 class="grxx_yiqi_h1"><a href="javascript:;">{{ enjoy.yiqiming }}</a></h1>
      <div class="grxx_yiqi_neirong">
        <dl>
          <dd>仪器分类：<span>{{ enjoy.yiqifenleiName }}</span></dd>
          <dd>仪器型号：<span>{{enjoy.yiqixinghao  }}</span></dd>
          <dd>所属系：<span>{{ enjoy.xiName }}</span></dd>
          <dd>放置位置：<span>{{ enjoy.yiqididian }}</span></dd>
        </dl>
        <div class="grxx_yiqi_share">
          <el-button type="primary" class="grxx_yiqi_xiugai" @click="updata">修改</el-button>
          <el-button type="danger" class="grxx_yiqi_shanchu" @click="YiQiDelete"> 删除</el-button>
          <el-button type="success" v-if="enjoy.yiqizhuangtai==1" class="grxx_yiqi_weixiu" @click="weihu">维修</el-button>
          <el-button type="warning" v-else class="grxx_yiqi_quxiaoweixiu" @click="quxiaoweihu">取消维修</el-button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import '@/assets/css/my.less'
export default {
  name: 'enjoyList',
  props: ['enjoy'],
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      dialogFormVisible: false,
      formLabelWidth: '120px',
      delete: {
        ids: ''
      },
      maintenance: {
        id: '',
        yiqizhuangtai: 0
      }
    }
  },
  mounted() {},
  methods: {
    updata() {
      this.$bus.$emit('add', 1)
      this.$bus.$emit('id', this.enjoy.id)
    },
    // 删除仪器
    async YiQiDelete() {
      try {
        this.delete.ids = this.enjoy.id
        console.log(this.delete)
        await this.$store.dispatch('YiQiDelete', this.delete)
        alert('删除成功')
        this.$bus.$emit('delete', 0)
      } catch (error) {
        alert(error.message)
      }
    },
    // 维修
    async weihu() {
      try {
        this.maintenance.id = this.enjoy.id
        await this.$store.dispatch('maintenance', this.maintenance)
        alert('维修成功')
        this.$bus.$emit('delete', 0)
      } catch (error) {
        alert('维修失败')
      }
    },
    // 取消维修
    async quxiaoweihu() {
      try {
        this.maintenance.id = this.enjoy.id
        this.maintenance.yiqizhuangtai = 1
        await this.$store.dispatch('EndRepair', this.maintenance)
        alert('取消维修成功')
        this.$bus.$emit('delete', 0)
      } catch (error) {
        alert('取消维修失败')
      }
    }
  }
}
</script>

<style>
</style>