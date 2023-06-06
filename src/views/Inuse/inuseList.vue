<template>
  <li class="grxx_yiqi_li">
    <div class="grxx_yiqi_img">
      <img class="" src="" alt="" />
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
  props: ['shiyongzhong']
}
</script>

<style>
</style>