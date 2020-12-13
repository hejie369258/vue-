// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入vuex状态管理
import store from './store'
//引入element-ui
import elementUI from 'element-ui'
//引入element-ui的css文件
import 'element-ui/lib/theme-chalk/index.css'
//调用element
Vue.use(elementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
