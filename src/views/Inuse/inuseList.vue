<template>
  <li class="grxx_yiqi_li">
    <div class="grxx_yiqi_img" v-if="shiyongzhong.yiqiDto.yiqitupian!==''">
      <img :src="this.img" alt="" />
    </div>
    <div class="grxx_yiqi_img" v-else>
      <img src="" alt="" />
    </div>
    <div class="grxx_yiqi_xiangqing">
      <h1 class="grxx_yiqi_h1"><a href="javascript:;">{{ shiyongzhong.yiqiDto.yiqiming }}</a></h1>
      <div class="grxx_yiqi_neirong">
        <dl>
          <dd>仪器分类：<span>{{ shiyongzhong.yiqiDto.yiqifenleiName }}</span></dd>
          <dd>仪器型号：<span>{{ shiyongzhong.yiqiDto.yiqixinghao }}</span></dd>
          <dd>所属系：<span>{{ shiyongzhong.yiqiDto.xiName }}</span></dd>
          <dd>放置位置：<span>{{ shiyongzhong.yiqiDto.yiqididian }}</span></dd>
        </dl>
        <el-button type="warning" class="grxx_yiqi_shiyongzhong" disabled>使用中</el-button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'inuseList',
  props: ['shiyongzhong'],
  data() {
    return {
      img: ''
    }
  },
  created() {
    this.img = 'http://localhost:8080/common/download?name=' + this.shiyongzhong.yiqiDto.yiqitupian
  }
}
</script>

<style>
</style>