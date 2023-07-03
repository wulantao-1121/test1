<template>
  <li class="guide_li">
    <div class="guide_img">
      <img src="@/assets/images/tongzhi.jpg" alt="" width="100%" height="100%">
    </div>
    <div class="guide_content">
      <h1>
        <a @click="$router.push(`/gudieDateils?wenzhang=${gudieList.id}`)">{{ gudieList.biaoti }}</a>
      </h1>
      <span class="guide_time">发布时间:{{ gudieList.addtime }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'gudieList',
  props: ['gudieList'],
  data() {
    return {
      gudieid: {
        id: ''
      }
    }
  }
}
</script>

<style></style>
