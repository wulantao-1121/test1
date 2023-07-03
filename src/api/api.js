// API接口统一管理

import requests from './request'
// 管理员登录
export const admin = params => requests({ url: '/admin/login', method: 'POST', params })
//仪器管理
export const yiqiManage = params => requests({ url: `/yiqi/page?`, method: 'get', params })
// 新闻管理、公告管理
export const newsNoticeManage = params => requests({ url: '/wenzhang/page?', method: 'get', params })
// 退出登录
export const loginOut = () => requests({ url: '/admin/logout', method: 'post' })
// 用户管理
export const getUser = params => requests({ url: '/user/page', method: 'get', params })
// 预约管理
export const yuyueManage = params => requests({ url: '/yuyue/page?', method: 'get', params })
// 系的分类
export const xi = () => requests({ url: '/xi/list', method: 'get' })
// 仪器分类
export const fenLei = () => requests({ url: '/yiqifenlei/all', method: 'get' })
// 添加仪器
export const addYiQi = params => requests({ url: '/yiqi', method: 'post', params })
// 编辑仪器数据回显
export const yiqiDetails = data => requests({ url: `/yiqi/details/${data}`, method: 'get', data })
// 添加用户
export const addUser = params => requests({ url: '/user/adminadduser', method: 'post', params })
// 编辑用户数据回显
export const userInfo = data => requests({ url: `/user/${data}`, method: 'get', data })
// 编辑用户信息
export const updateInfo = params => requests({ url: '/user', method: 'put', params })
// 拒绝用户
export const deleteInfo = params => requests({ url: '/user', method: 'delete', params })
// 搜索用户
export const userSreach = params => requests({ url: `/user/page?`, method: 'get', params })
// 搜索仪器
export const yiQiSreach = params => requests({ url: 'yiqi/pageAdmin', method: 'get', params })
//新增新闻、公告、规章指南
export const addNews = data =>
  requests({
    url: '/wenzhang',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
// 编辑新闻、公告、规章指南（回显）
export const getNewsInfo = params => requests({ url: '/wenzhang/xq?', method: 'get', params })
// 编辑新闻和公告
export const updateNewsInfo = params => requests({ url: '/wenzhang', method: 'put', params })
// 删除新闻、公告、规章指南
export const deleteNewsNotice = data => requests({ url: `/wenzhang?id=${data}`, method: 'delete', data })
// 首页视频和照片（回显）
export const getHomeImgVideo = () => requests({ url: '/hostYiqi', method: 'get' })
// 首页视频和照片修改
export const updayeHomeImgVideo = params => requests({ url: '/hostYiqi', method: 'put', params })
// 规章指南
export const getGuiZhangInfo = params => requests({ url: '/wenzhang/page?', method: 'get', params })
// 获取平台简介
export const getPlatform = () => requests({ url: '/wenzhang/pingtai', method: 'get' })
// 平台简介设置
export const updatePlatform = data =>
  requests({
    url: `/wenzhang/pingtai`,
    method: 'put',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
// 新闻、公告搜索
export const NewsNoticeSreach = params => requests({ url: `/wenzhang/page?`, method: 'get', params })
// 富文本上传照片
export const img = data => requests({ url: `/common/upload`, method: 'post', data })
// 仪器管理删除
export const deleteYiQi = params => requests({ url: '/yiqi?', method: 'delete', params })
// 仪器管理的修改
export const modifyYiQi = params => requests({ url: '/yiqi', method: 'put', params })
