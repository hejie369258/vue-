//引入核心库
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//调用vuex插件
Vue.use(Vuex)

//引入封装好modules模块
import menu from './modules/menu'
import role from './modules/role'
import user from './modules/user'
import cate from './modules/cate'
import specs from './modules/specs'

//导出实例化的仓库
export default new Vuex.Store({
    modules:{
        menu,
        role,
        user,
        cate,
        specs
    }
})