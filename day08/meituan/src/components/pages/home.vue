<template>
    <div>
        <h1>我是{{$route.name}}</h1>
        <router-link tag='div' to='/movieList'><div class="infoBox">电影</div></router-link>
        <div @click='goFood' class="infoBox">美食</div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {
        //封装跳转美食列表方法
        goFood(){
            //利用编程式导航进行跳转
            console.log(this,'组件实例')
            //push() 这个方法是往历史记录中添加一条记录
            //replace() 这个方法是替换历史记录
            this.$router.push('/foodList')
            //this.$router.replace('/foodList')
        }
    },
};
</script>

<style  lang="" scoped>
.infoBox{
    height: 0.8rem;
    line-height: 0.8rem;
    background: pink;
    margin: 10px 5px;
}
</style>
