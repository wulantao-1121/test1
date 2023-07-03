<template>
  <li class="news_li">
    <div class="news_img">
      <img src="@/assets/images/news.jpg" alt="" width="100%" height="100%">
    </div>
    <div class="news_content">
      <h1>
        <a @click="$router.push(`/newsDateils?wenzhang=${newList.id}`)">{{ newList.biaoti }}</a>
      </h1>
      <span class="news_time">发布时间:{{ newList.addtime }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'newsList',
  props: ['newList'],
  data() {
    return {
      newsid: {
        id: ''
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
</style>