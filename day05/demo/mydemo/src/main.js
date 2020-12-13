// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入vue核心库
import Vue from 'vue'
//引入App.vue组件
//import 变量名 from '路径'
import App from './App'
//引入路由
import router from './router'

//是否开启身产环境提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',//挂载点
  router,
  components: { App },//组件
  template: '<App/>'
})
