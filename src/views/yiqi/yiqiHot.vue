<template>
  <div class="yiqi_hot">
    <h1 class="yiqi_hot_title">热门仪器</h1>
    <ul class="yiqi_hot_list">
      <li v-for="(item) in hostList.records" :key="item.id">
        <a @click="$router.push(`/yiqi/details/${item.id}`)">{{ item.yiqiming }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'yiqiHot',
  props: ['hostList']
}
</script>

<style>
</style>