<template>
  <div>
    <h1>运动列表</h1>
    <ul>
        <li v-for="(item,idx) in sportList" :key='item.id'>
            <v-item 
            @delInfo='del'
            :dataList='item' :index='idx'></v-item>
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
  methods: {
    //删除事件
    del(e){
      console.log(e,'我是子组件触发')
      //删除被选中的数据
      this.sportList.splice(e,1)
    }
  },
  components:{
      vItem
  }
};
</script>
<style lang="" scoped>

</style>
