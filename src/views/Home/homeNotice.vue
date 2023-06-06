<template>
  <li>
    <div class="notice_data">
      <span class="sun" v-if="noticeList.addtime_m<10">0{{ noticeList.addtime_m }}</span>
      <span class="sun" v-else>{{ noticeList.addtime_m }}</span>
      <span class="years">{{ noticeList.addtime_y }}</span>
    </div>
    <div class="content">
      <a href="javascript:;" class="notice_title">{{ noticeList.biaoti }}</a>
      <p class="notice_content">{{ noticeList.neirong }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'homeNotice',
  props: ['noticeList']
}
</script>

<style>
</style>