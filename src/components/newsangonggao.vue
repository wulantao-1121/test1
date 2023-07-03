<template>
  <div>
    <!-- <el-table-column prop="id" label="工号" width="120">
    </el-table-column>
    <el-table-column prop="biaoti" label="标题" width="400">
    </el-table-column>
    <el-table-column prop="neirong" label="新闻内容">
    </el-table-column>
    <el-table-column prop="fabuzhe" label="撰稿人" width="150">
    </el-table-column>
    <el-table-column prop="addtime" label="发布时间" width="200">
    </el-table-column>
    <el-table-column label="操作" width="200">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column> -->
  </div>

</template>

<script>
export default {
  // name: 'newsList',
  // data() {
  //   return {
  //     newsData: {
  //       page: 1,
  //       pageSize: 10,
  //       leixing: 1
  //     },
  //     tableData: []
  //   }
  // }
  // mounted() {
  //   this.getNews()
  // },
  // methods: {
  //   async getNews() {
  //     let res = await this.$API.API.newsNoticeManage(this.newsData)
  //     if (res.code == 1) {
  //       this.tableData = res.data.records
  //     }
  //     for (let i = 0; i < res.data.records.length; i++) {
  //       res.data.records[i].addtime = res.data.records[i].addtime.replace('T', ' ')
  //     }
  //   },
  //   handleEdit(index, row) {
  //     console.log(index, row)
  //   },
  //   handleDelete(index, row) {
  //     console.log(index, row)
  //   }
  // }
}
</script>

<style>
</style>