import { article, getHots } from '@/api'

//news 仓库
const state = {
  news: {},
  hot: {}
}
const mutations = {
  NEWS(state, news) {
    state.news = news
  },
  HOT(state, hot) {
    state.hot = hot
  }
}
const actions = {
  async news({ commit }, params = {}) {
    let res = await article(params)
    if (res.code == 1) {
      commit('NEWS', res.data)
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
