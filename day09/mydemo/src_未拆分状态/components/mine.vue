<template>
    <div>
        <h1>action和mutation辅助性函数</h1>
        <h2>姓名：{{name}}</h2>
        <!-- 同步修改 -->
        <button @click="CHANGE_NAME">点我修改</button>
        <hr>
        <!-- 异步修改数量 -->
        <button  @click='changeNum(6)'>我是action修改</button>
        <h2>数量---{{num}}</h2>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
console.log(mapMutations(['CHANGE_NAME']),'mutation')
export default {
    data() {
        return {

        };
    },
    mounted(){
        console.log(this.$store,'仓库')
    },
    computed:{
        ...mapState(['name','num'])
    },
    methods:{
        ...mapMutations(['CHANGE_NAME']),
        ...mapActions(['changeNum'])
    }
};
</script>

<style  lang="" scoped>

</style>
