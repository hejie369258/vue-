<template>
  <div id="app">
    <!-- <v-case></v-case> -->
    <!-- <goods-info @getGift='gift($event)'></goods-info>
    <h1>接收到儿子的礼物----{{msg}}</h1> -->
    <!-- <v-one></v-one>
    <v-two></v-two>
    <v-three></v-three> -->
    <!-- <v-ref></v-ref> -->
    <!-- <v-music></v-music> -->
    <!-- 槽口案例 -->
    <!-- <v-slot></v-slot> -->
    <!-- jq案例 -->
    <jq-case></jq-case>
  </div>
</template>

<script>
import vCase from './components/case/case'
import goodsInfo from './components/goodsInfo'
// 引入三个组件
import vOne from './components/broCase/one'
import vTwo from './components/broCase/two'
import vThree from './components/broCase/three'
//引入ref组件
import vRef from './components/ref/ref'
//引入音乐播放组件
import vMusic from './components/ref/refMusic'
//引入槽口案例
import vSlot from './components/slot/slot'
//引入 jQuery
import jqCase from './components/jqCase/jqCase'
export default {
  data() {
    return {
      msg:''
    }
  },
  components:{
    vCase,
    goodsInfo,
    vOne,
    vTwo,
    vThree,
    vRef,
    vMusic,
    vSlot,
    jqCase
  },
  methods: {
    gift(e){
      console.log(e,'事件源')
      this.msg = e
    }
  },
}
</script>

<style>

</style>
