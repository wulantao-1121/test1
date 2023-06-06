<template>
  <li class="grxx_yiqi_li">
    <div class="grxx_yiqi_img">
      <img class="" src="" alt="" />
    </div>
    <div class="grxx_yiqi_xiangqing">
      <h1 class="grxx_yiqi_h1"><a href="javascript:;">{{ enjoy.yiqiming }}</a></h1>
      <div class="grxx_yiqi_neirong">
        <dl>
          <dd>仪器分类：<span>{{ enjoy.yiqifenleiName }}</span></dd>
          <dd>仪器型号：<span>{{enjoy.yiqixinghao  }}</span></dd>
          <dd>所属系：<span>{{ enjoy.xiName }}</span></dd>
          <dd>放置位置：<span>{{ enjoy.yiqididian }}</span></dd>
        </dl>
        <div class="grxx_yiqi_share">
          <el-button type="primary" class="grxx_yiqi_xiugai" @click="xiugaishow">修改</el-button>
          <el-button type="danger" class="grxx_yiqi_shanchu"> 删除</el-button>
          <el-button type="success" class="grxx_yiqi_weixiu">维修</el-button>
          <el-button type="warning" class="grxx_yiqi_quxiaoweixiu">取消维修</el-button>
        </div>
      </div>
    </div>
    <el-dialog title="新增仪器" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="form">
        <el-form-item label="仪器名称" :label-width="formLabelWidth" width="50%">
          <el-input v-model="form.yiqiming" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="仪器型号" :label-width="formLabelWidth">
          <el-input v-model="form.yiqixinghao" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="仪器分类" :label-width="formLabelWidth">
          <el-select v-model="form.yiqifenleiId" placeholder="所在系">
            <el-option label="分类1" :value=1></el-option>
            <el-option label="分类2" :value=2></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责人" :label-width="formLabelWidth">
          <el-input v-model="form.fuzeren" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="负责人电话" :label-width="formLabelWidth">
          <el-input v-model="form.fuzerendianhua" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.lianxiyouxiang" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属品牌" :label-width="formLabelWidth">
          <el-input v-model="form.yiqipinpai" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="放置地点" :label-width="formLabelWidth">
          <el-input v-model="form.yiqididian" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所在系" :label-width="formLabelWidth">
          <el-select v-model="form.xiId" placeholder="所在系">
            <el-option label="软件与大数据" :value=1></el-option>
            <el-option label="电子与通信系" :value=2></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="主要功能与特色" class="gongnengtese" prop="desc">
          <el-input type="textarea" v-model="form.gongnengtese"></el-input>
        </el-form-item>
        <el-form-item label="主要附件与配置" class="fujianpeizhi" prop="desc">
          <el-input type="textarea" v-model="form.fujianpeizhi"></el-input>
        </el-form-item>
        <el-form-item label="安全使用注意事项" class="zhuyishixiang" prop="desc">
          <el-input type="textarea" v-model="form.zhuyishixiang"></el-input>
        </el-form-item>
        <el-form-item label="主要规格" class="zhuyishixiang" prop="desc">
          <el-input type="textarea" v-model="form.guige"></el-input>
        </el-form-item>
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-success="success">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </li>
</template>

<script>
import '@/assets/css/my.less'
import { mapState } from 'vuex'
export default {
  name: 'enjoyList',
  props: ['enjoy'],
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      dialogFormVisible: false,
      formLabelWidth: '120px'
      // form: {
      //   yiqiming: '1231', //仪器名
      //   xiId: '', //系
      //   yiqixinghao: '', //仪器型号
      //   fuzeren: '', //负责人
      //   gongnengtese: '', //功能特色
      //   fujianpeizhi: '', //附件
      //   zhuyishixiang: '', //注意事项
      //   yiqitupian: 'E:\\1667538806115.jpg', //仪器图片
      //   yiqifenleiId: '', //仪器分类
      //   guige: '', //规格
      //   yiqididian: '', //仪器地点
      //   yiqipinpai: '', //仪器品牌
      //   lianxiyouxiang: '', //联系电话
      //   fuzeren: '', //负责人
      //   fuzerendianhua: '', //负责人电话
      //   lianxiyouxiang: ''
      // }
    }
  },
  computed: {
    ...mapState({
      form: state => state.enjoy.form
    })
  },
  methods: {
    // 修改仪器
    xiugaishow() {
      this.dialogFormVisible = true
      this.$store.dispatch('HuiXian', this.enjoy.id)
    },

    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      console.log(file.url)
    },
    success(response, file, fileList) {
      this.form.yiqitupian = file.url
    }
  }
}
</script>

<style>
</style>