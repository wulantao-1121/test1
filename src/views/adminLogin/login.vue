<template>
  <div class="login_content">
    <div class="login">
      <div class="login_title">后台管理登录</div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="auto" class="demo-ruleForm">
        <el-form-item label="账号" prop="pass">
          <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="submit" @click="submitForm(ruleForm)">登录</el-button>
          <el-button>退出登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import '@/assets/css/login.less'
export default {
  name: 'adminLogin',
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  methods: {
    async submitForm(ruleForm) {
      let res = await this.$API.API.admin(ruleForm)
      if (res.code == 1) {
        sessionStorage.setItem('admin', res.data.name)
        this.$message({
          message: '登录成功',
          type: 'success',
          duration: 500
        })
        setTimeout(() => {
          this.$router.push('/')
        }, 1000)
      } else {
        this.$message({
          message: '登录失败',
          type: 'error',
          duration: 200
        })
      }
    }
  }
}
</script>

<style>
</style>