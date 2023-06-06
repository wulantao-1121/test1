//home 仓库
import { yiqizongshu, yiqiList, article } from '@/api/index'
const state = {
  homezongshu: [],
  homeList: [],
  article: {},
  notice: {}
}
const mutations = {
  HOMELIST(state, homezongshu) {
    state.homezongshu = homezongshu
  },
  YIQILIST(state, homeList) {
    state.homeList = homeList
  },
  ARTICLE(state, article) {
    state.article = article
  },
  NOTICE(state, notice) {
    state.notice = notice
  }
}
const actions = {
  // 首页统计
  async homeList({ commit }) {
    let res = await yiqizongshu()
    if (res.code == 1) {
      commit('HOMELIST', res.data)
    }
  },
  // 实时设备
  async yiqiList({ commit }, params = {}) {
    let res = await yiqiList(params)
    if (res.code == 1) {
      commit('YIQILIST', res.data)
    }
  },
  // 文章
  async article({ commit }, params = {}) {
    let res2 = await article(params)
    if (res2.code == 1) {
      commit('ARTICLE', res2.data)
    }
  },
  async notice({ commit }, params = {}) {
    let res = await article(params)
    commit('NOTICE', res.data)
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
