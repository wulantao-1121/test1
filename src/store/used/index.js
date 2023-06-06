import { shiyongState } from '@/api'
const state = {
  yishiyongList: {},
  weishiyongList: {},
  shiyongzhongList: {}
}
const mutations = {
  YISHIYONG(state, yishiyongList) {
    state.yishiyongList = yishiyongList
  },
  WEISHIYONG(state, weishiyongList) {
    state.weishiyongList = weishiyongList
  },
  SHIYONGZHONG(state, shiyongzhongList) {
    state.shiyongzhongList = shiyongzhongList
  }
}
const actions = {
  // 已使用请求
  async yishiyong({ commit }, params) {
    let res = await shiyongState(params)
    if (res.code == 1) {
      commit('YISHIYONG', res.data)
    }
  },
  // 未使用请求
  async weishiyong({ commit }, params) {
    let res = await shiyongState(params)
    if (res.code == 1) {
      commit('WEISHIYONG', res.data)
    }
  },
  // 使用中
  async shiyongzhong({ commit }, params) {
    let res = await shiyongState(params)
    if (res.code == 1) {
      commit('SHIYONGZHONG', res.data)
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
