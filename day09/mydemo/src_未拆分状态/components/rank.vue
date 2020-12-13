<template>
    <div>
        <h1>排行榜</h1>
        <h2>获取仓库中的getter---{{$store.getters.getUserName}}</h2>
        <hr>
        <h2>辅助getter--- {{getUserName}}</h2>
        <h3>name===={{name}}==={{num}}</h3>
        <hr>
      ---  {{name}}---
        <hr>
    </div>
</template>

<script>
// 官方提供了辅助性函数，作用让我们的代码更加简单，减少代码量
import {mapGetters,mapState} from 'vuex'
// console.log(mapGetters(['getUserName']),'你是谁')
console.log(mapState(['name','num','userInfo']),'谁')
/* let a = [1,2,3]
console.log(...a,'等于')
let mapS = {
    a:function(){
        return 100
    },
    b:2
}
console.log({...mapS}.a(),'mapS') */

export default {
    data() {
        return {

        };
    },
    computed:{//计算属性
        // 相当于 {getUserName:函数}
        ...mapGetters(['getUserName']),
        // ...mapGetters({
        //     getUserName:function  getUserName(state){
        //     return state.userInfo.name
        // }
        // })
        sum(){},
        // ...mapState(['name','num','userInfo'])
        ...mapState({
            // hehe:function (state){
            //     return state.name
            // }
            name:state=>state.name,
            num:state=>state.num
        })
    }
};
</script>'

<style  lang="" scoped>

</style>
