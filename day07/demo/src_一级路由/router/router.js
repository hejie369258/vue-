//引入vue核心库
import Vue from 'vue'
//引入路由插件
import VueRouter from 'vue-router'

//调用路由插件
Vue.use(VueRouter)

console.log(new VueRouter(),'VueRouter')


//router 路由控制器   route 路线
//把实例化的路由赋值给一个变量
const router = new VueRouter({
    routes:[]
})

//导出
export default router
