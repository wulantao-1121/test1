<template>
  <div>
    <el-table :data="tableData.records" style="width: 100%">
      <el-table-column prop="id" label="工号" width="120">
      </el-table-column>
      <el-table-column prop="name" label="教师名" width="150">
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
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">禁用</el-button>
        </template>
      </el-table-column>
    </el-table>
    <page :total="tableData.total" :pageSize="tableData.size" :currentPage="parseInt($route.query.page)" @getPage="getPage"></page>
  </div>
</template>

<script>
import page from '@/components/page.vue'
export default {
  name: 'jihuo',
  components: {
    page
  },
  data() {
    return {
      user: {
        page: 1,
        pageSize: 10,
        jihuo: 1
      },
      tableData: [],
      update: {
        id: '',
        jihuo: 2
      }
    }
  },
  beforeCreate() {
    this.$bus.$off('load')
  },
  created() {
    // if (this.$route.path === '/home/user/jihuo') {
    //   this.user.page = this.$route.query.page
    //   this.user.pageSize = this.$router.pageSize
    //   this.user.jihuo = 1
    //   this.getUser()
    // }
  },
  mounted() {
    this.user.page = this.$route.query.page || 1
    this.user.pageSize = this.$route.query.pageSize || 10
    this.getUser()
    this.$bus.$on('load', value => {
      if (value) {
        this.getUser()
      }
    })
  },
  methods: {
    async getUser() {
      let res = await this.$API.API.getUser(this.user)
      if (res.code == 1) {
        this.tableData = res.data
      }
    },
    getPage(index) {
      this.user.page = index
      this.$router.push({ name: 'jihuo', query: { page: this.user.page, pageSize: this.user.pageSize } })
      this.getUser()
    },
    handleEdit(index, row) {
      this.$bus.$emit('addUser', 1)
      this.$bus.$emit('bainji', row.id)
    },
    async handleDelete(index, row) {
      this.update.id = row.id
      let res = await this.$API.API.updateInfo(this.update)
      if (res.code == 1) {
        this.getUser()
        this.$message({
          message: '禁用成功',
          type: 'success',
          duration: 1000
        })
        if (this.tableData.records.length - 1 === 0) {
          if (this.$route.query.page === 1) {
            this.user.page = 1
            this.getUser()
          } else if (this.$route.query.page > 1) {
            this.user.page = this.$route.query.page - 1
            this.$router.push({ name: 'jihuo', query: { page: this.user.page, pageSize: this.user.pageSize } })
            this.getUser()
          }
        }
      } else {
        this.$message({
          message: '禁用失败',
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