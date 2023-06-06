import { article, getHots } from '@/api'

//notice 仓库
const state = {
  noticeList: {},
  hot: {}
}
const mutations = {
  NOTICE(state, noticeList) {
    state.noticeList = noticeList
  },
  HOT(state, hot) {
    state.hot = hot
  }
}
const actions = {
  async notice({ commit }, params = {}) {
    let res = await article(params)
    if (res.code == 1) {
      commit('NOTICE', res.data)
    }
  },
  async hot({ commit }, params = {}) {
    let res = await getHots(params)
    if (res.code == 1) {
      commit('HOT', res.data)
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
