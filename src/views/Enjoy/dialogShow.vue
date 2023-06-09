<template>
  <el-dialog title="新增仪器" :visible.sync="dialogFormVisible">
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
      <el-upload action="/common/upload" :enctype="multipartFormData" :auto-upload="true" list-type="picture-card" :on-change="getimg" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="file" alt="">
      </el-dialog>
    </el-form>
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
  data() {
    return {
      file: '',
      dialogVisible: false,
      disabled: false,
      dialogFormVisible: false,
      formLabelWidth: '120px',
      isShow: '',
      enjoydialog: {
        page: 1,
        pageSize: 6,
        isUser: 'aaa'
      },
      multipartFormData: 'multipart/form-data'
    }
  },
  computed: {
    ...mapState({
      addForm: state => state.enjoy.addForm,
      xiId: state => state.enjoy.xiId,
      fenLei: state => state.enjoy.fenLei
    })
  },
  created() {
    this.$bus.$on('add', value => {
      this.isShow = value
      this.$store.dispatch('yiqiXi')
      this.$store.dispatch('yiqiFenlei')
      if (this.isShow === 0) {
        this.$store.state.enjoy.addForm = {}
        this.dialogFormVisible = true
      } else if (this.isShow === 1) {
        this.dialogFormVisible = true
      }
    })
    this.$bus.$on('id', value => {
      this.addForm.id = value
      this.$store.dispatch('HuiXian', this.addForm.id)
    })
  },
  mounted() {},
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.file = file.url
      this.dialogVisible = true
    },
    getimg(file, fileList) {
      this.file = file.url
      console.log(file)
    },

    async addAnUpdata() {
      if (this.isShow == 0) {
        try {
          await this.$store.dispatch('addYiqi', this.addForm)
          await this.$store.dispatch('reqImages', this.file)
          this.dialogFormVisible = false
          alert('添加成功')
        } catch (error) {
          alert(error.message)
        }
      } else if (this.isShow == 1) {
        try {
          await this.$store.dispatch('xiuGaiYiqi', this.addForm)
          alert('修改成功')
          this.dialogFormVisible = false
          await this.$store.dispatch('getEnjoy', this.enjoydialog)
        } catch (error) {
          alert(error.message)
        }
      }
    }
  }
}
</script>

<style>
</style>