<template>
  <!-- 仪器详情主体 -->
  <div class="details">
    <!-- 面包屑 -->
    <div id="crumbs">
      <el-breadcrumb separator>
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><router-link to="/yiqi">仪器列表</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">仪器详情</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="kong"></div>
    <div class="yiqi_details_content">
      <div class="yiqi_details">
        <div class="yiqi_details_img">
          <img src="" alt="" />
        </div>
        <div class="yiqi_details_parameter">
          <h1>全数字化核磁共振</h1>
          <div class="yiqi_tongji">
            <div class="yiqi_num">
              <span class="number">0</span>
              <span class="number_text">总次数</span>
            </div>
            <div class="yiqi_hours">
              <span class="hours">0</span>
              <span class="hours_text">总时长</span>
            </div>
            <div class="yiqi_collectors">
              <span class="collectors">0</span>
              <span class="collectors_text">总时长</span>
            </div>
          </div>
          <dl>
            <dd>设备型号: <span>AutoPurification TM</span></dd>
            <dd>放置位置: <span>2号楼906室</span></dd>
            <dd>运行状态: <span class="gongxaing">可共享</span></dd>
            <dd>负责人: <span>xxx 15566669999</span></dd>
            <dd>使用状态: <span class="shiyong">使用中</span></dd>
          </dl>
          <div class="yuyue_shoucang">
            <button type="submit" class="yuyue_btn" @click="$router.push('/yiqi/details/reservation')">立即预约</button>
            <div class="collect">
              <span class="collect_img">
                <img src="@/assets/images/收藏.png" alt="" />
              </span>
              <span class="collect_text">收藏</span>
            </div>
          </div>
        </div>
      </div>
      <div class="yiqi_xinxi">
        <!-- 主要信息 -->
        <div class="yiqi_info">
          <h1>主要信息</h1>
          <dl>
            <dd>所属单位：<span>软件与大数据系</span></dd>
            <dd>联系邮箱：<span>88112321@qq.com</span></dd>
            <dd>厂家：<span>谢谢谢谢谢谢</span></dd>
            <dd>所属品牌：<span>戴尔</span></dd>
          </dl>
        </div>
        <!-- 主要功能及特色 -->
        <div class="yiqi_function">
          <h1>主要功能及特色</h1>
          <p>
            主要功能及应用范围 •测定液体的各种样品的高分辨核磁共振波谱，以获取各种分子水平的结构信息。
            •适于化学、生物、医药、石油化工等领域的物质鉴定，结构分析，化学反应机理测定，动力学研究等，也直接应用于生产开发及质量控制分析。
          </p>
        </div>
        <!-- 主要规格及技术指标 -->
        <div class="yiqi_guige">
          <h1>主要规格及技术指标</h1>
          <p>1750℃（TG/TG-DTA） 1600℃（TG-DSC）。</p>
          <p>1750℃（TG/TG-DTA） 1600℃（TG-DSC）。</p>
        </div>
        <!-- 主要附件及配置 -->
        <div class="yiqi_fujian">
          <h1>主要附件及配置</h1>
        </div>
        <!-- 安全使用注意事项 -->
        <div class="yiqi_anquan">
          <h1>安全使用注意事项</h1>
          <p>使用时请在老师的教学下完成</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/details.css'
import { RouterLink } from 'vue-router'
export default {
  name: 'Details',
  components: { RouterLink }
}
</script>

<style>
</style>