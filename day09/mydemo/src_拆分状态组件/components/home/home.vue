<template>
    <div>
        <h1>我是home</h1>
        <!-- <h2>接收数据---{{getStateName}}</h2> -->
        <h2>接收数据---{{homeName}}</h2>
        <ul>
            <li v-for="item in bannerList" :key='item.imageUrl'>
                <img :src="item.imageUrl" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    data() {
        return {

        };
    },
    mounted(){
        //页面一加载，打印仓库
        //console.log(this.$store,'仓库')
        //页面一进来 就加载调取接口
        this.getBannerAction()
    },
    computed:{
       // ...mapGetters(['getStateName'])
       ...mapGetters({
           homeName:'home/getStateName',
           bannerList:'home/getBanner'
       })
    },
    methods:{
        ...mapActions({
            getBannerAction:'home/getBannerAction'
        })
    }
};
</script>

<style  lang="" scoped>

</style>
