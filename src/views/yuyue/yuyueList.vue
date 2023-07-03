<template>
  <tr class="table_contion">
    <td class="xuhao">{{ yuyueList.yiqiDto.id }}</td>
    <td class="xinxi">
      <div class="yiqi_img">
        <img src="" alt="">
      </div>
      <div class="yiqi">
        <h1>{{ yuyueList.yiqiDto.yiqiming }}</h1>
        <dl>
          <dd>
            <span>仪器型号:</span>
            <span class="w">{{ yuyueList.yiqiDto.yiqixinghao }}</span>
          </dd>
          <dd>
            <span>所属系:</span>
            <span class="w">{{ yuyueList.yiqiDto.xiName }}</span>
          </dd>
          <dd>
            <span>放置位置:</span>
            <span class="w">{{ yuyueList.yiqiDto.yiqididian }}</span>
          </dd>
        </dl>
      </div>
    </td>
    <td class="jie">{{ yuyueList.yiqiDto.userId }}</td>
    <td class="fuzeren">{{ yuyueList.yiqiDto.fuzeren }}</td>
    <td class="time">
      <div>{{ yuyueList.yuyueshijian }} 至 {{ yuyueList.jieshushijian }}</div>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'yuyueList',
  props: ['yuyueList']
}
</script>

<style>
</style>