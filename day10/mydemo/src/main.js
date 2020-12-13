// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入下载好的mint-ui框架
import MintUI from 'mint-ui'
//引入mint-ui的css
import 'mint-ui/lib/style.min.css'
//调用插件
Vue.use(MintUI)

//全局引入vantUI
import VantUI from 'vant'
import 'vant/lib/index.css'
//调用插件
Vue.use(VantUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
