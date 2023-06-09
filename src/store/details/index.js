//details 仓库
import { Details, addCollect, viewCollect, deleteCollect } from '@/api/index'

const state = {
  details: {},
  viewcollect: {}
}
const mutations = {
  DETAILS(state, details) {
    state.details = details
  },
  VIEWCOLLECT(state, viewcollect) {
    state.viewcollect = viewcollect
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
  },
  // 收藏
  async Collect({ commit }, params) {
    let res = await addCollect(params)
    if (res.code == 1) {
      return 'ok'
    }
  },
  // 查看是否收藏
  async viewCollect({ commit }, params) {
    let res = await viewCollect(params)
    if (res.code == 1) {
      commit('VIEWCOLLECT', res.code)
    } else {
      commit('VIEWCOLLECT', res.code)
    }
  },
  // 取消收藏
  async deleteCollect({ commit }, params) {
    let res = await deleteCollect(params)
    if (res.code == 1) {
      commit('VIEWCOLLECT', 0)
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
