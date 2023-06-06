//synopsis 仓库
import { getSynopsis } from '@/api/index'
const state = {
  synopsisList: []
}
const mutations = {
  SYNOPSIS(state, synopsisList) {
    state.synopsisList = synopsisList
  }
}
const actions = {
  async getSynopsis({ commit }) {
    let res = await getSynopsis()
    if (res.code == 1) {
      commit('SYNOPSIS', res.data)
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
