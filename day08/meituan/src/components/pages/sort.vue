<template>
  <div>
    <h1>{{ $route.name }}</h1>
    <h1>音乐搜索</h1>
    <div>
      <input type="text" v-model="val" />
      <button @click="search">搜索</button>
    </div>
    <!-- 当搜索结果有值的时候，才去渲染界面 -->
    <ul v-if="resultList.length > 0">
      <li v-for="item in resultList" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
//引入封装好的接口
import {getSearch} from '../../util/axios'
export default {
  data() {
    return {
      val: "",
      resultList: []
    };
  },
  methods: {
    //天气搜索事件
    search() {
      //剔除掉搜索结果 空判断
      if (this.val == "") {
        alert("请属于要搜索的内容");
        return;
      }
     //调取音乐搜索接口
     getSearch({
         keywords:this.val
     })
     .then(res=>{
         console.log(res,'响应')
         if(res.data.code===200){
             this.resultList = res.data.result.songs
         }
     })
     .catch(err=>{

     })
    }
  }
};
</script>

<style lang="" scoped></style>
