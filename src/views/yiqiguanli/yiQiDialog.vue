<template>
  <el-dialog :title='title' :visible.sync="dialogFormVisible" width="1200px">
    <el-form :model="addForm" :rules="rules">
      <el-form-item label="工号" :label-width="formLabelWidth" width="50%" prop="userId">
        <el-input v-model="addForm.userId" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="仪器名称" :label-width="formLabelWidth" width="50%" prop="yiqiming">
        <el-input v-model="addForm.yiqiming" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="仪器型号" :label-width="formLabelWidth" prop="yiqixinghao">
        <el-input v-model="addForm.yiqixinghao" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="仪器分类" :label-width="formLabelWidth" prop="yiqifenleiId">
        <el-select v-model="addForm.yiqifenleiId" placeholder="仪器分类">
          <el-option label="" value=''></el-option>
          <el-option :label="item.yiqifenleiming" v-for="item in fenLeiName" :key="item.id" :value="item.id">{{ item.yiqifenleiming }}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="负责人" :label-width="formLabelWidth" prop="fuzeren">
        <el-input v-model="addForm.fuzeren" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="负责人电话" :label-width="formLabelWidth" prop="fuzerendianhua">
        <el-input v-model="addForm.fuzerendianhua" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="联系邮箱" :label-width="formLabelWidth" prop="lianxiyouxiang">
        <el-input v-model="addForm.lianxiyouxiang" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="所属品牌" :label-width="formLabelWidth" prop="yiqipinpai">
        <el-input v-model="addForm.yiqipinpai" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="放置地点" :label-width="formLabelWidth" prop="yiqididian">
        <el-input v-model="addForm.yiqididian" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="所在系" :label-width="formLabelWidth" prop="xiId">
        <el-select v-model="addForm.xiId" placeholder="所在系">
          <el-option label="" value=''></el-option>
          <el-option :label="item.ximing" v-for="item in xiIdName" :key="item.id" :value="item.id">{{ item.ximing }}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="主要功能与特色" class="gongnengtese" prop="gongnengtese">
        <el-input type="textarea" v-model="addForm.gongnengtese"></el-input>
      </el-form-item>
      <el-form-item label="主要附件与配置" class="fujianpeizhi" prop="fujianpeizhi">
        <el-input type="textarea" v-model="addForm.fujianpeizhi"></el-input>
      </el-form-item>
      <el-form-item label="安全使用注意事项" class="zhuyishixiang" prop="zhuyishixiang">
        <el-input type="textarea" v-model="addForm.zhuyishixiang"></el-input>
      </el-form-item>
      <el-form-item label="主要规格" class="zhuyishixiang" prop="guige">
        <el-input type="textarea" v-model="addForm.guige"></el-input>
      </el-form-item>
      <el-upload action="/common/upload" enctype="multipart/form-data" :auto-upload="true" list-type="picture-card" :on-success="handleSuccess" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <img width="148px" :src="imgUrl" alt="" v-if="title=='修改仪器'">
      <img width="148px" src="" alt="" v-if="title=='新增仪器'">
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" src="" alt="">
      </el-dialog>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取消</el-button>
      <el-button type="primary" @click="update" v-if="title=='修改仪器'">确 定</el-button>
      <el-button type="primary" @click="addData" v-if="title=='新增仪器'">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'qiQiDialog',
  data() {
    return {
      imgUrl: '',
      dialogVisible: false,
      disabled: true,
      dialogFormVisible: false,
      formLabelWidth: '120px',
      xiIdName: [],
      fenLeiName: [],
      addForm: {
        userId: '',
        yiqiming: '',
        yiqixinghao: '',
        yiqifenleiId: '',
        fuzeren: '',
        fuzerendianhua: '',
        lianxiyouxiang: '',
        yiqipinpai: '',
        yiqididian: '',
        xiId: '',
        gongnengtese: '',
        fujianpeizhi: '',
        zhuyishixiang: '',
        guige: '',
        yiqitupian: ''
      },
      title: '',
      rules: {
        userId: [{ required: true, message: '请输入工号', trigger: 'blur' }],
        yiqiming: [{ required: true, message: '请输入仪器名', trigger: 'blur' }],
        yiqixinghao: [{ required: true, message: '请输入仪器型号', trigger: 'blur' }],
        lianxiyouxiang: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        fuzeren: [{ required: true, message: '请输入负责人', trigger: 'blur' }],
        fuzerendianhua: [{ required: true, message: '请输入负责人电话', trigger: 'blur' }],
        yiqipinpai: [{ required: true, message: '请输入仪器品牌', trigger: 'blur' }],
        gongnengtese: [{ required: true, message: '请输入功能特色', trigger: 'blur' }],
        fujianpeizhi: [{ required: true, message: '请输入附件', trigger: 'blur' }],
        zhuyishixiang: [{ required: true, message: '请输入注意事项', trigger: 'blur' }],
        guige: [{ required: true, message: '请输入规格', trigger: 'blur' }],
        yiqifenleiId: [{ required: true, message: '请输入所在系', trigger: 'change' }],
        yiqididian: [{ required: true, message: '请输入放置地点', trigger: 'blur' }],
        xiId: [{ required: true, message: '请输入所在系', trigger: 'change' }]
      }
    }
  },
  beforeCreate() {
    this.$bus.$off('yiqiHuixian')
    this.$bus.$off('addYiQi')
  },
  created() {},
  mounted() {
    this.$bus.$on('addYiQi', (value, img) => {
      if (value === 0) {
        this.title = '新增仪器'
        this.addForm = {}
        this.getXi()
        this.dialogFormVisible = true
      } else if (value === 1) {
        this.title = '修改仪器'
        this.addForm = {}
        this.$bus.$on('yiqiHuixian', YiQiHuiXian)
        this.dialogFormVisible = true
        this.imgUrl = img
      }
    })
    let YiQiHuiXian = value => {
      this.xiugai(value)
      this.$bus.$off('yiqiHuixian', YiQiHuiXian)
    }
  },
  methods: {
    // 获取系
    async getXi() {
      let xi = await this.$API.API.xi()
      let fenlei = await this.$API.API.fenLei()
      this.xiIdName = xi.data
      this.fenLeiName = fenlei.data
    },
    async xiugai(value) {
      let res = await this.$API.API.yiqiDetails(value)
      if (res.code == 1) {
        this.addForm = res.data.yiqiDto
      }
    },
    // 添加仪器
    async addData() {
      console.log(this.addForm)
      let res = await this.$API.API.addYiQi(this.addForm)
      if (res.code == 1) {
        this.$message({
          message: res.data,
          type: 'success',
          duration: 1000
        })
        this.dialogFormVisible = false
        this.$bus.$emit('load', true)
      } else {
        this.$message({
          message: res.msg,
          type: 'error',
          duration: 1000
        })
      }
    },
    // 修改仪器
    async update() {
      let res = await this.$API.API.modifyYiQi(this.addForm)
      if (res.code == 1) {
        this.$message({
          message: res.data,
          type: 'success',
          duration: 1000
        })
        this.dialogFormVisible = false
        this.$bus.$emit('load', true)
      } else {
        this.$message({
          message: res.msg,
          type: 'error',
          duration: 1000
        })
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {},
    handleSuccess(response, file, fileList) {
      this.addForm.yiqitupian = response.data.fileName
    }
  }
}
</script>

<style>
</style>