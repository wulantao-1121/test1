<template>
  <li class="yiqi_li">
    <div class="yiqi_img"></div>
    <div class="yiqi_content">
      <h1>
        <!-- $router.push(`/yiqi/details/:id`) -->
        <a @click="getId(list.id)">{{ list.yiqiming }}</a>
      </h1>
      <dl>
        <dd>
          <span>仪器分类:</span>
          {{ list.yiqifenleiName }}
        </dd>
        <dd>
          <span>仪器型号:</span>
          {{ list.yiqixinghao }}
        </dd>
        <dd>
          <span>所属系:</span>
          {{ list.xiName }}
        </dd>
        <dd>
          <span>放置位置:</span>
          {{ list.yiqididian }}
        </dd>
      </dl>
    </div>
  </li>
</template>

<script>
export default {
  name: 'yiqiList',
  props: ['list'],
  data() {
    return {
      id: '',
      msg: '1'
    }
  },

  methods: {
    getId(id) {
      this.id = id
      this.$store.dispatch('details', this.id)
      this.$router.push(`/yiqi/details/${id}`)
    }
  }
}
</script>
<style>
</style>