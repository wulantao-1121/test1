<template>
  <li class="notice_li">
    <div class="notice_img"></div>
    <div class="notice_content">
      <h1>
        <a href="javascript:;">{{ noticeList.biaoti }}</a>
      </h1>
      <span class="notice_time">发布时间:{{ noticeList.addtime }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'NoticeList',
  props: ['noticeList']
}
</script>

<style>
</style>