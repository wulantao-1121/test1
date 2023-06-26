import { newsDateils } from '@/api'
//newsDateils 仓库
const state = {
  noticeDateils: {}
}
const mutations = {
  NOTICEDATEILS(state, noticeDateils) {
    noticeDateils.addtime = noticeDateils.addtime.replace('T', ' ')
    state.noticeDateils = noticeDateils
  },
  clearData(state) {
    state.noticeDateils = {}
  }
}
const actions = {
  async getNoticeDateils({ commit }, params = {}) {
    let res = await newsDateils(params)
    if (res.code == 1) {
      commit('NOTICEDATEILS', res.data)
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
