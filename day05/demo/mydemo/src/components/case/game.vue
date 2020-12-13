<template>
  <div>
    <h1>游戏列表</h1>
    <!-- <img :src="img" alt=""> -->
    <ul>
      <!-- vue采用“就地复用”的原则，如果同一个标签，同一个内容，它认为没有改变，它不会去重新渲染。但是如果我的内容变了，我要取消“就地复用”,每一个标签都给它一个唯一标识,不能用索引 -->
        <li v-for="item in gameList" :key='item.id'>
            <v-item :dataList='item'></v-item>
        </li>
    </ul>
  </div>
</template>
<script>
import vItem from './item'
// import img1 from '../../assets/images/1.jpg'
/*
在vue的data中引入静态资源图片
方式一：通过require （这个用的多）
比如：img:require('../../assets/images/1.jpg')
方式二：通过import
比如：import img1 from '../../assets/images/1.jpg'
 */
export default {
  data() {
    return {
      // img:img1
      //img:require('../../assets/images/1.jpg')
      gameList: [
        {
          id: 1,
          name: "王者荣耀",
          img: require("../../assets/images/1.jpg")
        },
        {
          id: 2,
          name: "和平精英",
          img: require("../../assets/images/2.jpg")
        },
        {
          id: 3,
          name: "祖玛",
          img: require("../../assets/images/3.jpg")
        },
        {
          id: 4,
          name: "超级玛丽",
          img: require("../../assets/images/4.jpg")
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
img{
    width: 200px;
}
</style>
