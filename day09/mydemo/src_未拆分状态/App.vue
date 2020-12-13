<template>
  <div id="app">
    <!-- 组件嵌套结合vuex -->
    <!-- <v-one></v-one>
    <v-two></v-two> -->
    <!-- 一级路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
//引入要渲染的组件
import vOne from './components/one'
import vTwo from './components/two'
export default {
  name: 'App',
  components:{
    vOne,
    vTwo
  }
}
</script>

<style>

</style>
