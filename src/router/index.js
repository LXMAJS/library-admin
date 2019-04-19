import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import login from '@/views/login'
import timer from '@/views/timer'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/timer',
      name: 'timer',
      component: timer
    }
  ]
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登录
router.beforeEach((to, from, next) => {
  next()
})

export default router
