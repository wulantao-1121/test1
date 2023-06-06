import { getEnjoy, addYiqi, xiugaoYiqi, HuiXian } from '@/api/index'

const state = {
  enjoyList: [],
  form: {}
}
const mutations = {
  ENJOY(state, enjoyList) {
    state.enjoyList = enjoyList
  },
  HUIXIAN(state, form) {
    state.form = form.yiqiDto
  },
  CLOSE(state) {
    state.enjoy.form = {}
  }
}
const actions = {
  async getEnjoy({ commit }, params) {
    let res = await getEnjoy(params)
    if (res.code == 1) {
      commit('ENJOY', res.data)
    }
  },
  // 添加仪器
  async addYiqi({ commit }, params) {
    let res = await addYiqi(params)
    if (res.code == 1) {
      return res.data
    } else {
      return Promise.reject(new Error(res.msg))
    }
  },
  // 修改仪器
  async xiuGaiYiqi({ commit }, params) {
    let res = await xiugaoYiqi(params)
  },
  // 仪器修改回显到对话框
  async HuiXian({ commit }, data) {
    let res = await HuiXian(data)
    if (res.code == 1) {
      commit('HUIXIAN', res.data)
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
