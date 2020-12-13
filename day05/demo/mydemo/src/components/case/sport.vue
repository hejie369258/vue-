<template>
  <div>
    <h1>运动列表</h1>
    <ul>
        <li v-for="item in sportList" :key='item.id'>
            <v-item :dataList='item'></v-item>
        </li>
    </ul>
  </div>
</template>
<script>
import vItem from './item'
export default {
  data() {
    return {
      sportList: [
        {
          id: 5,
          name: "篮球",
          img: require("../../assets/images/5.jpg")
        },
        {
          id: 6,
          name: "乒乓球",
          img: require("../../assets/images/6.jpg")
        },
        {
          id: 7,
          name: "足球",
          img: require("../../assets/images/7.jpg")
        },
        {
          id: 8,
          name: "网球",
          img: require("../../assets/images/8.jpg")
        }
      ]
    };
  },
  components:{
      vItem
  }
};
</script>
<style lang="" scoped>

</style>
