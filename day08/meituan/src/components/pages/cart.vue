<template>
    <div>
        <h1>{{$route.name}}</h1>
    </div>
</template>

<script>
//引入封装好的接口
import {getPersonalized} from '../../util/axios'
export default {
    data() {
        return {

        };
    },
    mounted() {
        //组件一加载加获取音乐歌单
        getPersonalized()
        .then(res=>{
            console.log(res,'响应')
        })
    },
};
</script>

<style  lang="" scoped>

</style>
