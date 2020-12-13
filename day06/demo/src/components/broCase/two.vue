<template>
    <div class="one">
        <h1>我是组件BBBBB</h1>
        <h2>李白说----{{msg}}</h2>
        <button @click='sendA'>发送数据给A</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg:'蜀道难，难于上青天'
        }
    },
    methods: {
        sendA(){
            console.log('发送数据给A')
            //触发事件 $emit,两个参数，事件名称和数据
            this.Event.$emit('aa',this.msg)
        }
    },
}
</script>
<style lang="" scoped>
.one{
    border: 2px solid orange;
}    
</style>