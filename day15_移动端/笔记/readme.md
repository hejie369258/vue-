### 移动端项目流程

#### 一、创建移动端项目（vue-cli2.x）

```
vue init webpack mydemo(项目名称)
```

#### 二、分析产品原型图创建出相应组件和路由

```
一级路由
index.vue(承载二级路由)
login.vue
register.vue
goodsDetail.vue

二级路由
home.vue
cart.vue
sort.vue
mine.vue
```

#### 三、创建当前项目所需的目录结构并下载相关插件

##### 技术栈

```
vant UI框架
axios http库用于数据交互
vue-router 路由插件
vuex 状态管理
stylus css预处理器 + stylus-loader@3.0.2 加载器
animate.css  css动画库

+ axios@0.21.0
+ vuex@3.5.1
+ vant@2.10.14
```

##### 项目目录

```
src
	components 组件（共通组件）
	pages	一级组件
	views	二级组件
	filter	过滤器
	util	实用工具
	commons	共通组件
	store	仓库
	router	路由
```

#### 四、完成index.vue页面的底部导航

```vue
    <van-tabbar route v-model="active" active-color="red" inactive-color="#07c160">
      <van-tabbar-item to='/home' icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to='/sort' icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to='/cart' icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to='/mine' icon="friends-o">个人中心</van-tabbar-item>
    </van-tabbar>
```

#### 五、完成home组件的渲染

```vue
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
      <van-grid-item text="商品分类">
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
    this.getBannerList();
    //组件加载获取商品信息
    this.getIndexGoodsList();
  },
  methods: {
    //封装一个获取banner函数
    getBannerList() {
      getBanner().then(res => {
        console.log(res, "响应");
        if (res.code == 200) {
          this.bannerList = res.list;
        }
      });
    },
    //封装获取商品信息
    getIndexGoodsList() {
      getIndexGoods().then(res => {
        if (res.code == 200) {
          this.newsList = res.list[0].content;
          this.hotsList = res.list[1].content;
          this.goodsList = res.list[2].content;
        }
        console.log(res, "商品信息");
      });
    }
  }
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

```

##### axios的并发处理

```
import axios from 'axios'
axios.all([接口名1，接口名2])
.then(axios.spread((响应1,响应2)=>{

}))
```

代码

```js
import { getBanner, getIndexGoods } from "../util/axios";
//单独调用axios
import axios from "axios";
//调用轻提示
import { Toast } from "vant";

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
  
```

#### 六、分类页面

```vue
<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      @click-left="$router.back()"
      :title="$route.meta.name"
      left-text="返回"
      left-arrow
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="cateInfo">
      <!-- 左侧边栏 循环一级商品分类 -->
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item v-for='item in firstList' :key='item.id' :title="item.catename" />
      </van-sidebar>
      <!-- 二级分类宫格 循环二级商品分类 -->
      <van-grid :border="false" :column-num="3">
        <van-grid-item v-for='item in secondList' :key='item.id'>
          <van-image :src="item.img ? $imgUrl+item.img :'https://img.yzcdn.cn/vant/apple-1.jpg'" />
          <span class="title">{{item.catename}}</span>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
//调取接口
import { getCateTree } from "../util/axios";
export default {
  data() {
    return {
      activeKey: 0,
      firstList:[],//一级分类数组
      secondList:[],//二级分类数组
    };
  },
  mounted() {
    //挂载
    //   调取分类接口
    this.getCateTreeList();
  },
  methods: {
    //封装一个切换侧边边栏的监听事件
    onChange(e) {
      console.log(this.activeKey, "事件源");
      this.secondList = this.firstList[e].children
    },
    //封装一个调取分类树的接口
    getCateTreeList() {
      getCateTree().then(res => {
        console.log(res, "分类树结构");
        if(res.code==200){
            this.firstList = res.list
            this.secondList = res.list[this.activeKey].children
        }
      });
    }
  }
};
</script>

<style lang="" scoped>
.cateInfo{
display: flex;
}
.van-grid{
    flex:1
}
.title{
    font-size: 14px;
}
</style>

```

