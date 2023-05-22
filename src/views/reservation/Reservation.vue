<template>
  <!-- 预约主体 -->
  <div class="reservation" id="app">
    <!-- 面包屑 -->
    <div id="crumbs">
      <el-breadcrumb separator>
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><router-link to="/yiqi">仪器列表</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><router-link to="/yiqi/details">仪器详情</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">预约信息</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="yuyue_content">
      <div class="yuyue_xinxi">
        <table class="yuyue_xinxi_table">
          <tbody>
            <tr>
              <th>仪器名称：</th>
              <td>全数字化核磁共振</td>
            </tr>
            <tr>
              <th>管理员：</th>
              <td>王老师</td>
            </tr>
            <tr>
              <th>规格/型号：</th>
              <td>AutoPurification TM</td>
            </tr>
            <tr>
              <th>联系方式：</th>
              <td>15566667777</td>
            </tr>
            <tr>
              <th>所属系：</th>
              <td>软件与大数据系</td>
            </tr>
            <tr>
              <th>放置地点：</th>
              <td>2号楼906室</td>
            </tr>
          </tbody>
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
          <el-calendar v-model="value"></el-calendar>
          <div class="yiqi_yuyue_time">
            <el-date-picker v-model="value1" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
          </div>
          <div class="yiqi_yuyue_box">
            <button class="yiqi_yuyue_time_btn" type="submit">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/reservation.css'
export default {
  name: 'Reservation',
  data() {
    return {
      value: new Date(),
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value1: [new Date(), new Date()],
      value2: ''
    }
  }
}
</script>

<style>
</style>