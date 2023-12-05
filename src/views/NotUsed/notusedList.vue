<template>
  <li class="grxx_yiqi_li">
    <div class="grxx_yiqi_img" v-if="weishiyong.yiqiDto.yiqitupian!==''">
      <img :src="this.img" alt="" />
    </div>
    <div class="grxx_yiqi_img" v-else>
      <img src="@/assets/images/404img.jpg" :alt="weishiyong.yiqiDto.yiqiming" />
    </div>
    <div class="grxx_yiqi_xiangqing">
      <h1 class="grxx_yiqi_h1">
        <a href="javascript:;">{{ weishiyong.yiqiDto.yiqiming }}</a>
      </h1>
      <div class="grxx_yiqi_neirong">
        <dl>
          <dd>仪器分类：<span>{{ weishiyong.yiqiDto.yiqifenleiName }}</span></dd>
          <dd>仪器型号：<span>{{ weishiyong.yiqiDto.yiqixinghao }}</span></dd>
          <dd>所属系：<span>{{ weishiyong.yiqiDto.xiName }}</span></dd>
          <dd>放置位置：<span>{{ weishiyong.yiqiDto.yiqididian }}</span></dd>
        </dl>
        <el-button type="success" class="grxx_yiqi_quxiao" @click="deleteYuYue">取消预约</el-button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'notusedList',
  props: ['weishiyong'],
  data() {
    return {
      img: '',
      deleteyuyue: {
        ids: ''
      }
    }
  },
  created() {
    this.img = 'http://10.99.7.5:808/common/download?name=' + this.weishiyong.yiqiDto.yiqitupian
  },
  methods: {
    // 取消预约的请求
    deleteYuYue() {
      try {
        this.deleteyuyue.ids = this.weishiyong.id
        this.$store.dispatch('deleteYuYue', this.deleteyuyue)
        this.$message({
          message: '取消预约成功',
          type: 'success',
          duration: 1000
        })
        this.$bus.$emit('again', true)
      } catch (error) {
        this.$message({
          message: '取消预约失败',
          type: 'error',
          duration: 1000
        })
      }
    }
  }
}
</script>

<style>
</style>