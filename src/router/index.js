import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: () => import('@/views/home.vue'),
    children: [
      {
        name: 'yiqiguanli',
        path: 'yiqiguanli',
        component: () => import('@/views/yiqiguanli/index.vue')
      },
      {
        name: 'user',
        path: 'user',
        component: () => import('@/views/user/index.vue'),
        children: [
          {
            name: 'jihuo',
            path: 'jihuo',
            component: () => import('@/views/user/jihuo.vue')
          },
          {
            name: 'weijihuo',
            path: 'wei',
            component: () => import('@/views/user/weijihuo.vue')
          },
          {
            name: 'jinyong',
            path: 'jin',
            component: () => import('@/views/user/jinyong.vue')
          },
          {
            name: 'userSreach',
            path: 'userSreach',
            component: () => import('@/views/user/userSreach.vue')
          }
        ]
      },
      {
        name: 'yuyue',
        path: 'yuyue',
        component: () => import('@/views/yuyue/index.vue')
      },
      {
        name: 'news',
        path: 'news',
        component: () => import('@/views/news/index.vue')
      },
      {
        name: 'gonggao',
        path: 'gonggao',
        component: () => import('@/views/gonggao/index.vue')
      },
      {
        name: 'video',
        path: 'video',
        component: () => import('@/views/HomeVideo/index.vue')
      },
      {
        name: 'regulations',
        path: 'regulations',
        component: () => import('@/views/guizhang/index.vue')
      },
      {
        name: 'platform',
        path: 'platform',
        component: () => import('@/views/platform/index.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: '/home/yiqiguanli'
  },
  {
    path: '/home',
    redirect: '/home/yiqiguanli'
  },
  {
    path: '/login',
    component: () => import('@/views/adminLogin/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 }
  }
})
router.beforeEach((to, form, next) => {
  let admin = sessionStorage.getItem('admin')
  if (admin) {
    if (to.path == '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (
      to.path == '/home/yiqiguanli' ||
      to.path == '/home/user/jihuo' ||
      to.path == '/home/user/wei' ||
      to.path == '/home/user/jin' ||
      to.path == '/home/yuyue' ||
      to.path == '/home/news' ||
      to.path == '/home/gonggao' ||
      to.path == '/home/video' ||
      to.path == '/home/regulations' ||
      to.path == '/home/platform'
    ) {
      next('/login')
    } else {
      next()
    }
  }
})
export default router
