<template>
  <li class="yiqi_li">
    <div class="yiqi_img"></div>
    <div class="yiqi_content">
      <h1><a @click="$router.push('/yiqi/details')">全数字化核磁共振仪</a></h1>
      <dl>
        <dd>
          <span>仪器分类:</span>
          样品处理
        </dd>
        <dd>
          <span>仪器型号:</span>
          AVⅢ-400M
        </dd>
        <dd>
          <span>所属系:</span>
          软件与大数据系
        </dd>
        <dd>
          <span>放置位置:</span>
          1号教学楼906
        </dd>
      </dl>
    </div>
  </li>
</template>

<script>
export default {
  name: 'yiqiList'
}
</script>

<style>
</style>