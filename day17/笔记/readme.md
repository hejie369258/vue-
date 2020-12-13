### day17笔记

### 课程回顾

#### 1、ts的基本应用

ts它是js超集，它严格定义了数据类型。

* 基本的数据类型定义

* 函数 

  * 没有返回值 void 和any
  * 有返回值 any 其他的基本数据类型

* 类

  * 基本类

  * 派生类（子类）

  * 类的修饰

    * public
    * private 
    * protected

  * 静态类

    static

  * 抽象类

* 接口

  * 普通接口
  * 类的接口

* 装饰器

```js
//普通装饰器
//装饰器它就是一个普通函数，用来修饰类，它可以去修改或者添加类的属性和方法
//创建一个函数
function fn(obj:any){
    //obj是一个类
    console.log(obj,'谁')
    //通过装饰器给类添加属性或者方法
    obj.prototype.name = '李白'
}

//http的类 通过@去调用函数
@fn 
class Http{
    name:string|undefined
}
let h1 = new Http()


@fn
class Http1{
    name:string|undefined
}
let http = new Http1() 
console.log(http.name,'类11')


//有一些时候，你就想给装饰器传参数
//工厂模式案例
function fn1(params:any){
    //外层函数接收的是装饰器传递的参数
    console.log(params,'aaaaa')
    //返回的是类的内容
    return (obj:any)=>{
        //obj是类
        console.log(obj,'bbbbb')
        obj.prototype.name = params
    }
}

@fn1('蔡文姬')
class Http2{
    name:string|undefined
}
let http2 = new Http2()
console.log(http2.name,'http2')

@fn1('鲁班')
class Http3{
    name:string|undefined
}
let http3 = new Http3()


//属性装饰器
function fn2(params:any){
    //params 是调用装饰器的传参
    //obj 是调用装饰器的类
    //propName 属性装饰器修饰的属性名
    console.log(params,'aaaaa')
    return (obj:any,propName:any)=>{
        console.log(obj,'bbbbbb')
        console.log(propName,'bbbbbb')
        obj[propName] = params
    }
}

class Http4{
    @fn2('后裔') name:string|undefined
    @fn2('15') age:number|undefined
}

let http4 = new Http4()

//方法装饰器
function fn3(params:any){
    console.log(params,'aaaaaaa')
    return (obj:any,methodName:any,methodDe:any)=>{
        console.log(obj,'bbbbbbbb')
        console.log(methodName,'cccccccc')
        console.log(methodDe,'ddddddd')
    }
}
class Http5{
    @fn3('我是方法') getInfo(msg:any):any{

    }
}
let http5 = new Http5()
console.log(http5,'http5')
```



### 一、vue4.x脚手架的实现（结合ts）

```
在最新脚手架环境中拉取最新的项目
vue create 项目名称

启动服务：
npm run serve
```

#### 目录结构

```
node_modules 包管理
public 公共文件
src 主战场
```

#### data定义

```
{
	//类的作用域
	  //创建数据
  	name:string
  	constructor(){
   	 super()
    	this.name='蜀道难'
  	}
}
```

#### methods

```
{
  //定义方法
  getInfo(){
    console.log('方法被点击')
  }
}
```

#### 计算属性

```
  //计算属性
  get allPrice(){
    return 100
  }
```

#### 生命周期

```
必须要调用组件装饰器，否则无法触发
//类的装饰器之组件
@Component({

})


  mounted() {
    console.log('加载完成')
  }
```

#### 组件的嵌套

```
//引入组件
import vNav from '../components/vNav.vue'
//类的装饰器之组件
@Component({
  components:{
    vNav
  }
})

//视图中
   <v-nav></v-nav>
```

#### 创建一个组件

```vue
<template>
    <div>
        <h1>导航组件</h1>
    </div>
</template>
<script lang='ts'>
//引入组件装饰器 引入核心Vue类
import {Component,Vue } from 'vue-property-decorator'

//类的装饰器之组件
@Component({

})
export default class vNav extends Vue{

}
</script>
<style lang="" scoped>
    
</style>

```

