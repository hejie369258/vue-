//引入vue核心库
import Vue from 'vue'
//引入路由插件
import Router from 'vue-router'
//引入要使用的组件
/* @ 指的是src  在bulid => webpack.base.conf.js 大概28行的位置
resolve: {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src'),
  }
}, */
import Home from '@/components/home'
import Cart from '@/components/cart'
import Mine from '@/components/mine'
import Play from '@/components/play'

//调用路由插件
Vue.use(Router)

//导出
//router 路由控制器   route 路线
const router = new Router({
  routes: [
    {
      path:'/home',//地址
      component:Home
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/mine',
      component:Mine
    },
    {
      path:'/play',
      component:Play
    },
    {//重定向
      path:'*',
      redirect:'/home'
    }
  ]
})
export default router
