<template>
  <li class="grxx_yiqi_li">
    <div class="grxx_yiqi_img">
      <img class="" src="" alt="" />
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
        <el-button type="success" class="grxx_yiqi_quxiao">取消预约</el-button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'notusedList',
  props: ['weishiyong']
}
</script>

<style>
</style>