//yiqi 仓库
import { yiqiList, yiqiXi, yiqiFenlei, yiqiSearch } from '@/api'
const state = {
  // 仪器列表的数据
  yiqiList: [],
  yiqiXi: [],
  yiqiFenLei: []
}
const mutations = {
  YIQILIST(state, yiqiList) {
    state.yiqiList = yiqiList
  },
  YIQIXI(state, yiqiXi) {
    state.yiqiXi = yiqiXi
  },
  YIQIFENLEI(state, yiqiFenLei) {
    state.yiqiFenLei = yiqiFenLei
  }
}
const actions = {
  async yiqiList({ commit }, params = {}) {
    let res = await yiqiList(params)
    commit('YIQILIST', res.data)
  },
  // 仪器搜索系
  async yiqiXi({ commit }) {
    let res = await yiqiXi()
    if (res.code == 1) {
      commit('YIQIXI', res.data)
    }
  },
  // 仪器搜索分类
  async yiqiFenlei({ commit }) {
    let res = await yiqiFenlei()
    if (res.code == 1) {
      commit('YIQIFENLEI', res.data)
    }
  },
  // 仪器搜索
  async yiqiSearch({ commit }, params) {
    let res = await yiqiSearch(params)
    if (res.code == 1) {
      commit('YIQILIST', res.data)
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
