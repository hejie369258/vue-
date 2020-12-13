<template>
    <div>
        <h1>ref案例</h1>
        <div ref='aa'>我是一个盒子</div>
        <div>
            用户名：<input type="text" ref='username'>
        </div>
        <button @click='getName'>获取用户名</button>
        <hr>
        <ref-son ref='refSon'></ref-son>
        <hr>
        <button @click='changeInfo'>点击我修改子组件的数据</button>
    </div>
</template>
<script>
//引入refSon
import refSon from './refSon'
export default {
    mounted() {
        // console.log(this.$refs.aa,'组件的实例')
        // console.log(this.$refs.aa.innerHTML,'组件的实例')
        console.log(this.$refs.refSon,'子组件的实例')
        console.log(this.$refs.refSon.name)
    },
    methods: {
        //获取用户名
        getName(){
            console.log(this.$refs.username.value)
        },
        //修改子组件事件方法
        changeInfo(){
            console.log(this.$refs.refSon)
            this.$refs.refSon.changeName()
        }
    },
    components:{
        refSon
    }
}
</script>
<style lang="" scoped>
    
</style>