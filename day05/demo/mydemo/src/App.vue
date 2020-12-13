<template>
  <div id="app" class="app">
    <!-- <h1>脚手架好好用</h1> -->
    <!-- <my-header></my-header> -->
    <!-- 父组件渲染 -->
    <!-- <father></father> -->
    <v-case></v-case>
  </div>
</template>

<script>
// //引入 头部组件
 import myHeader from './components/myHeader'
 //引入父组件
//  import father from './components/case/father'
 //引入case.vue
 import vCase from './components/case/case'
export default{
  //组件中的属性和方法
  components:{
    myHeader,
    // father
    vCase
  }
}
</script>

<style scoped>
/* scoped 当前样式在当前组件有效 */
.app{
  border: 2px solid #ccc;
}
h1{
  color: red;
}
</style>
