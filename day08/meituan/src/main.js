// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//全局引入rem.js文件
import './assets/js/rem'
//全局引入css文件
import './assets/css/reset.css'
//全局引入阿里矢量图
import './assets/font/iconfont.css'
//全局引入animate.css
import 'animate.css/animate.min.css'

//引入全局的方式
import axios from 'axios'
Vue.prototype.axios = axios

//设置全局组件
// import goBack from './common/goBack.vue'
// import goSearch from './common/goSearch.vue'
// Vue.component('goBack',goBack)
// Vue.component('goSearch',goSearch)

//引入封装好的全局组件模块
import comCommponent from './common'
// console.log(comCommponent,'comCommponent')
for(let i in comCommponent){
  // console.log(i,'你是谁')
  Vue.component(i,comCommponent[i])
}

//引入时间转化全局过滤器
// import toTime from './filter/toTime'
// Vue.filter("toTime",toTime)
//引入封装好的全局过滤器模块
import comFilter from './filter'
for(let i in comFilter){
  Vue.filter(i,comFilter[i])
}

/* let obj = {
  a:1,
  b:2,
  0:3
}

obj.a 
obj[a]
obj[0] */

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
