

### day07

### 课程回顾

* 组件通信

  * 父子组件通信

  * 子父组件通信

    子组件要有一个触发事件，事件方法中利用$emit这个方法去触发事件，这里面的事件名，可以作为自定义事件去使用

  * 非父子组件通信

    1、单一事件管理（很少用）

    ​	 在main.js文件中，设置一个变量，并把这个变量赋值给Vue原型

    ​	在使用的时候，谁传值，在谁方法中触发一个事件，原型变量.$emit。接

    ​	收方通过原型变量.$on去设置监听，实时接收数据

    2、Vuex状态管理

    3、离线存储

    ​	loccalStorage和sessionStorage都可以实现组件通信

    ​	loccalStorage是永久性存储，也会叫持久化存储

* ref属性

  快速获取到dom。同时在组件嵌套中，可以获取到子组件的属性和方法

* slot槽口

  想要在组件标签之间显示内容，要开一个槽口

  1、匿名槽口（默认槽口）

  2、具名槽口 （每一个槽口都可以用name属性去标识，注意新老语法的使用）

  3、作用域槽口

  ​	当你在槽口中想要使用子组件标签的数据或者其他属性的时候

* 引入插件，jq

  * 局部引入
  * 全局引入

* is属性

  * 动态组件切换的时候

    <component is='组件名称'></component>

    <component :is='变量'></component>

    <标签名 is='组件名称'></标签>

    <标签名 :is='组件名称'></标签>

---

### 在vue中组件渲染的方式有两种

一、组件的嵌套

二、路由的切换

---

### 路由

路由是Vue的一个插件，叫vue-router

#### 官网地址：

```
https://router.vuejs.org/zh/
```

#### 概念：

```
Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌
```

#### 下载安装

* 下载脚手架并自动安装

  下载脚手架的时候，它提示我是否安装vue-router，如果你选择yes，它就自动集成到脚手架

* 单独下载

  * 下载命令

    npm install(i) vue-router

  * 路由文件的使用

    * 在src下创建一个router文件夹，在下面创建一个index.js

    ```js
    //引入vue核心库
    import Vue from 'vue'
    //引入路由插件
    import Router from 'vue-router'
    
    //调用路由插件
    Vue.use(Router)
    
    //导出
    //router 路由控制器   route 路线
    const router = new Router({
      routes: [
      ]
    })
    export default router
    
    ```

    * 在main.js中引入封装好的路由模块

    ```js
    //引入路径的时候，只引入到文件夹名，它会去自动去找文件夹下的index.js文件
    import router from './router'
    
    //在实例中注册
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
    
    ```

  

#### 路由的基本应用

* 创建你要渲染的组件
* 在路由文件中引入并设置路线

```js
//引入要使用的组件
import Home from '../components/home'
import Cart from '../components/cart'
import Mine from '../components/mine'

  routes: [
    {
      path:'/home',//地址
      component:Home
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/mine',
      component:Mine
    }
  ]

```

* 设置路由出口

你想要在哪里渲染就在哪里加

```vue
<router-view />
```

* 创建用户切换的视图

```vue
    <!-- 切换的视图  to属性一定要和路由地址匹配-->
    <router-link to='/home'>首页</router-link>
    <router-link to='/cart'>购物车</router-link>
    <router-link to='/mine'>个人中心</router-link>
```

#### 重定向

```
    {//重定向
      path:'*',
      redirect:'/home'
    }
```

#### 路由的嵌套

##### 二级路由没有加'/'

* router =>index.js

