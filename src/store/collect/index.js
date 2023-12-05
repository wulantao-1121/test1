import { getCollecr } from '@/api/index'

const state = {
  collectList: []
}
const mutations = {
  COLLECT(state, collectList) {
    state.collectList = collectList
  }
}
const actions = {
  async getCollecr({ commit }, params) {
    let res = await getCollecr(params)
    if (res.code == 1) {
      commit('COLLECT', res.data)
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
