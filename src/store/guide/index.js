//guide仓库
import { getGuide } from '@/api/index'
const state = {
  guide: []
}
const mutations = {
  GUIDE(state, guide) {
    state.guide = guide
  }
}
const actions = {
  async getGuide({ commit }, params) {
    let res = await getGuide(params)
    if (res.code == 1) {
      commit('GUIDE', res.data)
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
