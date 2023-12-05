<template>
  <el-dialog :title="title" :visible.sync="dialogFormVisible">
    <el-form :model="addForm">
      <el-form-item label="仪器名称" :label-width="formLabelWidth" width="50%">
        <el-input v-model="addForm.yiqiming" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="仪器型号" :label-width="formLabelWidth">
        <el-input v-model="addForm.yiqixinghao" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="仪器分类" :label-width="formLabelWidth">
        <el-select v-model="addForm.yiqifenleiId" placeholder="仪器分类">
          <el-option label="" value=''></el-option>
          <el-option :label=item.yiqifenleiming :value=item.id v-for="item in fenLei" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="负责人" :label-width="formLabelWidth">
        <el-input v-model="addForm.fuzeren" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="负责人电话" :label-width="formLabelWidth">
        <el-input v-model="addForm.fuzerendianhua" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="联系邮箱" :label-width="formLabelWidth">
        <el-input v-model="addForm.lianxiyouxiang" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="所属品牌" :label-width="formLabelWidth">
        <el-input v-model="addForm.yiqipinpai" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="放置地点" :label-width="formLabelWidth">
        <el-input v-model="addForm.yiqididian" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="所在系" :label-width="formLabelWidth">
        <el-select v-model="addForm.xiId" placeholder="所在系">
          <el-option label="" value=''></el-option>
          <el-option :label=item.ximing :value=item.id v-for="item in xiId" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="主要功能与特色" class="gongnengtese" prop="desc">
        <el-input type="textarea" v-model="addForm.gongnengtese"></el-input>
      </el-form-item>
      <el-form-item label="主要附件与配置" class="fujianpeizhi" prop="desc">
        <el-input type="textarea" v-model="addForm.fujianpeizhi"></el-input>
      </el-form-item>
      <el-form-item label="安全使用注意事项" class="zhuyishixiang" prop="desc">
        <el-input type="textarea" v-model="addForm.zhuyishixiang"></el-input>
      </el-form-item>
      <el-form-item label="主要规格" class="zhuyishixiang" prop="desc">
        <el-input type="textarea" v-model="addForm.guige"></el-input>
      </el-form-item>
      <el-upload action="/common/upload" enctype="multipart/form-data" :auto-upload="true" list-type="picture-card" :on-success="handleSuccess" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <img width="148px" :src="imgUrl" alt="">
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" src="" alt="">
      </el-dialog>
    </el-form>
    <div class="uploadPrompt">注意：选中照片之后照片自动上传，请谨慎修改</div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取消</el-button>
      <el-button type="primary" @click="addAnUpdata">确 定</el-button>
    </div>

  </el-dialog>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'dialogShow',
  props: ['yiqitupian'],
  data() {
    return {
      imgUrl: '',
      dialogVisible: false,
      disabled: true,
      dialogFormVisible: false,
      formLabelWidth: '120px',
      isShow: '',
      title: '新增仪器',
      img: {
        name: ''
      }
    }
  },
  computed: {
    ...mapState({
      addForm: state => state.enjoy.addForm,
      xiId: state => state.enjoy.xiId,
      fenLei: state => state.enjoy.fenLei
    })
  },
  // 创建之前销毁全局事件总线
  beforeCreate() {
    this.$bus.$off('add')
    this.$bus.$off('id')
  },
  created() {},
  mounted() {
    // 接收事件
    this.$bus.$on('add', (value, tu) => {
      this.title = '修改仪器'
      this.isShow = value
      this.$store.dispatch('yiqiXi')
      this.$store.dispatch('yiqiFenlei')
      if (this.isShow === 0) {
        this.$store.state.enjoy.addForm = {}
        this.dialogFormVisible = true
      } else if (this.isShow === 1) {
        // 这是点击修改执行对话框
        this.imgUrl = `http://10.99.7.5:808/common/download?name=${tu.yiqitupian}`
        this.dialogFormVisible = true
      }
    })
      // 接收事件
    this.$bus.$on('id', value => {
      this.addForm.id = value
      this.$store.dispatch('HuiXian', this.addForm.id)
    })
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.imgUrl = file.url
      this.dialogVisible = true
    },
    handleSuccess(response, file, fileList) {
      this.addForm.yiqitupian = response.data.fileName
    },
    //
    async addAnUpdata() {
      // 添加仪器成功
      if (this.isShow == 0) {
        try {
          await this.$store.dispatch('addYiqi', this.addForm)
          this.$message({
            message: '添加成功',
            type: 'success',
            duration: 1000
          })
          this.dialogFormVisible = false
          // 添加成功之后向enjoy发送一个触发事件让enjoy刷新页面
          this.$bus.$emit('load', true)
        } catch (error) {
          this.$message({
            message: '添加失败',
            type: 'error',
            duration: 1000
          })
        }
      }
      // 修改仪器成功
      else if (this.isShow == 1) {
        try {
          await this.$store.dispatch('xiuGaiYiqi', this.addForm)
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          })
          this.dialogFormVisible = false
          // 修改成功之后向enjoy发送一个触发事件让enjoy刷新页面
          this.$bus.$emit('load', true)
        } catch (error) {
          this.$message({
            message: '添加失败',
            type: 'error',
            duration: 1000
          })
        }
      }
    }
  }
}
</script>

<style>
</style>