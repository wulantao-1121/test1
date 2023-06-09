<template>
  <div class="right_sidebar">
    <div class="right_header">
      <div class="right_title">
        <div class="right_collect"><a href="javascript:;">我的共享</a></div>
      </div>
      <div class="xinzeng">
        <p class="yifabu">已发布仪器</p>
        <el-button type="primary" class="yiqi_tianjia" @click="add">添加</el-button>
      </div>
    </div>
    <div>
      <div class="grxx_yiqi_list top">
        <ul class="grxx_yiqi_ul">
          <enjoyList v-for="item in enjoyList.records" :key="item.id" :enjoy="item"></enjoyList>
        </ul>
      </div>
      <Page :total="enjoyList.total" :pageSize="enjoyList.size" :currentPage='parseInt($route.query.page)' @getPage="getPage"></Page>
    </div>
    <dialogShow :isShow="1"></dialogShow>
  </div>
</template>

<script>
import '@/assets/css/my.less'
import enjoyList from './enjoyList.vue'
import { mapState } from 'vuex'
import dialogShow from './dialogShow.vue'
export default {
  name: 'enjoy',
  data() {
    return {
      enjoy: {
        page: 1,
        pageSize: 6,
        isUser: '11'
      },
      addForm: {
        id: '',
        yiqiming: '', //仪器名
        xiId: '', //系
        yiqixinghao: '', //仪器型号
        fuzeren: '', //负责人
        gongnengtese: '', //功能特色
        fujianpeizhi: '', //附件
        zhuyishixiang: '', //注意事项
        yiqitupian: '', //仪器图片
        yiqifenleiId: '', //仪器分类
        guige: '', //规格
        yiqididian: '', //仪器地点
        yiqipinpai: '', //仪器品牌
        lianxiyouxiang: '', //联系电话
        fuzeren: '', //负责人
        fuzerendianhua: '', //负责人电话
        lianxiyouxiang: ''
      }
    }
  },
  components: {
    enjoyList,
    dialogShow
  },

  mounted() {
    this.enjoy.page = this.$route.query.page || 1
    this.enjoy.pageSize = this.$route.query.pageSize || 6
    this.getEnjoyData()
    this.$bus.$on('delete', value => {
      if (value === 0) {
        this.getEnjoyData()
      }
    })
  },
  methods: {
    getEnjoyData() {
      this.$store.dispatch('getEnjoy', this.enjoy)
    },
    getPage(index) {
      this.enjoy.page = index
      this.$router.push({ name: 'enjoy', query: { page: this.enjoy.page, pageSize: this.enjoy.pageSize } })
      this.getEnjoyData()
    },
    add() {
      this.$bus.$emit('add', 0)
    }
  },

  computed: {
    ...mapState({
      enjoyList: state => state.enjoy.enjoyList
    })
  }
}
</script>

<style>
</style>