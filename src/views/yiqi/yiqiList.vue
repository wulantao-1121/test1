<template>
  <li class="yiqi_li">
    <div class="yiqi_img" v-if="list.yiqitupian!==''">
      <img :src="this.img" alt="">
    </div>
    <div class="yiqi_img" v-else>
      <img src="@/assets/images/404img.jpg" alt="">
    </div>
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
      msg: '1',
      img: ''
    }
  },
  created() {
    this.img = 'http://10.69.6.106:8080/common/download?name=' + this.list.yiqitupian
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