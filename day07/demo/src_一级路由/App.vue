<template>
  <div id="app">
    <!-- 
      切换的视图  to属性一定要和路由path地址匹配
      router-link被解析成为a标签
      如果你不想用a标签，你可以利用tag属性去改变默认的标签元素
      比如： <router-link tag='div' to='/home'>首页</router-link>
      -->
      <div>
        <h1>我是头部</h1>
      </div>
    <router-link tag='span' to='/home'>首页</router-link>
    <router-link to='/cart'>购物车</router-link>
    <router-link to='/mine'>个人中心</router-link>
    <!-- 路由渲染，路由出口 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
