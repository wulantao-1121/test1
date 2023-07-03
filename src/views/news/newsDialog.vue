<template>
  <el-dialog title="新增新闻" :visible.sync="dialogFormVisible" width="1200px">
    <el-form :model="formNews" class="news_form">
      <el-form-item label="新闻标题" class="news_title">
        <el-input v-model="formNews.biaoti" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="撰稿人" class="news_author">
        <el-input v-model="formNews.fabuzhe" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="发布时间" class="news_time">
        <el-date-picker v-model="formNews.addtime" type="date" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-ddTHH:mm:ss" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <div style="border: 1px solid #ccc; width:1200px" class="editor">
        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :defaultConfig="toolbarConfig" :mode="mode" />
        <Editor style="height: 500px; overflow-y: hidden;" v-model="formNews.neirong" :defaultConfig="editorConfig" :mode="mode" @onCreated="onCreated" />
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="addNewsForm">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default {
  name: 'newsDialog',
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
      // dialogVisible: false,
      // disabled: true,
      dialogFormVisible: false,
      fullscreen: true,
      formNews: {
        biaoti: '',
        fabuzhe: '',
        addtime: '',
        neirong: '',
        leixing: 1,
        dianjilv: '1213'
      },
      editor: null,
      toolbarConfig: {
        toolbarKeys: [
          'headerSelect',
          'blockquote',
          '|',
          'bold',
          'underline',
          'italic',
          {
            key: 'group-more-style',
            title: '更多',
            iconSvg:
              '<svg viewBox="0 0 1024 1024"><path d="M204.8 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path><path d="M505.6 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path><path d="M806.4 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path></svg>',
            menuKeys: ['through', 'code', 'sup', 'sub', 'clearStyle']
          },
          'color',
          'bgColor',
          '|',
          'fontSize',
          'fontFamily',
          'lineHeight',
          '|',
          'bulletedList',
          'numberedList',
          {
            iconSvg: '<svg viewBox="0 0 1024 1024"><path d="M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>',
            key: 'group-justify',
            menuKeys: ['justifyLeft', 'justifyRight', 'justifyCenter', 'justifyJustify'],
            title: '对齐'
          },
          {
            iconSvg: '<svg viewBox="0 0 1024 1024"><path d="M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m0-128V320l256 192z"></path></svg>',
            key: 'group-indent',
            menuKeys: ['indent', 'delIndent'],
            title: '缩进'
          },
          '|',
          'insertLink',
          {
            iconSvg:
              '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>',
            key: 'group-image',
            menuKeys: ['uploadImage'],
            title: '图片'
          },
          'insertTable',
          'divider',
          '|',
          'undo',
          'redo'
        ]
      },
      editorConfig: {
        placeholder: '请输入内容...',
        MENU_CONF: {
          uploadImage: {
            customUpload: handleUpload
          }
        }
      },
      mode: 'default' // or 'simple'
    }
  },
  beforeCreate() {
    this.$bus.$off('addNews')
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
    },
    // 新增新闻请求
    async addNewsForm() {
      let res = await this.$API.API.addNews(this.formNews)
      console.log(res)
      if (res.code == 1) {
        this.$message({
          message: '新增新闻成功',
          type: 'success',
          duration: 1000
        })
        this.dialogFormVisible = false
        this.$bus.$emit('addNewsInfo', true)
      } else {
        this.$message({
          message: '新增新闻失败',
          type: 'error',
          duration: 1000
        })
      }
    }
  },
  mounted() {
    let addDialog = value => {
      this.formNews = { leixing: 1 }
      this.dialogFormVisible = value
    }
    this.$bus.$on('addNews', addDialog)
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