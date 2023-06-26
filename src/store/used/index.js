import { shiyongState, deleteYuYue } from '@/api'
const state = {
  yishiyongList: {},
  weishiyongList: {},
  shiyongzhongList: {}
}
const mutations = {
  YISHIYONG(state, yishiyongList) {
    for (let i = 0; i < yishiyongList.records.length; i++) {
      yishiyongList.records[i].jieshushijian = yishiyongList.records[i].jieshushijian.replace('T', ' ')
      yishiyongList.records[i].yuyueshijian = yishiyongList.records[i].yuyueshijian.replace('T', ' ')
    }
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
  },
  // 未使用的取消预约
  async deleteYuYue({ commit }, params) {
    let res = await deleteYuYue(params)
    if (res.code == 1) {
      return 'ok'
    } else {
      return Promise.reject(new Error('取消预约失败'))
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
