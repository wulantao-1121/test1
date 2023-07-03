<template>
  <li>
    <div class="data">
      <span class="sun" v-if="newsList.addtime_m<10">0{{newsList.addtime_m }}</span>
      <span class="sun" v-else>{{newsList.addtime_m }}</span>
      <span class="years">{{ newsList.addtime_y }}</span>
    </div>
    <div class="content">
      <a @click="$router.push(`/newsDateils?wenzhang=${newsList.id}`)" class="news_title">{{ newsList.biaoti }}</a>
      <p class="news_content">{{ newsList.neirong.replace(/<[^>]*>/g, '') }}</p>
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'homeNews',
  props: ['newsList'],
  mounted() {}
}
</script>

<style>
</style>