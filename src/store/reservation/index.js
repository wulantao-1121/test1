import { Details, yuyuetime, yuyue } from '@/api/index'
const state = {
  yuyueDetails: {},
  yuyuetime: [],
  tishi: []
}
const mutations = {
  YUYUEDETAILS(state, yuyueDetails) {
    state.yuyueDetails = yuyueDetails
  },
  YUYUETIME(state, yuyuetime) {
    state.yuyuetime = []
    for (let key in yuyuetime) {
      if (yuyuetime.hasOwnProperty(key)) {
        for (var i = 0; i < yuyuetime[key].length; i++) {
          state.yuyuetime.push(yuyuetime[key][i])
        }
      }
    }
  },
  TISHI(state, tishi) {
    state.tishi = tishi
  },
  clearData(state) {
    state.yuyueDetails = {}
    state.yuyuetime = {}
  }
}
const actions = {
  // 预约
  async yuyue({ commit }, params) {
    let res = await yuyue(params)
    if (res.code == 1) {
      return 'ok'
    }
  },
  // 预约时间回显
  async yuyuetime({ commit }, params) {
    let res = await yuyuetime(params)
    if (res.code == 1) {
      commit('YUYUETIME', res.data)
      commit('YUYUEDETAILS', res.data)
    }
  }
}
const getters = {
  Details(state) {
    return state.yuyueDetails.yiqiDto || {}
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