```js
//引入vue核心库
import Vue from 'vue'
//引入路由插件
import Router from 'vue-router'
//引入一级路由
import Index from '@/components/index'
import Play from '@/components/play'
//引入二级路由
import Home from '@/components/home'
import Cart from '@/components/cart'
import Mine from '@/components/mine'

//调用路由插件
Vue.use(Router)

//导出
//router 路由控制器   route 路线
const router = new Router({
  routes: [
    {
      path:'/index',
      component:Index,
      children:[
        //如果二级路由地址加'/',那么访问地址就省略了一级路由path.访问地址：'/二级路由path'.如果二级路由地址没有加'/',那么访问地址就要带着一级路由path访问地址：'/一级路由path/二级路由path'
        {
          path:"home",
          component:Home
        },
        {
         path:'cart',
         component:Cart 
        },
        {
         path:'mine',
         component:Mine 
        },
        {
          path:'',
          redirect:'/index/home'
        }
      ]
    },
    {
      path:'/play',
      component:Play
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})
export default router

```

* app.vue

```vue
<template>
  <div id="app">
    <!-- 这里面什么都不要写 -->
    <!-- 一级路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
```

* index.vue

```vue
<template>
  <div>
    <!-- <h1>用来装载二级路由</h1> -->
    <div>我是顶部导航</div>
    <!-- 视图切换 -->
    <router-link to="/index/home">首页</router-link>
    <router-link to="/index/cart">购物车</router-link>
    <router-link to="/index/mine">个人中心</router-link>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="" scoped></style>
```




##### 二级路由加上'/'

* router =>index.js

```js
//引入vue核心库
import Vue from 'vue'
//引入路由插件
import Router from 'vue-router'
//引入一级路由
import Index from '@/components/index'
import Play from '@/components/play'
//引入二级路由
import Home from '@/components/home'
import Cart from '@/components/cart'
import Mine from '@/components/mine'

//调用路由插件
Vue.use(Router)

//导出
//router 路由控制器   route 路线
const router = new Router({
  routes: [
    {
      path:'/index',
      component:Index,
      children:[
        //如果二级路由地址加'/',那么访问地址就省略了一级路由path.访问地址：'/二级路由path'.如果二级路由地址没有加'/',那么访问地址就要带着一级路由path访问地址：'/一级路由path/二级路由path'
        {
          path:"/home",
          component:Home
        },
        {
         path:'/cart',
         component:Cart 
        },
        {
         path:'/mine',
         component:Mine 
        },
        {
          path:'',
          redirect:'/home'
        }
      ]
    },
    {
      path:'/play',
      component:Play
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})
export default router

```

* app.vue

```vue
<template>
  <div id="app">
    <!-- 这里面什么都不要写 -->
    <!-- 一级路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
```

* index.vue

```vue
<template>
  <div>
    <!-- <h1>用来装载二级路由</h1> -->
    <div>我是顶部导航</div>
    <!-- 视图切换 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/cart">购物车</router-link>
    <router-link to="/mine">个人中心</router-link>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="" scoped></style>
```

#### router-link标签的属性

```
to: 与path地址一致
tag: 去改变默认的a标签
activeClass： 点击之后添加样式
```

#### 路由跳转之query传递参数

* 直接写在to属性中

```
:to="'/path?自定义参数名'+要传递的变量"
```

#### 路由跳转之动态路由传递参数

**如果用到动态路由，一定要修改路由文件！！！**

##### router=>index.js

```
    {
      path:'/movieDetail/:id',
      component:movieDetail
    },
```

##### 视图部分

```vue
      <li class="infoBox" v-for="item in movieList" :key="item.id">
        <router-link tag="div" :to="'/movieDetail/'+item.id">
          <img class="img" :src="item.img" alt="" />
          <p>电影名称：{{ item.name }}</p>
        </router-link>
      </li>
```

#### 编程式导航

* push()

```
这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL

往历史记录中添加一条记录
this.$router.push('path地址')
```

* replace()

```
跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

往历史记录中替换一条记录
this.$router.replace('path地址')
```

* go()

```
这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)。
go(N)
n是数值
-1 上一页 0当前 1下一页
this.$router.go(-1)
```

* back()

```
返回
this.$router.back()
```



```
编程式导航的底层原理是根据，原生js,window.history 它的一些API方法而来
地址：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/history

比如 push()来源于 pushState（）
replace()来源于 replaceState（）


你也许注意到 router.push、 router.replace 和 router.go 跟 window.history.pushState、 window.history.replaceState 和 window.history.go好像， 实际上它们确实是效仿 window.history API 的。

原生js history地址：https://developer.mozilla.org/en-US/docs/Web/API/History_API

```

