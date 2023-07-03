<template>
  <div class="right">
    <div class="ri-up">
      <p>视频上传</p>
    </div>
    <div class="ri-down">
      <el-form :model="videoForm" status-icon :rules="rules" ref="videoForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="仪器名" prop="yiqiname">
          <el-input type="text" v-model="videoForm.yiqiname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="仪器简介" prop="jianjie">
          <el-input type="textarea" autosize placeholder="请输入内容" v-model="videoForm.jianjie">
          </el-input>
        </el-form-item>
        <el-form-item label="仪器视频" prop="fileUrl" class="yiqiVideo">
          <!-- :on-success="handleSuccess" -->
          <el-upload class="upload-demo" action="/common/upload" :on-preview="handlePreview" :on-remove="handleRemove" :on-success="handleSuccess">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
          <div class="videoBox" v-show="this.videoForm.video">
            <video :src="this.videoForm.video" class="videoMain"></video>
          </div>
        </el-form-item>
        <el-form-item label="首页新闻照片" prop="newsImg" class="yiqiVideo">
          <el-upload class="upload-demo" action="/common/upload" :on-preview="newsImgPreview" :on-remove="newsImgRemove" :on-success="mewsImgSuccess">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
          <div class="newsImg" v-show="this.videoForm.xinwenimg">
            <img :src="this.videoForm.xinwenimg" alt="">
          </div>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="submitInfo('videoForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import '@/assets/css/index.less'
export default {
  name: 'Homevideo',
  data() {
    return {
      videoForm: {
        yiqiname: '',
        jianjie: '',
        video: '',
        xinwenimg: ''
      },

      rules: {
        yiqiname: [{ required: true, message: '请输入仪器名字', trigger: 'blur' }],
        jianjie: [{ required: true, message: '请输入仪器简介', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleRemove(file, fileList) {
      file.response.data = {}
      this.videoForm.video = ''
    },
    handlePreview(file) {
      console.log(file)
    },
    handleSuccess(response, file, fileList) {
      this.videoForm.video = response.data.fileUrl
    },
    newsImgPreview(file) {},
    newsImgRemove(file, fileList) {
      this.videoForm.xinwenimg = ''
    },
    mewsImgSuccess(response, file, fileList) {
      this.videoForm.xinwenimg = response.data.fileUrl
      console.log('照片', this.videoForm.xinwenimg)
    },

    submitInfo(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: '提交成功',
            type: 'success',
            duration: 1000
          })
          this.reqHomeImgVideo()
        } else {
          this.$message({
            message: '提交失败',
            type: 'error',
            duration: 1000
          })
          return false
        }
      })
    },
    // 回显要修改的首页仪器、简介、照片、视频
    async getImgVideo() {
      let res = await this.$API.API.getHomeImgVideo()
      if (res.code == 1) {
        this.videoForm = res.data
      }
    },
    async reqHomeImgVideo() {
      let res = await this.$API.API.updayeHomeImgVideo(this.videoForm)
      if (res.code == 1) {
        this.getImgVideo()
      }
    }
  },
  mounted() {
    this.getImgVideo()
  }
}
</script>

<style lang="less" scoped>
.ri-down {
  .el-form {
    .yiqiVideo {
      /deep/.el-form-item__content {
        .videoBox {
          margin-left: 10px;
          .videoMain {
            width: 300px;
          }
        }
        .newsImg {
          img {
            width: 300px;
          }
        }
        .upload-demo {
          .el-upload-list {
            width: 300px;
            .el-upload-list__item {
            }
          }
        }
      }
    }
    .btn {
      /deep/.el-form-item__content {
        margin-left: 20px !important;
      }
    }
  }
}
</style>