<template>
    <div>
        <!-- 底部导航 -->
        <div class="footer">
            <router-link activeClass='select' to='/home'>首页</router-link>
            <router-link activeClass='select' to='/sort'>分类</router-link>
            <router-link activeClass='select' to='/cart'>购物车</router-link>
            <router-link activeClass='select' to='/mine'>个人中心</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
};
</script>

<style  lang="" scoped>
.footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    display: flex;
    background: #ccc;
}
.footer a{
    text-align: center;
    color: #333;
    flex: 1;
}
.select{
    background: goldenrod;
    color: green !important;
}
</style>
