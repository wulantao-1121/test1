<template>
  <li class="news_li">
    <div class="news_img"></div>
    <div class="news_content">
      <h1>
        <a href="javascript:;">{{ newList.biaoti }}</a>
      </h1>
      <span class="news_time">发布时间:{{ newList.addtime }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'newsList',
  props: ['newList']
}
</script>

<style>
</style>