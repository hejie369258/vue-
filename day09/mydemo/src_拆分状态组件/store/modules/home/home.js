//引入封装好的数据接口api
import {getBanner} from '../../../util/axios'
//定义state
const state = {
    name:'home的名字',
    bannerList:[]
}

//定义一个 getters
const  getters = {
    getStateName(state){
        return state.name
    },
    getBanner(state){
        return state.bannerList
    }
}

//定义mutations
const mutations = {
    REQ_BANNERLIST(state,payload){
        state.bannerList = payload
    }
}

//定义一个actions
const actions={
    //封装一个异步调取轮播图的接口
    getBannerAction({commit}){
        //调取接口
        getBanner()
        .then(res=>{
            console.log(res,'响应')
            if(res.data.code===200){
                //提交一个mutation
                commit('REQ_BANNERLIST',res.data.banners)
            }
        })
        .catch(err=>{
            console.log(err,'错误响应')
        })
    }
}

//导出一个默认的对象
export default {
    state,
    getters,
    mutations,
    actions,
    //命名空间
    namespaced:true
}