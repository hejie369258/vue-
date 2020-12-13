//引入vue核心库
import Vue from 'vue'
//引入路由插件
import Router from 'vue-router'
//引入一级路由
import Index from '@/components/index'
import Play from '@/components/play'
//引入二级路由
import Home from '@/components/home'
import Cart from '@/components/cart'
import Mine from '@/components/mine'

//调用路由插件
Vue.use(Router)

//导出
//router 路由控制器   route 路线
const router = new Router({
  routes: [
    {
      path:'/index',
      component:Index,
      children:[
        //如果二级路由地址加'/',那么访问地址就省略了一级路由path.访问地址：'/二级路由path'.如果二级路由地址没有加'/',那么访问地址就要带着一级路由path访问地址：'/一级路由path/二级路由path'
        {
          path:"/home",
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
          path:'',
          redirect:'/home'
        }
      ]
    },
    {
      path:'/play',
      component:Play
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})
export default router
