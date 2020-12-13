<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar :title="$route.meta.name">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- 
        轮播图 
    autoplay	自动轮播间隔，单位为 ms  
    indicator-color	指示器颜色 
    vertical	是否为纵向滚动 
    -->
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="blue">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img class="img" :src="$imgUrl + item.img" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格展示 -->
    <van-grid :border="false" :column-num="4">
      <van-grid-item text="限时抢购">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <span class="gridTitle">限时抢购</span>
      </van-grid-item>
      <van-grid-item text="积分商城">
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        <span class="gridTitle">积分商城</span>
      </van-grid-item>
      <van-grid-item text="联系我们">
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        <span class="gridTitle">联系我们</span>
      </van-grid-item>
      <van-grid-item to='/sort' text="商品分类">
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        <span class="gridTitle">商品分类</span>
      </van-grid-item>
    </van-grid>
    <!-- tab标签页 -->
    <van-tabs type="card">
      <van-tab title="发现新品">
        <!-- 商品卡片 -->
        <van-card
          v-for="item in newsList"
          :key="item.id"
          num="2"
          price="2.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'
          "
        />
      </van-tab>
      <van-tab title="热门推荐">
        <!-- 商品卡片 -->
        <van-card
          v-for="item in hotsList"
          :key="item.id"
          num="2"
          price="2.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'
          "
        />
      </van-tab>
      <van-tab title="所有商品">
        <!-- 商品卡片 -->
        <van-card
          v-for="item in goodsList"
          :key="item.id"
          num="2"
          price="2.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'
          "
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getBanner, getIndexGoods } from "../util/axios";
//单独调用axios
import axios from "axios";
//调用轻提示
import { Toast } from "vant";
export default {
  data() {
    return {
      bannerList: [],
      newsList: [],
      hotsList: [],
      goodsList: []
    };
  },
  mounted() {
    //组件加载获取轮播图接口
    //组件加载获取商品信息
    /* 
    并发处理
    import axios from 'axios'
    axios.all([接口1，接口2...])
    .then(axios.spread((响应1,响应2)=>{

    }))
    */
    //并发处理
    axios.all([getBanner(), getIndexGoods()]).then(
      axios.spread((bannerList, indexGoods) => {
        console.log(bannerList, "响应1");
        console.log(indexGoods, "响应2");
        if (bannerList.code == 200) {
          this.bannerList = bannerList.list;
          //   Toast.success(bannerList.msg);
        } else {
          Toast.fail(bannerList.msg);
        }
        if (indexGoods.code == 200) {
          this.newsList = indexGoods.list[0].content;
          this.hotsList = indexGoods.list[1].content;
          this.goodsList = indexGoods.list[2].content;
        } else {
          Toast.fail(indexGoods.msg);
        }
      })
    );
  },
  methods: {}
};
</script>

<style lang="" scoped>
.img {
  width: 100%;
  /* 200px */
  height: 4rem;
}
.gridTitle {
  font-size: 14px;
}
</style>
