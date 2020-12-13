<template>
    <div>
        <h1>{{$route.name}}</h1>
        <ul>
            <li v-for="item in resultList" :key='item.id'>
                标题是：{{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
//import axios from 'axios'
export default {
    data() {
        return {
            resultList:[]
        };
    },
    mounted() {
        //页面一加载就调取数据
        this.axios({
            url:'/api/posts'
        })
        .then(res=>{
            console.log(res,'成功响应')
            if(res.status ===200){
                //先去过滤下数据，只要前20条数据
                //console.log( res.data.filter((item,i)=>i<20),'结果')
                this.resultList = res.data.filter((item,i)=>i<20)
            }
        })
        .catch(err=>{
            console.log(err,'错误拦截')
        })
    },
};
</script>

<style  lang="" scoped>

</style>
