//details 仓库
import { Details } from '@/api/index'

const state = {
  details: {}
}
const mutations = {
  DETAILS(state, details) {
    state.details = details
  },
  clearData(state) {
    state.details = {}
  }
}
const actions = {
  async details({ commit }, params) {
    let res = await Details(params)
    if (res.code == 1) {
      commit('DETAILS', res.data)
    }
  }
}
const getters = {
  yiqiDto(state) {
    return state.details.yiqiDto || {}
  },
  details(state) {
    return state.details || {}
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
