<template>
  <div class="right">
    <div class="ri-up">
      <p>用户管理</p>
    </div>
    <div class="ri-down">
      <div class="do-anniu">
        <el-form label-width="80px" :model="formInline" :rules="rules" ref="formInline">
          <el-form-item label="搜索" prop="user">
            <el-input v-model="formInline.user" placeholder="请输入要搜索的工号或教师名"></el-input>
          </el-form-item>
          <el-button type="primary" @click="sreachForm('formInline')">搜索</el-button>
        </el-form>
        <el-button type="primary" class="add" @click="adduser">新增用户</el-button>
      </div>
      <div class="do_jihuo" v-if="formInline.user!= ''">
        <div class="sreach">搜索</div>
      </div>
      <div class="do_jihuo" v-if="formInline.user==''">
        <router-link class="jihuo" to='/home/user/jihuo' active-class="jihuozhuangtai">激活</router-link>
        <router-link class="weijihuo" to='/home/user/wei' active-class="jihuozhuangtai">未激活</router-link>
        <router-link class="weijihuo" to='/home/user/jin' active-class="jihuozhuangtai">禁用</router-link>
      </div>
      <div class="do-main" v-if="formInline.user==''">
        <router-view></router-view>
      </div>
      <div class="do-main" v-if="formInline.user!= ''">
        <userSreach></userSreach>
      </div>
      <userDialog></userDialog>
    </div>
  </div>
</template>

<script>
import '@/assets/css/index.less'
import userDialog from './userDialog.vue'
import userSreach from './userSreach.vue'
export default {
  name: 'user',
  components: { userDialog, userSreach },
  data() {
    return {
      formInline: {
        user: ''
      },
      rules: {
        user: [{ required: true, message: '请输入教师名和工号', trigger: 'blur' }]
      }
    }
  },
  //
  beforeDestroy() {
    this.$bus.$emit('sreach', this.formInline.user)
  },
  methods: {
    adduser() {
      this.$bus.$emit('addUser', 0)
    },
    sreachForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$bus.$emit('sreach', this.formInline.user)
        } else {
          this.$message({
            message: '请重新输入工号和教师名',
            type: 'error',
            duration: 1000
          })
          return false
        }
      })
    }
  }
}
</script>

<style>
</style>