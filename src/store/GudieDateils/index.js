import { newsDateils } from '@/api'
//gudieDateils 仓库
const state = {
  gudieDateils: {}
}
const mutations = {
  GUDIEDATEILS(state, gudieDateils) {
    gudieDateils.addtime = gudieDateils.addtime.replace('T', ' ')
    state.gudieDateils = gudieDateils
  },
  clearData(state) {
    state.gudieDateils = {}
  }
}
const actions = {
  async getGudieDateils({ commit }, params) {
    console.log(params)
    let res = await newsDateils(params)
    console.log(res)
    if (res.code == 1) {
      commit('GUDIEDATEILS', res.data)
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
