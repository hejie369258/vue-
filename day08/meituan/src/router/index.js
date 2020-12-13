import Vue from 'vue'
import Router from 'vue-router'
//引入一级路由
import Index from '@/components/views/index'
import moiveList from '@/components/views/movieList'
import movieDetail from '@/components/views/movieDetail'
import foodList from '@/components/views/foodList'
import foodDetail from '@/components/views/foodDetail'
import Login from '@/components/views/login'
//引入二级路由
// import Home from '@/components/pages/home'
import Sort from '@/components/pages/sort'
// import Cart from '@/components/pages/cart'
const Cart = ()=>Promise.resolve(import('@/components/pages/cart'))
// import Mine from '@/components/pages/mine'
//路由懒加载，把路由文件切割成模块，当调用函数的时候，才去执行，首次加载未执行
//const Mine = ()=> import('@/components/pages/mine')

Vue.use(Router)

const router = new Router({
  // mode:'history',
  routes: [
    {
      path:'/index',
      component:Index,
      children:[
        {
          path:'/home',
          component:()=>import('@/components/pages/home'),
          name:'首页'
        },
        {
          path:'/cart',
          component:Cart,
          name:'购物车',
          alias:'/bugbug' //别名
        },
        {
          path:'/sort',
          component:Sort,
          name:'商品分类'
          // beforeEnter(){}
        },
        {
          path:'/mine',
          component:()=> import('@/components/pages/mine'),
          name:'个人中心'
        },
        {
          path:'',
          redirect:'/home'
        }
      ]
    },
    {
      path:'/movieList',
      component:moiveList
    },
    {
      path:'/movieDetail/:id',
      component:movieDetail
    },
    {
      path:'/foodList',
      component:foodList,
      beforeEnter(to,from,next){
        console.log(to,'路由独享toototot')
        console.log(from,'路由独享from')
        //如果来源是home我就让进入美食列表，否则，就全部跳转到首页，即使你知道我的地址也没用
        if(from.path=='/home' || from.path =='/foodDetail'){
          next()
        }else{
          next('/home')
        }
      }
    },
    {
      // path:'/foodDetail/:id',
      path:'/foodDetail',
      //name 是路由命名
      name:'foodDetail',
      component:foodDetail
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})

//全局导航守卫
// console.log(router,'路由对象')
//产品需求所以的组件都要登录之后才可见，否则未登录的状态，去强制登录
router.beforeEach((to,from,next)=>{
  console.log(to,'去哪')
 // console.log(from,'从哪里来')
 // next()
 //一、如果去的是登录页，就放行（next）
if(to.path=='/login'){
  next()
  return
}
 // 二、如果它登录的了，就放行（next）
 if(localStorage.getItem('isLogin')){
   next()
   return
 }
 //三、以上逻辑都不是就强制跳转到登录页
 next('/login')
})

//后置导航钩子函数
router.afterEach((to,from)=>{

})

export default router
