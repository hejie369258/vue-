<template>
    <div class="two">
        <h1>组件22222222222</h1>
        <h1>获取state值---{{$store.state.name}}</h1>
        <button @click='changeName'>修改名字</button>
        <hr>
        <h2>当前获取数量是---{{$store.state.num}}</h2>
        <button @click='changeNum(5)'>修改当前数量</button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods:{
        //封装修改名字事件
        changeName(){
            //通过commit去触发mutation
            console.log(this.$store)
            this.$store.commit('CHANGE_NAME')
        },
        //封装一个修改数量的事件
        changeNum(n){
            this.$store.commit('CHANGE_NUM',n)
        }
    }
};
</script>

<style  lang="" scoped>
.two{
    border: 2px solid orange;
}
</style>
