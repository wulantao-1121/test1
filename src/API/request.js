// 对于axios二次封装
import axios from 'axios'

// 1，利用axios方法create，去创建一个axios实例
const api = axios.create({
  baseURL: '/api',
  // 请求超时的事件
  timeout: 5000
})
// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
api.interceptors.request.use(config => {
  // config:配置对象，对象里面有一个属性很重要，header请求头
  return config
})

// 响应拦截器：
api.interceptors.response.use(
  res => {
    // 成功的回调函数，服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    return res.data
  },
  error => {
    // 服务器响应失败的回调函数
    return Promise.reject(new Error('faile'))
  }
)
// 对外暴露
export default axios