#### 编程式导航传query

##### 视图

```
      <li class="infoBox" v-for="item in foodList" :key="item.id" @click='goDetail(item.id)'>
        <img class="img" :src="item.img" alt="" />
        <p>电影名称：{{ item.name }}</p>
      </li>
```

##### 代码

```
      //封装跳转详情事件  query
    //   goDetail(id){
    //       //利用编程式导航 实现 query传参
    //      // this.$router.push('/foodDetail?id='+id)
    //      this.$router.push({
    //          path:'/foodDetail',
    //          query:{
    //              id
    //          }
    //      })
    //   }
```

##### 取值

```
  <h1>接收query参数是---{{$route.query.id}}</h1>
```



#### 编程式导航传动态路由

##### 要修改路由文件

```js
    {
      path:'/foodDetail/:id',
      //name 是路由命名
      name:'foodDetail',
      component:foodDetail
    },
```

##### 视图

```
      <li class="infoBox" v-for="item in foodList" :key="item.id" @click='goDetail(item.id)'>
        <img class="img" :src="item.img" alt="" />
        <p>电影名称：{{ item.name }}</p>
      </li>
```

##### 代码

```
    //封装跳转详情事件  动态路由
    goDetail(id){
        //this.$router.push('/foodDetail/'+id)
        this.$router.push({
            name:'foodDetail',
            params:{
                id
            }
        })
    }
```

##### 取值

```
         <h1>接收params参数是---{{$route.params.id}}</h1>
```







---

### vue-devtools-dev插件

这是一个vue的调试工具

#### 官网地址：

```
https://github.com/vuejs/vue-devtools
```

#### 谷歌浏览器引入步骤：

拿到这个插件，解压缩，然后打开谷歌浏览器=>更多工具=>扩展应用程序，打开开发者模式=>加载已解压的扩展应用程序=>D:\vue-devtools-dev\packages\shell-chrome=>添加成功之后重启浏览器



---

### 完整的URL地址

```text
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │          host          │           path            │ hash  │
│          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │    hostname     │ port │ pathname │     search     │       │
│          │  │                     │                 │      │          ├─┬──────────────┤       │
│          │  │                     │                 │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          ├─────────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
│                                              href                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
```



----

### 作业！！！

一、整理笔记

二、今天案例敲两遍

三、周末作业，完成小U商城移动端重构，把静态页重构到vue中

四、每日监测







### 面试题

##### 说说你对 SPA 单页面的理解，它的优缺点分别是什么？

> SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。
> 优点：用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；基于上面一点，SPA 相对对服务器压力小；前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；
> 缺点：初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。

##### 单页应用和多页应用的区别

> 单页面应用（SinglePage Web Application，SPA）多页面应用（MultiPage Application，MPA）
> 组成一个外壳页面和多个页面片段组成多个完整页面构成资源共用(css,js)共用，只需在外壳部分加载不共用，每个页面都需要加载
> 刷新方式
> 页面局部刷新或更改
> 整页刷新
> url 模式
> a.com/#/pageone  a.com/#/pagetwo
> a.com/pageone.html  a.com/pagetwo.html
> 用户体验
> 页面片段间的切换快，用户体验良好
> 页面切换加载缓慢，流畅度不够，用户体验比较差
> 转场动画
> 容易实现
> 无法实现
> 数据传递
> 容易
> 依赖 url传参、或者cookie 、localStorage等
> 搜索引擎优化(SEO)
> 需要单独方案、实现较为困难、不利于SEO检索 可利用服务器端渲染(SSR)优化
> 实现方法简易
> 试用范围
> 高要求的体验度、追求界面流畅的应用
> 适用于追求高度支持搜索引擎的应用 
> 开发成本
> 较高，常需借助专业的框架
> 较低 ，但页面重复代码多
> 维护成本
> 相对容易
> 相对复杂