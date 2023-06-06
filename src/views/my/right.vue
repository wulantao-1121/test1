<template>
  <div class="right_sidebar">
    <div class="right_header">
      <div class="right_title">
        <yishiyong></yishiyong>
        <weishiyong></weishiyong>
        <shiyongzhong></shiyongzhong>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import '@/assets/css/my.less'
import yishiyong from '../yishiyong/yishiyong.vue'
import weishiyong from '../weishiyong/weishiyong.vue'
import shiyongzhong from '../shiyongzhong/shiyongzhong.vue'
export default {
  name: 'right',
  components: {
    yishiyong,
    weishiyong,
    shiyongzhong
  }
}
</script>

<style>
</style>