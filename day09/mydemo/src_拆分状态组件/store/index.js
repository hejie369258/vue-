//引入核心库
import Vue from 'vue'

//引入vuex
import Vuex from 'vuex'

//调用当前的插件
Vue.use(Vuex)


//引入封装好的模块
import home from './modules/home/home'
import rank from './modules/rank/rank'

//引入state
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

//导出
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules:{
        home,
        rank
    }
})