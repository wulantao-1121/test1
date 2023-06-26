<template>
  <li class="grxx_yiqi_li">
    <div class="grxx_yiqi_img" v-if="yishiyongList.yiqiDto.yiqitupian!==''">
      <img :src="this.img" alt="" />
    </div>
    <div class="grxx_yiqi_img" v-else>
      <img src="@/assets/images/404img.jpg" alt="" />
    </div>
    <div class="grxx_yiqi_xiangqing">
      <h1 class="grxx_yiqi_h1"><a href="javascript:;">{{ yishiyongList.yiqiDto.yiqiming }}</a></h1>
      <div class="grxx_yiqi_neirong">
        <dl>
          <dd>仪器分类：<span>{{ yishiyongList.yiqiDto.yiqifenleiName }}</span></dd>
          <dd>仪器型号：<span>{{ yishiyongList.yiqiDto.yiqixinghao }}</span></dd>
          <dd>所属系：<span>{{ yishiyongList.yiqiDto.xiName }}</span></dd>
          <dd>放置位置：<span>{{ yishiyongList.yiqiDto.yiqididian }}</span></dd>
        </dl>
        <div class="grxx_yiqi_time">{{ yishiyongList.yuyueshijian }} 至 {{ yishiyongList.jieshushijian }}</div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'usedList',
  props: ['yishiyongList'],
  data() {
    return {
      img: ''
    }
  },
  created() {
    this.img = 'http://localhost:8080/common/download?name=' + this.yishiyongList.yiqiDto.yiqitupian
  }
}
</script>

<style>
</style>