//search 仓库
import { search } from '@/api/index'
const state = {
  searchList: {}
}
const mutations = {
  SEARCH(state, searchList) {
    for (let index = 0; index < searchList.length; index++) {
      searchList[index].addtime = searchList[index].addtime.replace('T', ' ')
    }
    state.searchList = searchList
  }
}
const actions = {
  async getSrarch({ commit }, params = {}) {
    let res = await search(params)

    if (res.code == 1) {
      commit('SEARCH', res.data)
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
