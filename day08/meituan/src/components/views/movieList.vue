<template>
  <div>
    <h1>movieList</h1>
    <go-back></go-back>
    <go-search></go-search>
    <ul>
        <!-- query传参 -->
      <!-- <li class="infoBox" v-for="item in movieList" :key="item.id">
        <router-link tag="div" :to="'/movieDetail?id=' + item.id">
          <img class="img" :src="item.img" alt="" />
          <p>电影名称：{{ item.name }}</p>
        </router-link>
      </li> -->
      <!-- 动态路由 -->
      <li class="infoBox" v-for="item in movieList" :key="item.id">
        <router-link tag="div" :to="'/movieDetail/'+item.id">
          <img class="img" :src="item.img" alt="" />
          <p>电影名称：{{ item.name }}</p>
          <p>上映时间是：{{item.pTime | toTime}}</p>
          <p>票价：{{item.price | toPrice(2)}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieList: [
        {
          id: 1,
          name: "金刚川",
          img: require("../../assets/images/1.jpg"),
          pTime:1604653351499,
          price:99
        },
        {
          id: 2,
          name: "我和我的家乡",
          img: require("../../assets/images/2.jpg"),
          pTime:1604653351499,
          price:108
        },
        {
          id: 3,
          name: "夺冠",
          img: require("../../assets/images/3.jpg"),
          pTime:1604653351499,
          price:55
        }
      ]
    };
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
