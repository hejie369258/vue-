// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入jQuery
import jq from 'jquery'

//全局引入bootstrapcss文件
import 'bootstrap/dist/css/bootstrap.min.css'
//普通js文件的引入
//import '文件路径'
// import './js/rem.js'

Vue.config.productionTip = false

//创建一个新的实例化，然后把它挂载到Vue原型 prototype原型

// let a = []

//let = new Array 

/* Array.prototype.x = 10 

let a  = new Array 
console.log(a,'ahahhaha ')
console.log(a.x,'ahahhaha ') */

//new Vue() 因为它 有 $on 和 $emit
Vue.prototype.Event = new Vue()

//把jQuery这个库 挂载到vue原型上
Vue.prototype.$ = jq



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
