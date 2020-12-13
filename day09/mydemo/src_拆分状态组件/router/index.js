import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      component:()=>import('@/components/home/home')
    },
    {
      path:'/rank',
      component:()=>import('@/components/rank/rank')
    }
  ]
})
