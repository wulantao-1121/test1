<template>
  <div class="login_content">
    <div class="login">
      <div class="login_title">登录</div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="auto" class="demo-ruleForm">
        <el-form-item label="账号" prop="pass">
          <el-input type="text" v-model="ruleForm.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <div class="zhuce">
          <a @click="$router.push('/register')">注册</a>
        </div>
        <el-form-item>
          <el-button type="submit" @click="submitForm(ruleForm)">登录</el-button>
          <el-button @click="$router.push('/')">退出登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import '@/assets/css/login.less'
export default {
  name: 'Login',

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
        id: '',
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
      try {
        await this.$store.dispatch('getUserLogin', ruleForm)
        this.$router.push('/')
      } catch (error) {
        alert(error.message)
      }
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
</style>