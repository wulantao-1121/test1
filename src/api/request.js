// 对于axios二次封装
import axios from 'axios'

// 利用axios对象的方法create，去创建一个axios实例
const requests = axios.create({
  // 配置对象
  baseURL: 'http://10.69.6.106:8080'
})

// 请求拦截器
requests.interceptors.request.use(config => {
  return config
})

// 响应拦截器
requests.interceptors.response.use(
  res => {
    // 成功回调
    return res.data
  },
  error => {
    // 失败的函数
    return Promise.reject(new Error('faile'))
  }
)

// 对外暴露
export default requests
