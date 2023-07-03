<template>
  <div class="right">
    <div class="ri-up">
      <p>新闻管理</p>
    </div>
    <div class="ri-down">
      <div class="do-anniu">
        <el-form label-width="80px" :model="newsData" ref="formInline" :rules="rules">
          <el-form-item label="搜索" prop="biaoti">
            <el-input v-model="newsData.biaoti" placeholder="请输入要搜索新闻标题"></el-input>
            <el-button type="primary" @click="newsSreach('formInline')">搜索</el-button>
          </el-form-item>
        </el-form>
        <el-button type="primary" class="add" @click="addNews">新增新闻</el-button>
        <newsDialog></newsDialog>
        <updateDialog></updateDialog>
      </div>
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
        <page :total="tableData.total" :pageSize="tableData.size" :currentPage="tableData.current" @getPage="getPage">
        </page>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/index.less'
import page from '@/components/page.vue'
import newsDialog from './newsDialog.vue'
import updateDialog from './updateDialog.vue'
export default {
  name: 'news',
  components: {
    page,
    newsDialog,
    updateDialog
  },
  data() {
    return {
      formInline: {},
      newsData: {
        page: 1,
        pageSize: 10,
        leixing: 1,
        biaoti: ''
      },
      tableData: [],
      rules: {
        biaoti: [{ required: true, message: '搜索不能为空', trigger: 'blur' }]
      }
    }
  },
  beforeCreate() {
    this.$bus.$off('addNewsInfo')
    this.$bus.$off('loadNews')
  },
  mounted() {
    this.newsData.page = this.$route.query.page || 1
    this.getNews()
    this.getUpdateNews()
    this.getadd()
  },
  methods: {
    async getNews() {
      let res = await this.$API.API.newsNoticeManage(this.newsData)
      if (res.code == 1) {
        this.tableData = res.data
      }
      for (let i = 0; i < res.data.records.length; i++) {
        res.data.records[i].addtime = res.data.records[i].addtime.replace('T', ' ')
      }
    },
    newsSreach(formName) {
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
    // 编辑
    handleEdit(index, row) {
      this.$bus.$emit('updateDialog', true)
      this.$bus.$emit('updateId', row.id)
    },
    //删除
    async handleDelete(index, row) {
      let res = await this.$API.API.deleteNewsNotice(row.id)
      if (this.tableData.records.length - 1 === 0) {
        this.newsData.page = this.$route.query.page - 1
        this.$router.push({ name: 'news', query: { page: this.newsData.page, pageSize: this.newsData.pageSize } })
        this.getNews()
      }
      if (res.code == 1) {
        this.$message({
          message: '删除成功',
          type: 'success',
          duration: 1000
        })
        this.getNews()
      } else {
        this.$message({
          message: '删除失败',
          type: 'error',
          duration: 1000
        })
      }
    },
    addNews() {
      this.$bus.$emit('addNews', true)
    },
    getPage(index) {
      this.newsData.page = index
      this.$router.push({ name: 'news', query: { page: this.newsData.page, pageSize: this.newsData.pageSize } })
      this.getNews()
    },
    getUpdateNews() {
      this.$bus.$on('loadNews', value => {
        if (value) {
          this.getNews()
        }
      })
    },
    getadd() {
      this.$bus.$on('addNewsInfo', value => {
        if (value) {
          this.getNews()
        }
      })
    },
    // 新闻的搜索请求
    async NewsNoticeSreach() {
      let res = await this.$API.API.NewsNoticeSreach(this.newsData)
      if (res.code == 1) {
        this.$message({
          message: '搜索成功',
          type: 'success',
          duration: 1000
        })
        console.log(res)
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

<style></style>