<template>
  <li class="notice_li">
    <div class="notice_img">
      <img src="@/assets/images/tongzhi.jpg" alt="" width="100%" height="100%">
    </div>
    <div class="notice_content">
      <h1>
        <!-- $router.push(`/noticeDateils?notice=${noticeList.id}`) -->
        <a @click="noticeId(noticeList.id)">{{ noticeList.biaoti }}</a>
      </h1>
      <span class="notice_time">发布时间:{{ noticeList.addtime }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'NoticeList',
  props: ['noticeList'],
  data() {
    return {
      noticeid: {
        id: ''
      }
    }
  },
  methods: {
    noticeId(id) {
      this.noticeid.id = id
      this.$store.dispatch('getNoticeDateils', this.noticeid)
      this.$router.push(`/noticeDateils?notice=${id}`)
    }
  }
}
</script>

<style>
</style>