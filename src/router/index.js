import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import goto from '@/components/goto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/goto',
      name: 'goto',
      component: goto
    }
  ]
})
