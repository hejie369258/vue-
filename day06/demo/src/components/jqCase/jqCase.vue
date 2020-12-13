<template>
    <div>
        <h1>jQuery的应用案例</h1>
        <div>
            <input type="text" v-model='keyword'> 
            <button @click="goSearch">搜索</button>
        </div>
        <ul>
            <li v-for="item in resultList" :key='item.id'>
                歌曲名称：{{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
//引入jquery
// import jq from 'jquery'
export default {
    data() {
        return {
            keyword:'',
            resultList:[]   
        };
    },
    mounted() {
       // console.log(jq,'你是谁')
        // jq.ajax({
        //     url:'http://www.ujiuye.tech:5000/search?keywords=%E7%BB%8F%E6%B5%8E%E8%88%B1',
        //     success:(res)=>{
        //         console.log(res,'响应')
        //     }
        // })
    },
    methods: {
        //搜索音乐列表事件
        goSearch(){
            this.$.ajax({
                url:'http://www.ujiuye.tech:5000/search',
                data:{
                   keywords:this.keyword
                },
                success:(res)=>{
                    console.log(res,'搜索结果')
                    if(res.code==200){
                        this.resultList = res.result.songs
                    }
                }
            })
        }
    },
};
</script>

<style  lang="" scoped>

</style>
