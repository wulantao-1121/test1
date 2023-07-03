<template>
  <div class="right">
    <div class="ri-up">
      <p>首页</p>
    </div>
    <div class="ri-down">
      <div class="do-anniu">
        <el-form label-width="80px" :model="formInline" :rules="rules" ref="formInline">
          <el-form-item label="搜索" prop="isname">
            <el-input v-model="formInline.isname" placeholder="请输入仪器信息"></el-input>
            <el-button type="primary" @click="add('formInline')">搜索</el-button>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="addYiqi">新增仪器</el-button>
        <yiQiDialog></yiQiDialog>
      </div>
      <div class="do-main">
        <router-view></router-view>
        <div v-show="$route.path == '/home/yiqiguanli'">
          <div class="title">
            <table cellspacing="0px">
              <tr class="table_title">
                <th class="xuhao">序号</th>
                <th class="xinxi">仪器信息</th>
                <th class="fuzeren">负责人</th>
                <th class="caozuo">操作</th>
              </tr>
              <yiqiList v-for="item in yiqiList.records" :key="item.id" :yiqi="item"></yiqiList>
            </table>
          </div>
          <page :total="yiqiList.total" :pageSize="yiqiList.size" :currentPage="parseInt($route.query.page)" @getPage="getPage"></page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/index.less'
import page from '@/components/page.vue'
import yiqiList from './yiqiList.vue'
import yiQiDialog from '@/views/yiqiguanli/yiQiDialog.vue'
export default {
  name: 'yiqiguanli',
  components: {
    page,
    yiqiList,
    yiQiDialog
  },
  data() {
    return {
      formInline: {
        page: 1,
        pageSize: 7,
        isname: ''
      },
      rules: {
        isname: [{ required: true, message: '请输入仪器信息', trigger: 'blur' }]
      },
      yiqi: {
        page: 1,
        pageSize: 7,
        isname: ''
      },
      yiqiList: [],
      yiqiShow: 0,
      isSreach: 0
    }
  },
  mounted() {
    this.yiqi.page = this.$route.query.page || 1
    this.getyiqi()
    this.$bus.$on('load', value => {
      this.getyiqi()
    })
  },
  methods: {
    async getyiqi() {
      let res = await this.$API.API.yiqiManage(this.yiqi)

      if (res.code == 1) {
        this.yiqiList = res.data
        if (this.yiqiList.records.length === 0) {
          this.yiqi.page = this.$route.query.page - 1
          this.$router.push({ name: 'yiqiguanli', query: { page: this.yiqi.page, pageSize: this.yiqi.pageSize } })
          this.getyiqi()
        }
      }
    },
    getPage(index) {
      this.yiqi.page = index
      this.$router.push({
        name: 'yiqiguanli',
        query: { page: this.yiqi.page, pageSize: this.yiqi.pageSize }
      })
      if (this.isSreach == 0) {
        this.getyiqi()
      } else {
        this.getYiQISreach()
      }
    },
    addYiqi() {
      this.$bus.$emit('addYiQi', 0)
    },
    // 仪器管理搜索
    add(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.isSreach = 1
          this.getYiQISreach()
        } else {
          this.$message({
            message: '请重新输入仪器信息',
            type: 'error',
            duration: 1000
          })
          return false
        }
      })
    },
    async getYiQISreach() {
      this.yiqi.isname = this.formInline.isname
      let res = await this.$API.API.yiQiSreach(this.yiqi)
      this.yiqiList = res.data
      if (res.code == 1) {
        this.$message({
          message: '搜索成功',
          type: 'success',
          duration: 1000
        })
      } else {
        this.$message({
          message: '没有该仪器',
          type: 'error',
          duration: 1000
        })
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
