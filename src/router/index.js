import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登录
router.beforeEach((to, from, next) => {
  next()
})

export default router
