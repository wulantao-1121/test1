<template>
  <div class="right">
    <div class="ri-up">
      <p>预约管理</p>
    </div>
    <div class="ri-down">
      <div class="do-anniu">
        <el-form label-width="80px" :model="formInline" ref="formInline" :rules="rules">
          <el-form-item label="搜索" prop="yuyueSreach">
            <el-input v-model="formInline.yuyueSreach" placeholder="搜索预约仪器"></el-input>
            <el-button type="primary" @click="yuyueSreach('formInline')">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="do-main">
        <div class="title">
          <table cellspacing="0px">
            <tr class="table_title">
              <th class="yuyueId">序号</th>
              <th class="xinxi">仪器信息</th>
              <th class="jie">工号</th>
              <th class="fuzeren">负责人</th>
              <th class="caozuo">操作</th>
            </tr>
            <yuyueList v-for="item in yuyueList.records" :key="item.id" :yuyueList="item"></yuyueList>
          </table>
        </div>
        <page :total="yuyueList.total" :pageSize="yuyueList.size" :currentPage="parseInt($route.query.page)" @getPage="getPage"></page>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/index.less'
import page from '@/components/page.vue'
import yuyueList from './yuyueList.vue'
export default {
  name: 'yuyue',
  components: { page, yuyueList },
  data() {
    return {
      formInline: {
        yuyueSreach: ''
      },
      yuyue: {
        page: 1,
        pageSize: 7,
        shiYong: 3,
        isAdmin: sessionStorage.getItem('admin')
      },
      yuyueList: [],
      rules: {
        yuyueSreach: [{ required: true, message: '搜索不能为空', trigger: 'blur' }]
      }
    }
  },
  mounted() {
    this.yuyue.page = this.$route.query.page || 1
    this.yuyue.pageSize = this.$route.query.pageSize || 7
    this.getYuYue()
  },
  methods: {
    async getYuYue() {
      let res = await this.$API.API.yuyueManage(this.yuyue)
      if (res.code == 1) {
        for (let i = 0; i < res.data.records.length; i++) {
          res.data.records[i].yuyueshijian = res.data.records[i].yuyueshijian.replace('T', ' ')
          res.data.records[i].jieshushijian = res.data.records[i].jieshushijian.replace('T', ' ')
        }
        this.yuyueList = res.data
      }
    },
    getPage(index) {
      this.yuyue.page = index
      this.$router.push({ name: 'yuyue', query: { page: this.yuyue.page, pageSize: this.yuyue.pageSize } })
      this.getYuYue()
    },
    // 验证是否输入
    yuyueSreach(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.formInline.yuyueSreach)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>
</style>