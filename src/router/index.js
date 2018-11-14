import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入组件
import login from '@/components/login'

Vue.use(Router)
// element组件
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
