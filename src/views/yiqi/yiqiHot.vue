<template>
  <div class="yiqi_hot">
    <h1 class="yiqi_hot_title">热门仪器</h1>
    <ul class="yiqi_hot_list">
      <li v-for="item in hostList" :key="item.id">
        <a href="javascript:;">{{ item.yiqiming }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { yiqiList } from '@/api'
import { mapState } from 'vuex'
export default {
  name: 'yiqiHot',
  props: ['hostList']
}
</script>

<style>
</style>