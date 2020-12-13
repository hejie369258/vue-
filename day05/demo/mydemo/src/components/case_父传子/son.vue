<template>
    <div class="son">
        <h1>我是子组件</h1>
        <h2>{{name}}</h2>
        <h2>{{bb}}</h2>
        <hr>
        <h1>这是父亲送的诗----{{msg}}</h1>
    </div>
</template>
<script>
export default {
    //props 自定义属性
    props:['name','bb','msg'],
    mounted() {
        //组件中this指向的是组件自己的实例
        console.log(this,'你是谁')
    },
}
</script>
<style lang="" scoped>
 .son{
     border: 1px solid green;
 }   
</style>