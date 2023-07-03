<template>
  <el-dialog title="新增规章指南" :visible.sync="dialogFormVisible">
    <el-form :model="formGuiZhang" class="news_form">
      <el-form-item label="规章标题" class="news_title">
        <el-input v-model="formGuiZhang.biaoti" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="撰稿人" class="news_author">
        <el-input v-model="formGuiZhang.fabuzhe" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="发布时间" class="news_time">
        <el-date-picker v-model="formGuiZhang.addtime" type="date" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-ddTHH:mm:ss" placeholder="选择日期"> </el-date-picker>
      </el-form-item>
      <div style="border: 1px solid #ccc; width: 100%" class="editor">
        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :defaultConfig="toolbarConfig" :mode="mode" />
        <Editor style="height: 500px; overflow-y: hidden" v-model="formGuiZhang.neirong" :defaultConfig="editorConfig" :mode="mode" @onCreated="onCreated" />
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="addGuiZhuangForm">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default {
  name: 'guizhangDialog',
  components: {
    Editor,
    Toolbar
  },
  data() {
    // 富文本图片上传
    const handleUpload = async (file, insertFn) => {
      let form = new FormData()
      form.append('file', file)
      let res = await this.$API.API.img(form)
      insertFn(`${res.data.fileUrl}`, '', `${res.data.fileUrl}`)
    }
    return {
      dialogFormVisible: false,
      fullscreen: true,
      formGuiZhang: {
        biaoti: '',
        fabuzhe: '',
        addtime: '',
        neirong: '',
        leixing: 3,
        dianjilv: '1213'
      },
      editor: null,
      toolbarConfig: {},
      editorConfig: {
        placeholder: '请输入内容...',
        MENU_CONF: {
          uploadImage: {
            customUpload: handleUpload
          }
        }
      },
      mode: 'default', // or 'simple'
      guizhang: {
        page: 1,
        pageSize: 10,
        leixing: 3
      }
    }
  },
  beforeCreate() {
    this.$bus.$off('addGuiZhang')
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
    },
    async addGuiZhuangForm() {
      let res = await this.$API.API.addNews(this.formGuiZhang)
      if (res.code == 1) {
        this.$message({
          message: '添加成功',
          type: 'success',
          duration: 1000
        })
        this.$bus.$emit('getGuiZhang', true)
        this.dialogFormVisible = false
      } else {
        this.$message({
          message: '添加失败',
          type: 'error',
          duration: 1000
        })
      }
    }
  },
  mounted() {
    this.$bus.$on('addGuiZhang', value => {
      this.formGuiZhang = { leixing: 3 }
      this.dialogFormVisible = value
    })
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁编辑器
  }
}
</script>

<style lang="less" scoped>
.el-dialog__wrapper {
  .el-dialog {
    .el-dialog__body {
      .news_form {
        .news_title {
          width: 100%;
          margin: 10px 0;
          /deep/.el-form-item__content {
            display: flex;
            .el-input {
              width: 100%;
            }
          }
        }
        .news_time,
        .news_author {
          margin: 10px 0;
          display: flex;
          width: 100%;
        }
        .editor {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
