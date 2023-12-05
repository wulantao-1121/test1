<template>
  <li class="grxx_yiqi_li">
    <div class="grxx_yiqi_img" v-if="collect.yiqitupian!==''">
      <img :src=img alt="" />
    </div>
    <div class="grxx_yiqi_img" v-else>
      <img src='@/assets/images/404img.jpg' alt="" />
    </div>
    <div class="grxx_yiqi_xiangqing">
      <h1 class="grxx_yiqi_h1"><a href="javascript:;">{{ collect.yiqiming }}</a></h1>
      <div class="grxx_yiqi_neirong">
        <dl>
          <dd>仪器分类：<span>{{ collect.yiqifenleiName }}</span></dd>
          <dd>仪器型号：<span>{{ collect.yiqixinghao }}</span></dd>
          <dd>所属系：<span>{{ collect.xiName }}</span></dd>
          <dd>放置位置：<span>{{ collect.yiqididian}}</span></dd>
        </dl>
        <div class="grxx_yiqi_collect">
          <img src="@/assets/images/加星收藏_填充.png" :alt="collect.yiqiming" class="collect" @click="deleteCollect" />
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'collectList',
  props: ['collect'],
  data() {
    return {
      img: '',
      quxiao: {
        ids: ''
      }
    }
  },
  created() {
    // 图片
    this.img = 'http://10.99.7.5:808/common/download?name=' + this.collect.yiqitupian
  },
  methods() {
    this.deleteCollect()
  },
  methods: {
    async deleteCollect() {
      try {
        this.quxiao.ids = this.collect.id
        await this.$store.dispatch('deleteCollect', this.quxiao)
        this.$message({
          message: '取消收藏',
          type: 'success',
          duration: 1000
        })
        // 向collect组件发送一个$bus通信
        this.$bus.$emit('delCollect', 0)
      } catch (error) {
        this.$message({
          type: 'error',
          message: '取消收藏失败',
          duration: 1000
        })
      }
    }
  }
}
</script>

<style>
</style>