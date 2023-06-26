<template>
  <li>
    <a @click="$router.push(`/newsDateils?wenzhang=${newsList.id}`)">{{ newsList.biaoti }}</a>
  </li>
</template>

<script>
export default {
  name: 'newsHot',
  props: ['newsList']
}
</script>

<style>
</style>