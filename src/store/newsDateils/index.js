import { newsDateils } from '@/api'
//newsDateils 仓库
const state = {
  newsDateils: {}
}
const mutations = {
  NEWSDATEILS(state, newsDateils) {
    newsDateils.addtime = newsDateils.addtime.replace('T', ' ')
    state.newsDateils = newsDateils
  },
  clearData(state) {
    state.newsDateils = {}
  }
}
const actions = {
  async getNewsDateils({ commit }, params = {}) {
    let res = await newsDateils(params)
    if (res.code == 1) {
      commit('NEWSDATEILS', res.data)
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
