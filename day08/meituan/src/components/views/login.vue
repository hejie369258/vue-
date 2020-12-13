<template>
  <div>
    <h1>欢迎登录！！！</h1>
    <div>用户名：<input type="text" v-model='userInfo.username' /></div>
    <div>密码：<input type="text" v-model="userInfo.password" /></div>
    <div>
      <button @click='login'>登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        userInfo:{
            username:'',
            password:''
        }
    };
  },
  methods: {
      //封装一个登录事件
     login(){
          if(this.userInfo.username=='' || this.userInfo.password==''){
              alert('请输入用户名或密码')
          }else{
              //调取接口
              alert('登录成功')
              //登录成功之后，把状态存储到本地存储中
              localStorage.setItem('isLogin',true)
              //登录成功之后跳转到首页
              this.$router.push('/home')
          }
     }
  },
};
</script>

<style lang="" scoped></style>
