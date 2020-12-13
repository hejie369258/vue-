//引入vue核心库
import Vue from 'vue'
//引入vuex的核心库
import Vuex from 'vuex'
//引入封装好的接口文件
import {getBanner} from '../util/axios'
//调用Vuex
Vue.use(Vuex)
//vuex是一个对象，不能直接实例化，要实例化Store
//console.log(new Vuex.Store(),'你是谁')

export default new Vuex.Store({
    state:{//唯一的数据源
        name:'诸葛钢铁',
        num:10,
        userInfo:{
            name:'二狗子',
            age:21
        },
        bannerList:[]
    },
    mutations:{//修改state的唯一方式，且它只能是同步方法
        //修改state上的name
        CHANGE_NAME(state){
          // console.log(state,'我要变了') 
          state.name = '小甜甜'
        },
        //修改state上的num
        CHANGE_NUM(state,payload){
            state.num = state.num + payload
        },
        NEW_NUM(state,payload){
            state.num +=  payload
        },
        //获取列表并修改state
        REQ_BANNER(state,payload){
            state.bannerList = payload
        }
    },
    getters:{//它类似于计算属性computed 
        //它一般作为视图和state之间的中间层存在
        getUserName(state){
            return state.userInfo.name
        }
    },
    actions:{
        //大量的异步操作
        // changeNum(context){
        //     //上下文context
        //     context.commit('NEW_NUM')

        // }
        //代码优化
        changeNum({commit},payload){
           commit('NEW_NUM',payload) 
        },
        //封装一个调取接口行动-banner
        getBannerAction({commit}){
            getBanner()
            .then(res=>{
                console.log(res,'响应')
                commit('REQ_BANNER',res.data.banners)
            })
        }
    }
})