#### 组件通信

##### 一、父传子

* 父组件

````
<v-nav aa="我是一个字符串" :name="dataList"></v-nav>
````

* 子组件

```
import {Prop } from 'vue-property-decorator'
export default class vNav extends Vue{
    @Prop() aa:any
    @Prop() name:any
}
```

##### 二、子传父

* 子组件

```
       <div>
            <button @click='toFather'>给父亲</button>
        </div>
        
//引入组件装饰器 引入核心Vue类
import {Emit } from 'vue-property-decorator'

    //Emit方法装饰器 传参，传入的参数，就是你的自定义事件名称
    @Emit('自定义事件名称')
    toFather(){
        console.log('给父亲的散文诗')
        return '散文诗'
    }
```

* 父组件

```
    <v-nav @自定义事件名称='toFather' ></v-nav>
    
      //接收子组件数据
  toFather(e:any){
    console.log(e,'数据源')
  }
```

#### watch监听（侦听器）

```js
    //浅监听
    @Watch('value')
    getValue(newVal:any){
        console.log(newVal,'新值')
    }
    //监听对象
    //深度监听@Watch()这个方法装饰器，有两个参数，一，监听的对象属性。二、配置对象
    @Watch('obj',{
        deep:true, //深度
        immediate:true //立即立刻
    })
    getObj(newVal:any){
        console.log(newVal,'新')
    }
```

#### 自定义的配置对象

vue.config.js

这个文件要修改一定要重启

```
//导出你的配置对象
module.exports={
    baseUrl:'',
    publicPath:'/',
    outputDir:'dist',
    devServer: {
       // proxy:'http://localhost:3000'
       proxy:{ //proxy 代理
           '/api':{
               target:'',
               changeOrigin:true,

           }
       }
      }
}
```



### 二、服务端渲染SSR

#### 官网地址：

```
https://ssr.vuejs.org/zh/
```

#### 概念：

```
Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记"激活"为客户端上完全可交互的应用程序。

服务器渲染的 Vue.js 应用程序也可以被认为是"同构"或"通用"，因为应用程序的大部分代码都可以在服务器和客户端上运行。
```

#### 特点

与传统的SPA单页应用相比

* 利于SEO优化
* 提高了运行速率
* 只能在Node.js环境下运行（缺点）

#### 下载方式

```
npm i vue-server-renderer
版本号：
+ vue-server-renderer@2.6.12
```



#### 创建Node.js服务器

下载express框架

```
npm i express
```

```js
//引入express框架
let express = require('express')
//调用express()方法和属性
let app = express() 
//监听
app.listen(4200,()=>{
    console.log('=====服务器正在运行======')
})
```

#### 在服务中创建模板

利用vue创建模板

npm install vue

```
//引入vue的核心库
let Vue = require("vue");
//实例化这个vue
let app = new Vue({
	template:'<div></div>'
})
```



### 三、Nuxt.js

#### 官网：

```
英文：
https://zh.nuxtjs.org/
中文：
https://www.nuxtjs.cn/
```

#### 概念：

```
NuxtJS 让你构建你的下一个 Vue.js 应用程序变得更有信心。这是一个 开源 的框架，让 web 开发变得简单而强大。

这个框架，一、创建普通客户端二、创建服务端

```

#### 下载：

```
npx nuxt create-nuxt-app 项目名称

要求： 
1、要在空文件夹中下载
2、不要起关键字为项目名称

进入到项目中启动
npm run dev 
```





### qs插件

```
一般post提交方式，后端要求的格式是：
{
	name:'',
	pass:''
}
有的后端要求的post提交方式是："name=''&age=''"
我们可以利用插件去，转化一下入参
```

#### 官网地址：

```
https://www.npmjs.com/package/qs
```

#### 下载方式：

```
npm install(i) qs
```

#### 应用

