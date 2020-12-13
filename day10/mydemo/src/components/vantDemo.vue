<template>
  <div>
    <h1>这是vant案例</h1>
    <!-- 按钮 -->
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info" size="mini">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning" icon="friends-o">警告按钮</van-button>
    <van-button type="danger">删除</van-button>
    <div>
      <van-image
        width="100"
        height="100"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        round
      />
    </div>
    <!-- 移动端表单 -->
    <div>
      <!-- 输入任意文本 -->
      <van-field v-model="text" label="文本" />
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="tel" type="tel" label="手机号" />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field v-model="digit" type="digit" label="整数" />
      <!-- 允许输入数字，调起带符号的纯数字键盘 -->
      <van-field v-model="number" type="number" label="数字" />
      <!-- 输入密码 -->
      <van-field v-model="password" type="password" label="密码" />
    </div>
    <!-- 登录页 -->
    <van-form @submit="login">
      <van-field
        v-model="userInfo.name"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="userInfo.pass"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <!-- 搜索框 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <van-empty description="描述文字" />
    <van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow

/>
<van-tabbar v-model="active" active-color="red" inactive-color="#ccc">
  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
//引入toast
import { Toast } from "vant";
export default {
  data() {
    return {
        active:0,
        value:'',
      text: "",
      tel: "",
      digit: "",
      number: "",
      password: "",
      userInfo:{
          name:'',
          pass:''
      }
    };
  },
  mounted() {
    Toast({
      message: "自定义图标",
      icon: "like-o"
    });
  },
  methods: {
      login(){
          console.log('登录')
      }
  },
};
</script>

<style lang="" scoped></style>
