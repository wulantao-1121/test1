// 对于axios二次封装

import router from '@/router'
import store from '@/store'
import axios from 'axios'

// 利用axios对象的方法create，去创建一个axios实例
const requests = axios.create({
  // 配置对象
  baseURL: 'http://localhost:8080/'
})

// 请求拦截器
requests.interceptors.request.use(config => {
  //判断是否登录
  if (store.state.login.token) {
    config.headers.Token = store.state.login.token
  }
  return config
})

// 响应拦截器
requests.interceptors.response.use(
  res => {
    // 成功回调
    if (res.data.msg == '用户未登录') {
      store.state.login.token = ''
      localStorage.removeItem('token')
      router.push('/login')
    }
    return res.data
  },
  error => {
    // 失败的函数
    return Promise.reject(new Error('faile'))
  }
)
// 对外暴露
export default requests
