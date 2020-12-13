<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      @click-left="$router.back()"
      :title="$route.meta.name"
      left-text="返回"
      left-arrow
    >
    </van-nav-bar>
    <!-- 个人中心详情 -->
    <div class="userInfo" v-if="!userInfo">
      <!-- 头像 -->
      <van-image
        round
        width="2.4rem"
        height="2.4rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <!-- 姓名 -->
      <van-cell class="username">
        XXX
      </van-cell>
      <van-button @click="$router.push('/login')" type="info"
        >未登录，请登录</van-button
      >
    </div>
    <div class="userInfo" v-else>
      <!-- 头像 -->
      <van-image
        round
        width="2.4rem"
        height="2.4rem"
        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2600290371,258899432&fm=26&gp=0.jpg"
      />
      <!-- 姓名 -->
      <van-cell class="username">
        {{userInfo.nickname}}
      </van-cell>
      <van-button @click="quit" type="info"
        >退出登录</van-button
      >

      <div>
          <van-cell title="地址管理" icon="location-o" />
          <van-cell title="我的钱包" icon="balance-list-o" />
          <van-cell title="我的优惠券" icon="coupon-o" />
          <van-cell title="我的二维码" icon="aim" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: ""
    };
  },
  mounted() {
    this.userInfo = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : '';
      console.log(this.userInfo,'哈哈哈哈')
  },
  methods: {
      //退出登录事件
      quit(){
          //删除存储
          sessionStorage.removeItem('userInfo')
          this.$router.push('/login')
      }
  },
};
</script>

<style lang="" scoped>
/* .van-image{
    width: 2.4rem;
    height: 2.4rem;
} */
.userInfo {
  text-align: center;
}
.van-cell__value {
  text-align: center !important;
}
.van-cell{
    text-align: left;
}
</style>
