<template>
  <el-dialog :title='title' :visible.sync="dialogFormVisible">
    <el-form :model="addForm" :rules="rules" ref="addForm">
      <el-form-item label="工号" v-if="title==='编辑用户'" :label-width="formLabelWidth" width="50%" prop="id">
        {{ this.addForm.id }}
      </el-form-item>
      <el-form-item label="工号" v-else :label-width="formLabelWidth" width="50%" prop="id">
        <el-input v-model="addForm.id" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="教师名" :label-width="formLabelWidth" prop="name">
        <el-input v-model="addForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
        <el-input v-model="addForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话" :label-width="formLabelWidth" prop="phone">
        <el-input v-model="addForm.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
        <el-input v-model="addForm.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="所在系" :label-width="formLabelWidth" prop="xiId">
        <el-select v-model="addForm.xiId" placeholder="所在系">
          <el-option :label="item.ximing" v-for="item in xiName" :key="item.id" :value="item.id">{{ item.ximing }}</el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取消</el-button>
      <el-button type="primary" @click="UploadUser('addForm')">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'userDialog',
  data() {
    return {
      addAnUpdate: '',
      value: '',
      dialogFormVisible: false,
      formLabelWidth: '120px',
      xiName: [],
      addForm: {
        id: '',
        name: '',
        password: '',
        phone: '',
        email: '',
        xiId: ''
      },
      title: '',
      rules: {
        name: [{ required: true, message: '请输入教师名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        xiId: [{ required: true, message: '请输入所在系', trigger: 'change' }]
      },
      user: {
        page: parseInt(this.$route.query.page),
        pageSize: parseInt(this.$route.query.pageSize),
        jihuo: 1
      }
    }
  },
  created() {},
  mounted() {
    this.$bus.$on('addUser', value => {
      if (value === 0) {
        this.addAnUpdate = 0
        this.title = '新增用户'
        this.getXi()
        this.dialogFormVisible = true
      } else if (value === 1) {
        this.addAnUpdate = 1
        this.title = '编辑用户'
        this.getXi()
        this.addForm = {}
        this.$bus.$on('bainji', handleBainji)
        this.dialogFormVisible = true
      }
    })
    let handleBainji = value => {
      this.getBianji(value)
      this.$bus.$off('bainji', handleBainji)
    }
  },
  methods: {
    // 获取系的数据
    async getXi() {
      let xi = await this.$API.API.xi()
      if (xi.code == 1) {
        this.xiName = xi.data
      }
    },
    // 数据编辑时数据回显
    async getBianji(value) {
      let res = await this.$API.API.userInfo(value)
      if (res.code === 1) {
        this.addForm = res.data
      }
    },
    // 添加和修改用户
    UploadUser(addForm) {
      // 修改
      if (this.addAnUpdate == 1) {
        this.$refs[addForm].validate(valid => {
          if (valid) {
            this.updateInfo()
            this.dialogFormVisible = false
          } else {
            this.$message({
              message: '修改信息错误，重新填写',
              type: 'error',
              duration: 1000
            })
            return false
          }
        })
        console.log('修改')
      } else if (this.addAnUpdate == 0) {
        // 新增
        this.$refs[addForm].validate(valid => {
          if (valid) {
            this.addUserInfo()
          } else {
            this.$message({
              message: '填写内容不对，请重新填写',
              type: 'error',
              duration: 1000
            })
            return false
          }
        })
      }
    },
    // 添加用户函数
    async addUserInfo() {
      let res = await this.$API.API.addUser(this.addForm)
      if (res.code == 1) {
        this.$message({
          message: '添加成功',
          type: 'success',
          duration: 1000
        })
        this.dialogFormVisible = false
      } else if (res.code == 0) {
        this.$message({
          message: '该工号已被使用',
          type: 'error',
          duration: 1000
        })
      }
    },
    async updateInfo() {
      let res = await this.$API.API.updateInfo(this.addForm)
      if (res.code == 1) {
        this.$message({
          message: '修改成功',
          type: 'success',
          duration: 1000
        })
        this.$bus.$emit('load', true)
      } else {
        this.$message({
          message: '修改失败',
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