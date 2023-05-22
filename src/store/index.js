//
import Vue from 'vue'
import Vuex from 'vuex'
// 需要使用插件
Vue.use(Vuex)
// state:仓库存储数据的地方
// 对外暴露store实例
const state = {}
// mutations:修改state唯一手段
const mutations = {}
// actions:处理actions,可以书写自己的业务逻辑,处理异步
const actions = {}
// getters:理解为计算属性,简化仓库数据,组件获取仓库数据更加方便
const getters = {}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
