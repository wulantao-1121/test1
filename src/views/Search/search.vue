<template>
  <div class="search_container">
    <div id="crumbs">
      <el-breadcrumb separator>
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">搜索</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="search">
      <SearchList :searchList="search" v-if="this.isShow"></SearchList>
      <div class="not" v-else>
        <h1>没有相关的文章</h1>
      </div>
    </div>
  </div>
</template>

<script>
import SearchList from '@/views/Search/search_list.vue'
import { mapState } from 'vuex'
export default {
  name: 'search',
  components: {
    SearchList
  },
  data() {
    return {
      searchLength: '',
      isShow: true
    }
  },
  mounted() {
    this.$store.dispatch('getSrarch', this.$route.params)
  },
  updated() {
    this.searchLength = this.$store.state.search.searchList.length
    if (this.searchLength > 0) {
      this.isShow = true
    } else {
      this.isShow = false
    }
  },
  computed: {
    ...mapState({
      search: state => state.search.searchList
    })
  },
  watch: {
    $route(newValue, oldValue) {
      this.$store.dispatch('getSrarch', this.$route.params)
    }
  }
}
</script>

<style lang="less" scoped>
.search_container {
  width: 100%;
  .search {
    margin: auto;
    width: 1200px;
    .not {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 500px;
      h1 {
        font-size: 50px;
        font-weight: 300;
      }
    }
  }
}
</style>