import { getEnjoy, addYiqi, xiugaoYiqi, HuiXian, yiqiXi, yiqiFenlei, Delete, getImages } from '@/api/index'

const state = {
  enjoyList: [],
  addForm: {},
  xiId: [],
  fenLei: []
}
const mutations = {
  ENJOY(state, enjoyList) {
    state.enjoyList = enjoyList
  },
  HUIXIAN(state, addForm) {
    state.addForm = addForm.yiqiDto
  },
  XIID(state, xiId) {
    state.xiId = xiId
  },
  FENLEI(state, fenLei) {
    state.fenLei = fenLei
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
    console.log(params)
    let res = await xiugaoYiqi(params)
    if (res.code == 1) {
      return res.data
    } else {
      return Promise.reject(new Error('修改失败'))
    }
  },
  // 仪器修改回显到对话框
  async HuiXian({ commit }, data) {
    let res = await HuiXian(data)
    if (res.code == 1) {
      commit('HUIXIAN', res.data)
    }
  },
  // 系
  async yiqiXi({ commit }) {
    let res = await yiqiXi()
    if (res.code == 1) {
      commit('XIID', res.data)
    }
  },
  // 分类
  async yiqiFenlei({ commit }) {
    let res = await yiqiFenlei()
    if (res.code == 1) {
      commit('FENLEI', res.data)
    }
  },
  // 删除仪器
  async YiQiDelete({ commit }, params) {
    let res = await Delete(params)
    if (res.code == 1) {
      return 'ok'
    } else {
      return Promise.reject(new Error(res.msg))
    }
  },
  // 维修
  async maintenance({ commit }, params) {
    let res = await xiugaoYiqi(params)
    if (res.code == 1) {
      return '维修'
    } else {
      return Promise.reject(new Error(res.data))
    }
  },
  // 取消维护
  async EndRepair({ commit }, params) {
    let res = await xiugaoYiqi(params)
    if (res.code == 1) {
      return 'ok'
    } else {
      return Promise.reject(new Error(res.data))
    }
  },
  // 照片回显
  async getImages({ commit }, data) {
    let res = await getImages(data)
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
