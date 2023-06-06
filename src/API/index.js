// API进行统一管理

import requests from './request'

// 用户登录
export const userLogin = params => requests({ url: '/user/login', method: 'post', params })
// 退出登录
export const userLoginOut = () => requests({ url: '/user/logout', method: 'post' })
// 用户注册
export const adduser = params => requests({ url: '/user/adduser', method: 'post', params })
//
export const yiqizongshu = () => requests({ url: '/yiqi', method: 'get' })
// 仪器列表
export const yiqiList = params => requests({ url: `/yiqi/page?`, method: 'get', params })
// 仪器搜索（系）
export const yiqiXi = () => requests({ url: '/xi/list', method: 'get' })
// 仪器搜索（分类）
// export const yiqiFenlei = () => requests({ url: '' })
// 仪器详情
export const Details = params => requests({ url: `/yiqi/details/${params}`, method: 'get' })
// 首页搜索
export const search = params => requests({ url: `/wenzhang/find/${params.title}`, method: 'get', params })
//新闻和公告
export const article = params => requests({ url: `/wenzhang/page?page=${params.page}&pageSize=${params.pageSize}&${params.leixing}=${params.leixing}`, method: 'get', params })
//热门仪器、新闻热点、热点公告
export const getHots = params => requests({ url: `/wenzhang/page?page=1&pageSize=${params.pageSize}&${params.leixing}=${params.leixing}`, method: 'get', params })

// 规章指南
export const getGuide = () => requests({ url: `/wenzhang/page?page=1&pageSize=6&leixing=3`, method: 'get' })

// 平台简介
export const getSynopsis = () => requests({ url: '/wenzhang/page?page=1&pageSize=1&leixing=4', method: 'get' })
// 个人信息我的预约（已使用）
export const shiyongState = params => requests({ url: `/yuyue/page?`, method: 'get', params })
// 我的收藏
export const getCollecr = params => requests({ url: '/shoucang/page?', method: 'get', params })
// 我的共享
export const getEnjoy = params => requests({ url: '/yiqi/page?', method: 'get', params })
// 我的共享（添加仪器）
export const addYiqi = params => requests({ url: '/yiqi', method: 'post', params })
// 我的共享（修改）
export const xiugaoYiqi = params => requests({ url: '/yiqi', method: 'put', params })
// 我的共享（修改仪器回显到对话框里）
export const HuiXian = data => requests({ url: `/yiqi/details/${data}`, method: 'get', data })
