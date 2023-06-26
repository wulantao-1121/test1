<template>
  <li>
    <a @click="$router.push(`/noticeDateils?notice=${noticeHot.id}`)">{{ noticeHot.biaoti }}</a>
  </li>
</template>

<script>
export default {
  name: 'NoticeHot',
  props: ['noticeHot']
}
</script>

<style>
</style>