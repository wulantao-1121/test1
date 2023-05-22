// 当前模块：API接口进行统一管理
import api from './request'

// 接口
export const yiqiList = () => api({ url: 'product/getBaseCategoryList', method: 'get' })
// 发请求：axios发请求返回的结果是Promise对
