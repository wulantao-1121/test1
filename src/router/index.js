import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'login',
      path: '/login',
      component: () => import('../views/Login/Login.vue')
    },
    {
      name: 'register',
      path: '/register',
      component: () => import('../views/register/register.vue')
    },
    {
      name: '',
      path: '/',
      component: () => import('../views/Home.vue'),
      children: [
        {
          name: 'index',
          path: '/',
          component: () => import('../views/index.vue')
        },
        {
          path: '/home',
          redirect: '/'
        },
        {
          name: 'search',
          path: 'search/:title',
          component: () => import('../views/Search/search.vue')
        },
        {
          name: 'yiqi',
          path: 'yiqi/page',
          component: () => import('../views/yiqi/yiqi.vue')
        },
        {
          name: 'news',
          path: 'news',
          component: () => import('../views/News/News.vue')
        },
        {
          name: 'notice',
          path: 'notice',
          component: () => import('../views/Notice/Notice.vue')
        },
        {
          name: 'guide',
          path: 'guide',
          component: () => import('../views/Gudie/Guide.vue')
        },
        {
          name: 'synopsis',
          path: 'synopsis',
          component: () => import('../views/Synopsis/Synopsis.vue')
        },
        {
          name: 'details',
          path: '/yiqi/details/:id',
          component: () => import('../views/Details/Details.vue')
        },
        {
          name: 'reservation',
          path: '/yiqi/reservation',
          component: () => import('../views/reservation/Reservation.vue')
        },
        {
          name: 'my',
          path: '/my',
          component: () => import('../views/my/my.vue'),
          children: [
            {
              name: 'used',
              path: 'used',
              component: () => import('../views/my/right.vue'),
              children: [
                {
                  name: 'yishiyong',
                  path: 'yishiyong/page',
                  component: () => import('../views/Used/used.vue')
                },
                {
                  name: 'weishiyong',
                  path: 'weishiyong/page',
                  component: () => import('../views/NotUsed/notused.vue')
                },
                {
                  name: 'shiyongzhong',
                  path: 'shiyongzhong/page',
                  component: () => import('../views/Inuse/inuse.vue')
                }
              ]
            },
            {
              name: 'collect',
              path: 'collect/page',
              component: () => import('../views/Collect/collect.vue')
            },
            {
              name: 'enjoy',
              path: 'enjoy/page',
              component: () => import('../views/Enjoy/enjoy.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/home',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 }
  }
})
// 前置守卫
router.beforeEach((to, from, next) => {
  // to:可以获取到你要跳转到那个路由信息
  // next()
  let token = store.state.login.token
  if (token) {
    if (to.path == '/login') {
      next('/home')
    } else {
      next()
    }
  } else {
    if (to.path == '/my' || to.path == '/my/used' || to.path == '/my/used/yishiyong' || to.path == '/my/used/weishiyong') {
      next('/login')
    } else {
      next()
    }
  }
})
export default router
