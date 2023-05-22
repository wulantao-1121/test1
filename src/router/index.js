import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    name: 'home',
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        name: 'index',
        path: '/',
        component: () => import('../views/index.vue')
      },
      {
        name: 'search',
        path: 'search',
        component: () => import('../views/Search/search.vue')
      },
      {
        name: 'yiqi',
        path: 'yiqi',
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
        path: '/yiqi/details',
        component: () => import('../views/Details/Details.vue')
      },
      {
        name: 'reservation',
        path: '/yiqi/details/reservation',
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
                path: 'yishiyong',
                component: () => import('../views/Used/used.vue')
              },
              {
                name: 'weishiyong',
                path: 'weishiyong',
                component: () => import('../views/NotUsed/notused.vue')
              }
            ]
          },
          {
            name: 'collect',
            path: 'collect',
            component: () => import('../views/Collect/collect.vue')
          },
          {
            name: 'enjoy',
            path: 'enjoy',
            component: () => import('../views/Enjoy/enjoy.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
