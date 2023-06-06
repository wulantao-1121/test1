import { userLogin, userLoginOut, adduser } from '@/api/index'

// login 仓库
const state = {
  token: localStorage.getItem('token')
}
const mutations = {
  USERLOGIN(state, token) {
    state.token = token
  },
  // 清除本地数据
  CLEAR(state) {
    state.token = ''
    localStorage.removeItem('token')
  }
}

const actions = {
  // 登录
  async getUserLogin({ commit }, params) {
    let res = await userLogin(params)
    if (res.code == 1) {
      commit('USERLOGIN', res.data.id)
      localStorage.setItem('token', res.data.id)
      return 'ok'
    } else {
      return Promise.reject(new Error('登录失败'))
    }
  },
  // 退出登录
  async userLoginOut({ commit }) {
    let res = await userLoginOut()
    if (res.code == 1) {
      commit('CLEAR')
      return res.data
    } else {
      return Promise.reject(new Error('退出失败'))
    }
  },
  // 用户注册
  async userRegister({ commit }, params) {
    let res = await adduser(params)
    if (res.code == 1) {
      return res.data
    } else if (res.code == 0) {
      return Promise.reject(new Error(res.msg))
    } else {
      return Promise.reject(new Error('注册失败'))
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
