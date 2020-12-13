//引入express框架
let express = require("express");
//引入vue的核心库
let Vue = require("vue");
//调用express()方法和属性
let app = express();
//创建一个实例化的VUE
let appVue = new Vue({
    data:{
        msg:'这个服务端渲染，挺麻烦'
    },
  template: "<div><h1>我是服务器模板</h1><h1>{{msg}}</h1></div>",
});
//创建一个render
//结合我们已有的SSR 服务端插件
let renderder = require("vue-server-renderer").createRenderer();
console.log(renderder, "渲染");

//渲染成字符串
renderder.renderToString(appVue,content, (err, html) => {
  //错误拦截
  if (err) {
    throw err;
  }
  //创建一个get
  app.get("/", (req, res) => {
    res.send(html);
   
  });
  console.log(html)
});

//监听
app.listen(4200, () => {
  console.log("=====服务器正在运行======");
});
