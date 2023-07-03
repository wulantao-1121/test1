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
          <!-- 激活 -->
          <div v-if="sreach.jihuo===1">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDisable(scope.$index, scope.row)">禁用</el-button>
          </div>
          <!-- 未激活 -->
          <div v-if="sreach.jihuo===0">
            <el-button size="mini" @click="handleActivation(scope.$index, scope.row)">激活</el-button>
            <el-button size="mini" type="danger" @click="handleRefuse(scope.$index, scope.row)">拒绝</el-button>
          </div>
          <!-- 禁用 -->
          <div v-if="sreach.jihuo===2">
            <el-button size="mini" @click="handleEnable(scope.$index, scope.row)">启用</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <page :total="tableData.total" :pageSize="tableData.size" :currentPage="parseInt($route.query.page)" @getPage="getPage"></page>
  </div>
</template>

<script>
import page from '@/components/page.vue'
export default {
  name: 'userSreach',
  components: { page },
  data() {
    return {
      tableData: [],
      sreach: {
        page: 1,
        pageSize: 10,
        name: '',
        jihuo: ''
      },
      update: {
        id: '',
        jihuo: ''
      },
      deleteInfo: {
        id: ''
      }
    }
  },
  beforeCreate() {
    this.$bus.$off('sreach')
    this.$bus.$off('load')
  },
  created() {},
  mounted() {
    let sreachInfo = value => {
      this.sreach.name = value
      console.log(this.$route.path)
      if (this.$route.path === '/home/user/jihuo') {
        this.sreach.jihuo = 1
      } else if (this.$route.path === '/home/user/wei') {
        this.sreach.jihuo = 0
      } else if (this.$route.path === '/home/user/jin') {
        this.sreach.jihuo = 2
      }
      this.getUserSreach()
    }
    this.$bus.$on('sreach', sreachInfo)
    this.$bus.$on('load', value => {
      this.getUserSreach()
    })
  },
  methods: {
    async getUserSreach() {
      let res = await this.$API.API.userSreach(this.sreach)
      if (res.code == 1) {
        this.tableData = res.data
      }
    },
    getPage(index) {
      this.sreach.page = index
      this.$router.push({ name: 'jihuo', query: { page: this.sreach.page, pageSize: this.sreach.pageSize } })
      this.getUserSreach()
    },
    // 编辑按钮
    handleEdit(index, row) {
      this.$bus.$emit('addUser', 1)
      this.$bus.$emit('bainji', row.id)
    },
    // 禁用按钮
    async handleDisable(index, row) {
      this.update.id = row.id
      this.update.jihuo = 2
      let res = await this.$API.API.updateInfo(this.update)
      if (res.code == 1) {
        this.getUserSreach()
        this.$message({
          message: '禁用成功',
          type: 'success',
          duration: 1000
        })
      } else {
        this.$message({
          message: '禁用失败',
          type: 'error',
          duration: 1000
        })
      }
    },
    // 激活按钮
    async handleActivation(index, row) {
      this.update.id = row.id
      this.update.jihuo = 1
      let res = await this.$API.API.updateInfo(this.update)
      if (res.code == 1) {
        this.getUserSreach()
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
    // 拒绝按钮
    async handleRefuse(index, row) {
      this.deleteInfo.id = row.id
      let res = await this.$API.API.deleteInfo(this.deleteInfo)
      if (res.code == 1) {
        this.getUserSreach()
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
    },
    // 启用按钮
    async handleEnable(index, row) {
      this.update.id = row.id
      this.update.jihuo = 1
      let res = await this.$API.API.updateInfo(this.update)
      if (res.code == 1) {
        this.getUserSreach()
        this.$message({
          message: '激活成功',
          type: 'success',
          duration: 1000
        })
      }
    }
  }
}
</script>

<style>
</style>