//yiqi 仓库
import { yiqiList, yiqiXi } from '@/api'
const state = {
  // 仪器列表的数据
  yiqiList: [],
  yiqiXi: []
}
const mutations = {
  YIQILIST(state, yiqiList) {
    state.yiqiList = yiqiList
  },
  YIQIXI(state, yiqiXi) {
    state.yiqiXi = yiqiXi
  }
}
const actions = {
  async yiqiList({ commit }, params = {}) {
    let res = await yiqiList(params)
    commit('YIQILIST', res.data)
  },
  // 仪器ss
  async yiqiXi({ commit }) {
    let res = await yiqiXi()
    if (res.code == 1) {
      commit('YIQIXI', res.data)
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
