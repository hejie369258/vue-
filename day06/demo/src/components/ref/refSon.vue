<template>
    <div>
        <h1>我是ref的子组件</h1>
        <h2>{{name}}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name:'诸葛亮'
        };
    },
    methods:{
        //改变名字
        changeName(){
            this.name='后裔'
        }
    }
};
</script>

<style  lang="" scoped>

</style>

