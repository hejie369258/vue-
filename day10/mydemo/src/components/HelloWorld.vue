<template>
  <div class="hello">
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger" plain>danger</mt-button>
    <hr />
    <mt-swipe :auto="1000">
      <mt-swipe-item>5555</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <!-- 底部导航 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <img src="" alt="">
        首页
      </mt-tab-item>
      <mt-tab-item id="分类">
        分类
      </mt-tab-item>
      <mt-tab-item id="购物车">
        购物车
      </mt-tab-item>
      <mt-tab-item id="个人中心">
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      selected:'首页'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-swipe {
  height: 200px;
}
</style>
