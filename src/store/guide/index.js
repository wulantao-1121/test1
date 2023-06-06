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
  async getGuide({ commit }) {
    let res = await getGuide()
    console.log(res)
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
