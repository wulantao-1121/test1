<template>
  <tr class="table_contion">
    <td class="xuhao">{{ yiqi.id }}</td>
    <td class="xinxi">
      <div class="yiqi_img">
        <img :src="img" alt="">
      </div>
      <div class="yiqi">
        <h1>{{ yiqi.yiqiming }}</h1>
        <dl>
          <dd>
            <span>仪器型号:</span>
            <span class="w">{{ yiqi.yiqixinghao }}</span>
          </dd>
          <dd>
            <span>所属系:</span>
            <span class="w">{{ yiqi.xiName }}</span>
          </dd>
          <dd>
            <span>放置位置:</span>
            <span class="w">{{ yiqi.yiqididian }}</span>
          </dd>
        </dl>
      </div>
    </td>
    <td class="fuzeren">{{ yiqi.fuzeren }}</td>
    <td class="caozuo">
      <el-button type="primary" class="bianji" @click="bianji">编辑</el-button>
      <el-button type="danger" class="shanchu" @click="deleteYiQi">删除</el-button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'yiqiList',
  props: ['yiqi'],
  data() {
    return {
      deleteYiQiId: {
        ids: ''
      },
      img: ''
    }
  },
  created() {
    this.img = `http://localhost:8080/common/download?name=${this.yiqi.yiqitupian}`
  },
  methods: {
    bianji() {
      let yiqiId = this.$el.childNodes[0].innerHTML
      this.$bus.$emit('addYiQi', 1, this.img)
      this.$bus.$emit('yiqiHuixian', yiqiId)
    },
    async deleteYiQi() {
      let ids = this.$el.childNodes[0].innerHTML
      this.deleteYiQiId.ids = ids
      let res = await this.$API.API.deleteYiQi(this.deleteYiQiId)
      if (res.code == 1) {
        this.$message({
          message: '删除成功',
          type: 'success',
          duration: 1000
        })
        this.$bus.$emit('load', true)
      } else {
        this.$message({
          message: res.msg,
          type: 'error',
          duration: 1000
        })
      }
    }
  }
}
</script>

<style>
</style>