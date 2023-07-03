<template>
  <div class="right">
    <div class="ri-up">
      <p>公告管理</p>
    </div>
    <div class="ri-down">
      <div class="do-anniu">
        <el-form label-width="80px" :model="noticeData" :rules="rules" ref="formInline">
          <el-form-item label="搜索" prop="biaoti">
            <el-input v-model="noticeData.biaoti" placeholder="请输入要搜索的新闻或公告"></el-input>
            <el-button type="primary" @click="gonggaoSreach('formInline')">搜索</el-button>
          </el-form-item>
        </el-form>
        <el-button type="primary" class="add" @click="addNotice">新增公告</el-button>
      </div>
      <addNotice></addNotice>
      <updateNotice></updateNotice>
      <div class="do-main">
        <el-table :data="tableData.records" style="width: 100%">
          <el-table-column prop="id" label="工号" width="120">
          </el-table-column>
          <el-table-column prop="biaoti" label="标题" width="400" :show-overflow-tooltip='true'>
          </el-table-column>
          <el-table-column prop="neirong" label="新闻内容" :show-overflow-tooltip='true'>
            <template v-slot="scope">
              <div v-html="scope.row.neirong.replace(/<[^>]*>/g, '')"></div>
            </template>
          </el-table-column>
          <el-table-column prop="fabuzhe" label="撰稿人" width="150">
          </el-table-column>
          <el-table-column prop="addtime" label="发布时间" width="200">
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <page :total="tableData.total" :pageSize="tableData.size" :currentPage="parseInt($route.query.page)" @getPage="getPage"></page>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/index.less'
import Page from '@/components/page.vue'
import addNotice from './addNotice.vue'
import updateNotice from './updateNotice.vue'
export default {
  name: 'gonggao',
  components: {
    Page,
    addNotice,
    updateNotice
  },
  data() {
    return {
      noticeData: {
        page: 1,
        pageSize: 10,
        leixing: 2,
        biaoti: ''
      },
      tableData: [],
      rules: {
        biaoti: [{ required: true, message: '搜索不能为空', trigger: 'blur' }]
      }
    }
  },
  beforeCreate() {
    this.$bus.$off('load')
  },
  mounted() {
    this.noticeData.page = this.$route.query.page || 1
    this.noticeData.pageSize = this.$route.query.pageSize || 10
    this.getNotice()
    this.getLoad()
  },
  methods: {
    async getNotice() {
      let res = await this.$API.API.newsNoticeManage(this.noticeData)
      if (res.code == 1) {
        this.tableData = res.data
      }
      for (let i = 0; i < res.data.records.length; i++) {
        res.data.records[i].addtime = res.data.records[i].addtime.replace('T', ' ')
      }
    },
    handleEdit(index, row) {
      this.$bus.$emit('updateNotice', true)
      this.$bus.$emit('getNoticeId', row.id)
    },
    // 删除
    async handleDelete(index, row) {
      let res = await this.$API.API.deleteNewsNotice(row.id)
      if (this.tableData.records.length - 1 === 0) {
        this.noticeData.page = this.$route.query.page - 1
        this.$router.push({ name: 'gonggao', query: { page: this.noticeData.page, pageSize: this.noticeData.pageSize } })
        this.getNotice()
      }
      if (res.code == 1) {
        this.$message({
          message: '删除成功',
          type: 'success',
          duration: 1000
        })
        this.getNotice()
      } else {
        this.$message({
          message: '删除失败',
          type: 'error',
          duration: 1000
        })
      }
    },
    gonggaoSreach(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.NewsNoticeSreach()
        } else {
          this.$message({
            message: '搜索值不能为空',
            type: 'error',
            duration: 1000
          })
          return false
        }
      })
    },
    addNotice() {
      this.$bus.$emit('addNoticeDialog', true)
    },
    getPage(index) {
      this.noticeData.page = index
      this.$router.push({ name: 'gonggao', query: { page: this.noticeData.page, pageSize: this.noticeData.pageSize } })
      this.getNotice()
    },
    getLoad() {
      this.$bus.$on('load', value => {
        if (value) {
          this.getNotice()
        }
      })
      this.$bus.$on('add', value => {
        if (value) {
          this.getNotice()
        }
      })
    },
    // 公告的搜索请求
    async NewsNoticeSreach() {
      let res = await this.$API.API.NewsNoticeSreach(this.noticeData)
      if (res.code == 1) {
        this.$message({
          message: '搜索成功',
          type: 'success',
          duration: 1000
        })
        this.tableData = res.data
      } else {
        this.$message({
          message: '没有改内容',
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