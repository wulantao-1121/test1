<template>
  <!-- 预约主体 -->
  <div class="reservation" id="app">
    <!-- 面包屑 -->
    <div id="crumbs">
      <el-breadcrumb separator>
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><a @click="$router.push(`/yiqi/page?page=${yiqiPage||1}&pageSize=10`)">仪器列表</a></el-breadcrumb-item>
        <el-breadcrumb-item><a @click="$router.push(`/yiqi/details/${detailsPage}`)">仪器详情</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">预约信息</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="yuyue_content">
      <div class="yuyue_xinxi">
        <table class="yuyue_xinxi_table">
          <tbody>
            <tr>
              <th>仪器名称：</th>
              <td>{{ Details.yiqiming }}</td>
            </tr>
            <tr>
              <th>管理员：</th>
              <td>{{ Details.fuzeren }}</td>
            </tr>
            <tr>
              <th>规格/型号：</th>
              <td>{{ Details.yiqixinghao }}</td>
            </tr>
            <tr>
              <th>联系方式：</th>
              <td>{{ Details.fuzerendianhua }}</td>
            </tr>
            <tr>
              <th>所属系：</th>
              <td>{{ Details.xiName }}</td>
            </tr>
            <tr>
              <th>放置地点：</th>
              <td>{{ Details.yiqididian }}</td>
            </tr>
          </tbody>
          <div class="yuyuePrompt">
            <span>注意：预约完成之后请跟仪器管理员联系</span>
          </div>
        </table>

        <div class="yuyue_state">
          <h1>预约</h1>
          <div class="state">
            <span class="empty">未预约</span>
            <span class="notfull">预约未满</span>
            <span class="full">预约已满</span>
          </div>
        </div>
        <!-- 预约日历 -->
        <div class="yuyue_data">
          <el-calendar>
            <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
            <!-- 用的是elementUI的Calendar日历组件 -->
            <template slot="dateCell" slot-scope="{data}">
              <div ref="tishi" class="tishi">{{ data.day.split('-').slice(1).join('-') }}</div>
              <!-- 遍历日期 -->
              <div v-for="(item,index) in getTime" :key="index" ref="boxred">
                <div v-if="data.day===item.stime.slice(0,10)" ref="time">
                  <!-- 这是判断日历组件每一个日期是否预约满了，如果满了是红色，如果不满是黄色 -->
                  <div v-if="item.isRed==true" ref="red"></div>
                  <div v-if="item.isRed==false" ref="orange"></div>
                  <!-- 用的是elementUI的Popover弹出框组件 -->
                  <el-popover placement="top" title="预约时间" width="290" trigger="hover" :content="tishiTimeShow">
                    <div class="prompt" slot="reference">
                    </div>
                  </el-popover>
                </div>
              </div>
            </template>
          </el-calendar>
          <div class="yiqi_yuyue_time">
            <el-date-picker v-model="value1" type="datetimerange" value-format="yyyy-MM-ddTHH:mm:ss" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
          </div>
          <div class="yiqi_yuyue_box">
            <button class="yiqi_yuyue_time_btn" type="submit" @click="yuyueSubmit">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/reservation.less'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Reservation',
  props: ['yuyuedetails'],
  data() {
    return {
      visible: false,
      value: new Date(),
      value1: [new Date(), new Date()],
      yuyuetime: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        id: localStorage.getItem('yuyue')
      },
      yuyue: {
        yiqiId: '',
        yuyueshijian: '',
        jieshushijian: '',
        zhuangtai: 0
      },
      detailsPage: '',
      yiqiPage: '',
      ViewDate: '',
      tishiTimeShow: ''
    }
  },
  created() {
    this.$store.dispatch('yuyuetime', this.yuyuetime)
    this.detailsPage = localStorage.getItem('yuyue')
    this.yiqiPage = sessionStorage.getItem('yiqiPage')
  },
  methods: {
    // 获取所有的预约时间
    getDetailsVal() {
      this.$store.dispatch('yuyuetime', this.yuyuetime)
    },
    async yuyueSubmit() {
      try {
        this.yuyue.yiqiId = localStorage.getItem('yuyue')
        this.yuyue.yuyueshijian = this.value1[0]
        this.yuyue.jieshushijian = this.value1[1]
        await this.$store.dispatch('yuyue', this.yuyue)
        this.$message({
          message: '预约成功',
          type: 'success',
          duration: 500
        })
        this.getDetailsVal()
      } catch (error) {
        this.$message({
          message: '预约失败',
          type: 'error',
          duration: 500
        })
      }
    },
    $cleanup() {
      this.$store.commit('clearData')
    }
  },
  mounted() {
    let tiShiBtn = document.querySelectorAll('.current')
    let arr = ''
    // 把分割完的数据存在arrTime数组中
    let arrTime = []
    // 把分割完的数据进行substring截取，然后存在time数组中
    let time = []
    for (let i = 0; i < tiShiBtn.length; i++) {
      // 鼠标经过某个日期之后显示当前所有预约的时间区间
      tiShiBtn[i].addEventListener('mouseover', () => {
        // 鼠标经过某个日期的盒子拿到当前盒子里的日期
        var tishiDay = tiShiBtn[i].querySelector('.tishi').innerHTML
        // 对数据进行处理
        for (let i = 0; i < this.$store.state.reservation.yuyuetime.length; i++) {
          if (this.$store.state.reservation.yuyuetime[i].day == tishiDay.slice(3, 5)) {
            for (let key in this.$store.state.reservation.yuyuetime[i]) {
              arr += this.$store.state.reservation.yuyuetime[i][key] + ','
              // 把数据进行分割
              arrTime = arr
                .replace(/null/g, '')
                .replace(/false|true/g, '')
                .replace(/T|,/g, ' ')
                .split('  ')
            }
          }
        }
        // 把分割完的数据进行substring截取，然后存在time数组中
        for (let i = 0; i < arrTime.length; i++) {
          time.push(arrTime[i].substring(0, 39))
        }
        for (let i = 0; i < time.length; i++) {
          if (time[i].length == 39) {
            this.tishiTimeShow += time[i] + ' '
          }
        }
      })
      // 鼠标离开之后清空存在数组里面的数据
      tiShiBtn[i].addEventListener('mouseout', () => {
        arr = ''
        arrTime = []
        time = []
        this.tishiTimeShow = ''
      })
    }
    // 点击日历组件的上一个月
    let nextMonth = document.querySelector('.el-button-group').children[2]
    nextMonth.addEventListener('click', () => {
      this.yuyuetime.month += 1
      if (this.yuyuetime.month > 12) {
        this.yuyuetime.year += 1
        this.yuyuetime.month = 1
      }
      this.$store.dispatch('yuyuetime', this.yuyuetime)
    })
    // 点击日历组件的下一个月
    let upperMonth = document.querySelector('.el-button-group').children[0]
    upperMonth.addEventListener('click', () => {
      this.yuyuetime.month -= 1
      if (this.yuyuetime.month < 1) {
        this.yuyuetime.year -= 1
        this.yuyuetime.month = 12
      }
      this.$store.dispatch('yuyuetime', this.yuyuetime)
    })
    // 点击日历组件的当前月份
    let today = document.querySelector('.el-button-group').children[1]
    today.addEventListener('click', () => {
      this.yuyuetime.year = new Date().getFullYear()
      this.yuyuetime.month = new Date().getMonth() + 1
      this.$store.dispatch('yuyuetime', this.yuyuetime)
    })
    this.getDetailsVal()
  },
  updated() {
    if (this.$store.state.reservation.yuyuetime.length == 0) {
      this.$nextTick(() => {
        document.querySelectorAll('.el-calendar-day').forEach(day => {
          day.style.background = '#fff'
        })
      })
    }
    // 在没有预约时间的其它标签背景颜色改为白色
    let boxred = this.$refs.boxred.length
    for (let i = 0; i < this.$refs.boxred.length; i++) {
      if (this.$refs.boxred[i].children.length == 0) {
        this.$refs.boxred[i].parentElement.style.background = '#fff'
      }
    }
    //获取日历组件中red的属性的标签进行更改背景颜色为红色
    let red = this.$refs.red
    if (red) {
      for (let i = 0; i < red.length; i++) {
        red[i].parentElement.parentElement.parentElement.style.background = 'rgb(250, 60, 0)'
      }
    }
    // 获取日历组件中red的属性的标签进行更改背景颜色为黄色
    let orange = this.$refs.orange
    if (orange) {
      for (let j = 0; j < orange.length; j++) {
        orange[j].parentElement.parentElement.parentElement.style.background = 'rgb(250, 251, 100)'
      }
    }
  },
  computed: {
    ...mapGetters(['Details']),
    ...mapState({
      getTime: state => state.reservation.yuyuetime,
      tishiTime: state => state.reservation.tishiTime
    })
  },
  beforeDestroy() {
    this.$cleanup()
  }
}
</script>

<style lang="less" scoped>
</style>