//定义state
const state = {
    name:'rank的名字'
}

//定义一个 getters
const  getters = {
    getStateName(state){
        return state.name
    }
}

//定义mutations
const mutations = {

}

//定义一个actions
const actions={

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