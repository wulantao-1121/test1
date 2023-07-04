<template>
  <ul class="search_ul">
    <li class="search_li" v-for="item in searchList" :key="item.id">
      <a @click="$router.push(`/newsDateils?wenzhang=${item.id}`)" class="search_a">{{ item.biaoti }}</a>
      <span class="search_span">{{ item.addtime }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SearchList',
  props: ['searchList']
}
</script>

<style lang="less" scoped>
.search_ul {
  .search_li {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;

    line-height: 35px;
    border-bottom: 1px dashed #ddd;

    .search_a {
      font-size: 14px;
    }

    .search_span {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>