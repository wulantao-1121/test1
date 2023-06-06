<template>
  <div class="register_content">
    <div class="register">
      <div class="tui">
        <i class="el-icon-circle-close" @click="$router.push('/login')"></i>
      </div>
      <div class="register_title">仪器共享平台注册</div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="工号" prop="id">
          <el-input type="text" v-model=ruleForm.id autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
          <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input type="text" v-model="ruleForm.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="教师名" prop="teacher">
          <el-input type="text" v-model="ruleForm.teacher" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所在系" prop="xiId">
          <el-select v-model="ruleForm.xiId" placeholder="所在系">
            <el-option label="软件与大数据系" :value=1></el-option>
            <el-option label="电子信息系" :value=2></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="email" prop="email">
          <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import '@/assets/css/register.less'
export default {
  name: 'register',
  data() {
    var id = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('工号不能为空'))
      } else {
        callback()
      }
    }
    var name = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('工号不能为空'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.password !== '') {
          this.$refs.ruleForm.validateField('password')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var phone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      } else if (value.length !== 11) {
        return callback(new Error('请填写正确的手机号'))
      } else {
        callback()
      }
    }
    var teacher = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('教师名不能为空'))
      } else {
        callback()
      }
    }

    return {
      ruleForm: {
        id: '',
        name: '',
        // pass: '',
        password: '',
        phone: '',
        teacher: '',
        xiId: '',
        email: '',
        jihuo: 0
      },
      fromData: {
        id: '',
        name: '',
        password: '',
        phone: '',
        teacher: '',
        xiId: '',
        email: '',
        jihuo: 0
      },
      rules: {
        id: [{ validator: id, trigger: 'blur' }],
        name: [{ validator: name, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        password: [{ validator: validatePass2, trigger: 'blur' }],
        phone: [{ validator: phone, trigger: 'blur' }],
        teacher: [{ validator: teacher, trigger: 'blur' }],
        xiId: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    async submitForm(formName) {
      this.fromData.id = parseInt(this.ruleForm.id)
      this.fromData.name = this.ruleForm.name
      this.fromData.password = this.ruleForm.password
      this.fromData.phone = this.ruleForm.phone
      this.fromData.teacher = this.ruleForm.teacher
      this.fromData.xiId = this.ruleForm.xiId
      this.fromData.email = this.ruleForm.email
      this.fromData.jihuo = this.ruleForm.jihuo
      this.$refs[formName].validate(async valid => {
        if (valid) {
          try {
            await this.$store.dispatch('userRegister', this.ruleForm)
            alert('注册成功，请联系管理员进行账号激活')
            this.$router.push('/login')
          } catch (error) {
            alert(error.message)
          }
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .tui {
  position: relative;
  top: 5px;
  left: 93%;
  .el-icon-circle-close {
    font-size: 30px;
    &:hover {
      animation: rotate 1s;
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>