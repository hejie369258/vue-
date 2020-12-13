<template>
    <div class="one">
        <h1>组件一</h1>
        <h1>共享的state值是----{{$store.state.name}}</h1>
        <hr>
        <h2>接收到getter内容---{{$store.getters.getUserName}}</h2>
        <hr>
        <h2>数量是-----{{$store.state.num}}</h2>
        <button @click='changeNum(10)'>修改state中的num</button>
        <hr>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    mounted(){
        //组件一加载就触发挂载生命周期函数
        console.log(this,'指向当前组件实例')
    },
    methods:{
        //封装一个修改数量的事件
        changeNum(n){
            //利用actions去修改。谁去触发action,通过dispatch
            this.$store.dispatch('changeNum',n)
        }
    }
};
</script>

<style  lang="" scoped>
.one{
    border: 2px solid pink;
}
</style>
