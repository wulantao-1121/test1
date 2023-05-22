<template>
  <div class="right_sidebar">
    <div class="right_header">
      <div class="right_title">
        <yishiyong></yishiyong>
        <weishiyong></weishiyong>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import '@/assets/css/my.css'
import yishiyong from '../yishiyong/yishiyong.vue'
import weishiyong from '../weishiyong/weishiyong.vue'
export default {
  name: 'right',
  components: {
    yishiyong,
    weishiyong
  }
}
</script>

<style>
</style>