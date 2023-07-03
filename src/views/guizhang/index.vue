<template>
  <div class="right">
    <div class="ri-up">
      <p>规章指南</p>
    </div>
    <div class="ri-down">
      <div class="ri-down">
        <div class="do-anniu">
          <el-form label-width="80px" :model="formInline" ref="formInline" :rules="rules">
            <el-form-item label="搜索" prop="news">
              <el-input v-model="formInline.guizhang" placeholder="请输入要搜索规章标题"></el-input>
              <el-button type="primary" @click="GuizhangSreach('formInline')">搜索</el-button>
            </el-form-item>
          </el-form>
          <el-button type="primary" class="add" @click="addGuiZhang">新增规章</el-button>
        </div>
        <addGuiZhangDialog></addGuiZhangDialog>
        <updateGuiZhang></updateGuiZhang>
        <div class="do-main">
          <el-table :data="tableData.records" style="width: 100%">
            <el-table-column prop="id" label="序号" width="120"> </el-table-column>
            <el-table-column prop="biaoti" label="标题" width="400" :show-overflow-tooltip="true"> </el-table-column>
            <el-table-column prop="neirong" label="规章内容" :show-overflow-tooltip="true">
              <template v-slot="scope">
                <div v-html="scope.row.neirong.replace(/<[^>]*>/g, '')"></div>
              </template>
            </el-table-column>
            <el-table-column prop="fabuzhe" label="撰稿人" width="150"> </el-table-column>
            <el-table-column prop="addtime" label="发布时间" width="200"> </el-table-column>
            <el-table-column label="操作" width="200">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <page :total="tableData.total" :pageSize="tableData.size" :currentPage="tableData.current" @getPage="getPage"> </page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/index.less'
import '@wangeditor/editor/dist/css/style.css'
import page from '@/components/page.vue'
import addGuiZhangDialog from './addGuiZhangDialog.vue'
import updateGuiZhang from './updateGuiZhang.vue'
export default {
  name: 'guizhang',
  components: {
    addGuiZhangDialog,
    page,
    updateGuiZhang
  },
  data() {
    return {
      formInline: {
        guizhang: ''
      },
      tableData: [],
      guizhang: {
        neirong: ''
      },
      editor: null,
      toolbarConfig: {},
      editorConfig: { placeholder: '请输入内容...' },
      mode: 'default', // or 'simple'
      rules: {},
      guizhang: {
        page: 1,
        pageSize: 10,
        leixing: 3
      }
    }
  },
  beforeCreate() {
    this.$bus.$off('getGuiZhang')
  },
  methods: {
    async getGuiZhang() {
      let res = await this.$API.API.getGuiZhangInfo(this.guizhang)
      this.tableData = res.data
      if (this.tableData.records.length === 0) {
        this.guizhang.page = this.$route.query.page - 1
        this.$router.push({ name: 'regulations', query: { page: this.guizhang.page, pageSize: this.guizhang.pageSize } })
        this.getGuiZhang()
      }
      for (let i = 0; i < res.data.records.length; i++) {
        res.data.records[i].addtime = res.data.records[i].addtime.replace('T', ' ')
      }
    },
    GuizhangSreach(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: '搜索成功',
            type: 'success',
            duration: 1000
          })
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
    getPage(index) {
      this.guizhang.page = index
      this.$router.push({ name: 'regulations', query: { page: this.guizhang.page, pageSize: this.guizhang.pageSize } })
      this.getGuiZhang()
    },
    handleEdit(index, row) {
      this.$bus.$emit('updateGuiZhang', row.id)
    },
    async handleDelete(index, row) {
      let res = await this.$API.API.deleteNewsNotice(row.id)
      if (res.code == 1) {
        this.$message({
          message: '删除成功',
          type: 'success',
          duration: 1000
        })
        this.getGuiZhang()
      } else {
        this.$message({
          message: '删除失败',
          type: 'error',
          duration: 1000
        })
      }
    },
    addGuiZhang() {
      this.$bus.$emit('addGuiZhang', true)
    }
  },
  mounted() {
    this.guizhang.page = this.$route.query.page || 1
    this.getGuiZhang()
    this.$bus.$on('getGuiZhang', value => {
      if (value) {
        this.getGuiZhang()
      }
    })
  }
}
</script>

<style></style>
