<template>
  <li class="grxx_yiqi_li">
    <div class="grxx_yiqi_img">
      <img class="" src="" alt="" />
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
        <div class="grxx_yiqi_time">{{ yishiyongList.addtime }} 至 {{ yishiyongList.jieshushijian }}</div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'usedList',
  props: ['yishiyongList']
}
</script>

<style>
</style>