```
//引入qs转化插件
import qs from 'qs'
qs.stringify(被转化的对象)
```



====================================================

### React基本知识

#### 0、基本介绍

react是一个构建用户界面的一个js库。你可以把它当作一个js库去使用。

react是脸书（facebook），本是内部项目。

jsx语法糖，把html和js混合使用，但是浏览器无法解析jsx。我们通过babel去转译

vue 是 尤雨溪

Angular 谷歌开发 + 微软（ts）



#### 1.react 介绍

>React 是Facebook内部的一个JavaScript类库。（13年5月开源）
>React 可用于创建Web用户交互界面。
>React不是一个完整的MVC框架,最多可以认为是MVC中的V（View）,甚至React并不非常认可MVC开发模式。
>
>​	MVC（M model模型 V view视图 C controller 控制器）
>
>React 的设计思想极其独特,属于革命性创新,性能出众,代码逻辑却非常简单。
>React 引入了虚拟DOM（Virtual DOM）的机制。
>React 引入了组件化的思想。
>React 使用Facebook专门为其开发的一套语法糖--JSX（语法糖）。	   
>
>​	把js和html代码混合使用

---

#### 2.特点

>虚拟DOM
>
>​	概念： React不会直接操作真实的DOM，而是利用javascript的轻量级的对象去操作逻辑。这个对象我们就称之为虚拟dom
>
>组件化
>
>​	react在创建的过程中，就是利用组件的方式去进行创建
>
>JSX语法
>
>​	让html和js 混合使用

---

#### 3.优缺点

* 优点

> 组件化开发
> ​引入虚拟DOM,性能好,响应速度快
> JSX语法
> 单向数据绑定 Data Flow
> 跨浏览器兼容（有强大的API，兼容IE8也很轻松）
> 完善的生态圈和活跃的社区

* 缺点

> 不是完整MVC框架（在做大型的项目中就会出现弊端）
> 不适用于复杂的大型应用（react要结合其他的插件去实现开发）

#### 4、官网地址

```
https://react.docschina.org/
```

#### 5、下载安装（非脚手架）

###### cdn

* 开发环境

```
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

* 生产环境

```
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```

##### 6、原生的方式创建标签以及内容

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- 引入核心库 -->
    <!-- 先引入核心库 -->
    <script src="./js/react.js"></script>
    <!-- 引入dom库 -->
    <script src="./js/react-dom.js"></script>
  </head>
  <body>
    <!-- 创建一个容器 -->
    <div id="box"></div>
    <script>
      let el = document.getElementById("box");
      console.log(el, "谁");
      //   let con = React.createElement('h1',null,'这个方式也是有点麻烦！！')
      // let con = React.createElement('div',{className:'title'},'我是一个普通的标签！！！')
      let con = React.createElement(
        "div",
        { className: "title" },
        React.createElement("p", null, "我是一个段落")
      );
      //逻辑交互
      //React 大的对象库
      console.log(React, "核心库");
      console.log(ReactDOM, "dom库");
      //执行渲染函数
      /*       render它一共有三个参数
      第一个 你要渲染的内容
      第二个 容器的位置
      第三个 回调函数 callback 这个参数基本上不用，我们可以省略 */
      // ReactDOM.render(con,el,()=>{})
      ReactDOM.render(con, el);
    </script>

    <!-- 
    Warning: Invalid DOM property `class`. Did you mean `className`?
in div 
class不能直接在react标签中使用，如果用样式类名，我们只能用className
-->
  </body>
</html>

```

#### 7、jsx一些基本特点

```
      //jsx特点，把js和html 混合使用
      //jsx语法糖规定只能有一个根元素 root
      //jsx语法糖一定要有一个闭合标签
      //jsx语法糖，它遇见<>它会自动解析成html标签遇见{} 会解析成js语法
```

#### 8、安装脚手架

```
全局安装react脚手架的环境
npm install -g create-react-app

创建项目
create-react-app 项目名称
```

* 项目目录

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

