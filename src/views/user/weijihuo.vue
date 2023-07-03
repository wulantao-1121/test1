<template>
  <div>
    <el-table :data="tableData.records" style="width: 100%">
      <el-table-column prop="id" label="工号" width="120">
      </el-table-column>
      <el-table-column prop="name" label="教室名" width="150">
      </el-table-column>
      <el-table-column prop="xiName" label="所在系">
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
      </el-table-column>
      <el-table-column prop="phone" label="电话">
      </el-table-column>
      <el-table-column prop="password" label="密码">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">激活</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">拒绝</el-button>
        </template>
      </el-table-column>
    </el-table>
    <page :total="tableData.total" :pageSize="tableData.size" :currentPage="parseInt($route.query.page)" @getPage="getPage"></page>
  </div>
</template>

<script>
import page from '@/components/page.vue'
export default {
  name: 'weijihuo',
  components: {
    page
  },
  data() {
    return {
      user: {
        page: 1,
        pageSize: 10,
        jihuo: 0
      },
      tableData: [],
      update: {
        id: '',
        jihuo: 1
      },
      deleteInfo: {
        id: ''
      }
    }
  },
  mounted() {
    this.user.page = this.$route.query.page || 1
    this.user.pageSize = this.$route.query.pageSize || 10
    this.getUser()
  },
  methods: {
    async getUser() {
      let res = await this.$API.API.getUser(this.user)
      this.tableData = res.data
      console.log(this.tableData)
    },
    getPage(index) {
      this.user.page = index
      this.$router.push({ name: 'weijihuo', query: { page: this.user.page, pageSize: this.user.pageSize } })
      this.getUser()
    },
    async handleEdit(index, row) {
      this.update.id = row.id
      let res = await this.$API.API.updateInfo(this.update)
      if (res.code == 1) {
        this.getUser()
        this.$message({
          message: '激活成功',
          type: 'success',
          duration: 1000
        })
      } else {
        this.$message({
          message: '激活失败',
          type: 'error',
          duration: 1000
        })
      }
    },
    async handleDelete(index, row) {
      this.deleteInfo.id = row.id
      let res = await this.$API.API.deleteInfo(this.deleteInfo)
      if (res.code == 1) {
        this.getUser()
        this.$message({
          message: '驳回成功',
          type: 'success',
          duration: 1000
        })
      } else {
        this.$message({
          message: '驳回失败',
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