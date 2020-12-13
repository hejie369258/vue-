<template>
  <div>
    <h1>foodList</h1>
    <button @click="$router.go(-1)">返回</button>
    <button @click="$router.back()">返回-back方法</button>
    <ul>
      <li class="infoBox" v-for="item in foodList" :key="item.id" @click='goDetail(item.id)'>
        <img class="img" :src="item.img" alt="" />
        <p>电影名称：{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodList: [
        {
          id: 1,
          name: "金刚川",
          img: require("../../assets/images/1.jpg")
        },
        {
          id: 2,
          name: "我和我的家乡",
          img: require("../../assets/images/2.jpg")
        },
        {
          id: 3,
          name: "夺冠",
          img: require("../../assets/images/3.jpg")
        }
      ]
    };
  },
  methods: {
      //封装跳转详情事件  query
      goDetail(id){
          //利用编程式导航 实现 query传参
         // this.$router.push('/foodDetail?id='+id)
         this.$router.push({
             path:'/foodDetail',
             query:{
                 id
             }
         })
      }
    //封装跳转详情事件  动态路由
    // goDetail(id){
    //     //this.$router.push('/foodDetail/'+id)
    //     this.$router.push({
    //         name:'foodDetail',
    //         params:{
    //             id
    //         }
    //     })
    // }
  },
  beforeRouteLeave (to, from, next) {
    console.log('当前组件失效')
    next()
  }
};
</script>

<style lang="" scoped>
.img {
  width: 2.4rem;
}
.infoBox {
  border: 1px solid blue;
  padding: 5px;
  margin-bottom: 10px;
}
</style>
