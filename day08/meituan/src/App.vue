<template>
  <div id="app">
    <!-- <div class="header">
      头部
    </div> -->
    <!-- 一级路由出口 -->
    <transition enter-active-class="animate__animated animate__fadeInDown">
        <router-view></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* .header{
  height: 1.04rem;
} */
</style>
