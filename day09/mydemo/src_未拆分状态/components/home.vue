<template>
    <div>
        <h1>我是音乐首页</h1>
        <ul>
            <li v-for='item in $store.state.bannerList' :key='item.imageUrl'>
                <img :src="item.imageUrl" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    mounted(){
        //页面一加载调取接口
        this.$store.dispatch('getBannerAction')
    }
};
</script>

<style  lang="" scoped>

</style>
