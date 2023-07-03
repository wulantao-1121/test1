<template>
  <div class="container">
    <Left></Left>
    <router-view></router-view>
  </div>
</template>

<script>
import Left from '@/views/left'
export default {
  name: 'home',
  components: {
    Left
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  width: 100%;
}
</style>