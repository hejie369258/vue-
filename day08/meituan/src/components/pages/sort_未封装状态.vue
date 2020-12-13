<template>
  <div>
    <h1>{{ $route.name }}</h1>
    <h1>音乐搜索</h1>
    <div>
      <input type="text" v-model="val" />
      <button @click="search">搜索</button>
    </div>
    <!-- 当搜索结果有值的时候，才去渲染界面 -->
    <ul v-if="resultList.length > 0">
      <li v-for="item in resultList" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
/* 
Access to XMLHttpRequest at 'https://query.asilu.com/weather/weather/?address=%E8%A5%BF%E5%AE%89' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. 
跨域问题：如何在脚手架中解决跨域问题？？？
在config文件夹下找到index.js文件
在proxyTable:{} 去配置解决跨域问题
{
    '/api':{
        target:'',//你要转化的目标地址
        changeOrigin:true,//是否跨域
        pathRewrite:{
            '^/api':''//你要转化的目标地址
        }
    }
}

一定要记得重启前端的服务器（脚手架）

*/
// http://www.ujiuye.tech:5000/search?keywords
export default {
  data() {
    return {
      val: "",
      resultList: []
    };
  },
  methods: {
    //天气搜索事件
    search() {
      //剔除掉搜索结果 空判断
      if (this.val == "") {
        alert("请属于要搜索的内容");
        return;
      }
      console.log(this.val, "关键字");
      //直接使用axios()
      /*            this.axios({
                url:'/api/search',
                params:{
                    keywords:this.val
                }
            })
            .then(res=>{
                //console.log(res,'搜索结果')
                if(res.data.code===200){
                    //比如密码错误，参数错误，都属于逻辑错误
                    this.resultList = res.data.result.songs
                }
            })
            .catch(err=>{
                //catch 捕获的时候http状态码非200的状态
                  console.log(err,'错误')
            }) */
      //直接调用get方法
      this.axios
        .get("/api/search", {
          params: {
            keywords: this.val
          }
        })
        .then(res => {
          console.log(res, "响应");
          if (res.data.code === 200) {
            //比如密码错误，参数错误，都属于逻辑错误
            this.resultList = res.data.result.songs;
          }
        })
        .catch(err => {
          cosnole.log(err, "错误捕获");
        });
    }
  }
};
</script>

<style lang="" scoped></style>
