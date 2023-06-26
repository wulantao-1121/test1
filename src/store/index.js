//
import Vue from 'vue'
import Vuex from 'vuex'
// 需要使用插件
Vue.use(Vuex)
// 引入仓库
import login from './user'
import home from './home'
import search from './search'
import yiqi from './yiqi'
import details from './details'
import news from './news'
import notice from './notice'
import synopsis from './synopsis'
import guide from './guide'
import used from './used'
import collect from './collect'
import enjoy from './enjoy'
import reservation from './reservation'
import newsDateils from './newsDateils'
import noticeDateils from './noticeDateils'
import GudieDateils from './GudieDateils'
export default new Vuex.Store({
  // vuex仓库模块开发
  modules: {
    login,
    home,
    search,
    yiqi,
    details,
    news,
    notice,
    synopsis,
    guide,
    used,
    collect,
    enjoy,
    reservation,
    newsDateils,
    noticeDateils,
    GudieDateils
  }
})
