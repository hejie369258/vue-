<template>
  <div>
    <!-- <h1>用来装载二级路由</h1> -->
    <div>我是顶部导航</div>
    <!-- 视图切换 -->
    <router-link to="/index/home">首页</router-link>
    <router-link to="/index/cart">购物车</router-link>
    <router-link to="/index/mine">个人中心</router-link>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="" scoped></style>
