<template>
  <li class="grxx_yiqi_li">
    <div class="grxx_yiqi_img">
      <img class="" src="" alt="" />
    </div>
    <div class="grxx_yiqi_xiangqing">
      <h1 class="grxx_yiqi_h1"><a href="javascript:;">{{ collect.yiqiming }}</a></h1>
      <div class="grxx_yiqi_neirong">
        <dl>
          <dd>仪器分类：<span>{{ collect.yiqifenleiName }}</span></dd>
          <dd>仪器型号：<span>{{ collect.yiqixinghao }}</span></dd>
          <dd>所属系：<span>{{ collect.xiName }}</span></dd>
          <dd>放置位置：<span>{{ collect.yiqididian}}</span></dd>
        </dl>
        <div class="grxx_yiqi_collect">
          <img src="@/assets/images/收藏.png" alt="" />
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'collectList',
  props: ['collect']
}
</script>

<style>
</style>