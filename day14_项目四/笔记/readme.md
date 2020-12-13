### 富文本编辑在vue中的使用

#### 官网地址：

```
官网：http://www.wangeditor.com/
文档：http://www.wangeditor.com/doc/
```

#### 下载

```
npm install(i) wangeditor
```

#### 实例化一个富文本编辑

```
视图承载富文本编辑器
<div id='editor'></div>

import 变量 from 'wangeditor' 

this.data变量名 = new 变量('标签的id #editor')
this.data变量名.create()

//设置内容
this.data变量名.editor.txt.html(this.form.内容)

```

#### 获取你富文本编辑器的内容

```
//获取
this.data变量名.editor.txt.html()
```

---

### 添加/删除动态表单项

* 视图

``` vue
 <el-form-item
          v-for="(item, index) in arrAttr"
          :key="index"
          label="规格属性:"
          :label-width="formLabelWidth"
        >
          <el-input
            class="inputW"
            v-model="item.value"
            autocomplete="off"
          ></el-input>
          <el-button v-if="index == 0" @click="addAttr" type="primary"
            >新增规格属性</el-button
          >
          <el-button v-else @click="delAttr(item)" type="danger">删除</el-button>
        </el-form-item>
```

* 逻辑功能

```js
  data() {
    return {
      //定义一个规格属性数组
      arrAttr: [
        {
          value: ""
        }
      ],
     }
     
    //添加动态表单事件
    addAttr() {
      //最多让用户添加6个
      if (this.arrAttr.length <= 6) {
        //往数组中添加数据
        this.arrAttr.push({
          value: ""
        });
      } else {
        this.$message.warning("最多只能添加6项！！！");
      }
    },
    //删除冬天表单事件
    delAttr(item) {
      var index = this.arrAttr.indexOf(item);
      if (index !== -1) {
        this.arrAttr.splice(index, 1);
      }
    },
```

---

### 会员管理

逻辑： 这个功能点与移动端注册有关，当移动端注册之后，后台管理才有数据，

注册成功之后再测试

---

### token

```
1、Token的引入：Token是在客户端频繁向服务端请求数据，服务端频繁的去数据库查询用户名和密码并进行对比，判断用户名和密码正确与否，并作出相应提示，在这样的背景下，Token便应运而生。

2、Token的定义：Token是服务端生成的一串字符串，以作客户端进行请求的一个令牌，当第一次登录后，服务器生成一个Token便将此Token返回给客户端，以后客户端只需带上这个Token前来请求数据即可，无需再次带上用户名和密码。

3、使用Token的目的：Token的目的是为了减轻服务器的压力，减少频繁的查询数据库，使服务器更加健壮。
```





系统逻辑：

前端：登录之后，输入用户名密码，调取登录接口

后端： 等到前端的传参，去数据库搜索。由于频繁验证，给服务器造成压力。这个时候出现了一个概念叫token (令牌)。token会过期。

---

### 一、优化问题之侧边栏与登录不一致

思路：

```
登录之后，把内容存储到vuex,然后侧边栏自动渲染
```

* store=>index.js

```js
   state:{
        // userInfo:null
        //如果本地存储有值，把字符串数据转化成对象使用
         userInfo:sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : null
    },
    getters:{
        //返回一个state的userInfo
        getUserInfo(state){
            return state.userInfo
        }
    },
    mutations:{
        //修改userInfo的state
        CHANGE_USER(state,payload){
            state.userInfo = payload
            //如果这个payload有值 我们就存到本地存储否则就删除本地存储
            if(payload){
                sessionStorage.setItem('userInfo',JSON.stringify(payload))
            }else{
                sessionStorage.removeItem('userInfo')
            }
        }
    },
    actions:{
        //创建一个修改userInfoactions
        changeUserInfoAction({commit},payload){
            commit('CHANGE_USER',payload)
        }
    },
```

* nav.vue

```vue
<template>
    <div>
          <el-menu
            :default-active="defaultActive"
            class="el-menu-vertical-demo"
            background-color="#585858"
            text-color="#fff"
            active-text-color="#FF8000"
            unique-opened
            router
          >
            <el-menu-item index="/home">
              <i class="el-icon-s-grid"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu :index="item.id.toString()" v-for="item in getUserInfo.menus" :key='item.id'>
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item :index="menu.url" v-for="menu in item.children" :key='menu.id'>
                <span slot="title">{{menu.title}}</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
          defaultActive:'/home'
        };
    },
    mounted() {
      this.defaultActive = this.$route.path
    },
    computed: {
      //利用登录之后的用户信息
      ...mapGetters(['getUserInfo'])
    },
};
</script>

<style  lang="stylus" scoped>
.el-menu
  height 90vh
</style>

```

* login.vue

```js
          //调取登录接口
          getUserLogin(this.loginForm)
          .then(res=>{
            if(res.data.code==200){
              this.$message.success(res.data.msg))
              //登录之后触发修改state的UserInfo的action
              this.changeUserInfoAction(res.data.list)
              //跳转
              this.$router.push('/home')
            }else{
              this.$message.error(res.data.msg)
            }
          })
```



### 二、优化问题之用知道地址直接输入地址，渲染页面

```
利用路由独享守卫
```

* router =>index.js

```js
import Vue from "vue";
import Router from "vue-router";
//引入仓库
import Store from '../store'

// 封装一个函数，用来检测是否存在该地址
//some 有一个真就返回真
function hasUrl(url){
  return Store.state.userInfo.menus_url.some(item=>item ==url)
}

Vue.use(Router);

export let indexRoutes = [
  {
    path: "/menu",
    component: () => import("@/views/menu/menu"),
    name: "菜单管理",
    beforeEnter: (to, from, next) => {
      hasUrl('/menu') ? next() : next('/home')
    }
  },
  {
    path: "/role",
    component: () => import("@/views/role/role"),
    name: "角色管理",
    beforeEnter: (to, from, next) => {
      hasUrl('/role') ? next() : next('/home')
    }
  },
  {
    path: "/user",
    component: () => import("@/views/user/user"),
    name: "管理员管理" ,
    beforeEnter: (to, from, next) => {
      hasUrl('/user') ? next() : next('/home')
    }
  },
  {
    path: "/cate",
    component: () => import("@/views/cate/cate"),
    name: "商品分类",
    beforeEnter: (to, from, next) => {
      hasUrl('/cate') ? next() : next('/home')
    }
  },
  {
    path: "/specs",
    component: () => import("@/views/specs/specs"),
    name: "商品规格",
    beforeEnter: (to, from, next) => {
      hasUrl('/specs') ? next() : next('/home')
    }
  },
  {
    path: "/goods",
    component: () => import("@/views/goods/goods"),
    name: "商品管理",
    beforeEnter: (to, from, next) => {
      hasUrl('/goods') ? next() : next('/home')
    }
  },
  {
    path: "/banner",
    component: () => import("@/views/banner/banner"),
    name: "轮播图管理",
    beforeEnter: (to, from, next) => {
      hasUrl('/banner') ? next() : next('/home')
    }
  },
  {
    path: "/member",
    component: () => import("@/views/member/member"),
    name: "会员管理",
    beforeEnter: (to, from, next) => {
      hasUrl('/member') ? next() : next('/home')
    }
  },
  {
    path: "/seck",
    component: () => import("@/views/seck/seck"),
    name: "秒杀管理",
    beforeEnter: (to, from, next) => {
      hasUrl('/seck') ? next() : next('/home')
    }
  }
];
console.log(...indexRoutes,'展开')

const router= new Router({
  routes: [
    {
      path: "/login",
      component: () => import("@/pages/login")
    },
    {
      path: "/index",
      component: () => import("@/pages/index"),
      children: [
        {
          path: "/home",
          component: () => import("@/views/home")
        },
        ...indexRoutes,
        {
          //二级路由重定向
          path: "",
          redirect: "/menu"
        }
      ]
    },
    {
      //重定向
      path: "*",
      redirect: "/login"
    }
  ]
});

//全局导航守卫之登陆拦截
/* 
如果你去的是登录，那么就next
如果去的不是登录，那么就判断你是否登录过。登录过，next
否则全部跳转到登录页
*/
router.beforeEach((to,from,next)=>{
  if(to.path=='/login'){
    next()
    return
  }
  if(Store.state.userInfo){
    next()
    return
  }
  next('/login')
})

// 导出路由
export default router

```



### 三、退出登录

* index.vue

```js
视图

      <el-header>
        XXX大型后台管理项目
        <div v-if="getUserInfo" class="userInfo">
        欢迎  {{getUserInfo.username}} 登录本系统
          <el-button @click="logout" type='danger' size='small'>退出</el-button>
        </div>
        </el-header>
        
        
逻辑
import {mapGetters,mapActions} from 'vuex'
//引入nav导航组件
import vNav from "../components/nav";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getUserInfo"])
  },
  components: {
    vNav
  },
  methods: {
    ...mapActions(['changeUserInfoAction']),
    //logout退出事件
    logout(){
      this.changeUserInfoAction(null)
      //退出之后强制跳转登录页
      this.$router.push('/login')
    }
  },
};
```





### 

---

### axios拦截器

* 请求拦截

```
import axios from axios

axios.interceptors.request.use(req => {
//全局拦截请求，可以在请求头添加后端的需求
return req
})
```

* 响应拦截

```
import axios from axios

axios.interceptors.response.use(res => {
//全局拦截响应，拦截错误信息或者返回的对象格式
return res
})
```

---

### 数据图表

一张图片胜过千万句话

#### highChart

##### 官网地址：

```
https://www.highcharts.com.cn/
```

##### 概念：

```
兼容 IE6+、完美支持移动端、图表类型丰富、方便快捷的 HTML5 交互性图表库
```

##### 下载方式：

* CDN服务器

```
https://code.highcharts.com.cn/index.html
```

* 通过官网地址下载

```
https://www.highcharts.com.cn/download
```

* 通过npm下载

```
npm install highcharts

版本号：+ highcharts@8.2.2
```

##### 基本应用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>highchart案例</title>
    <!-- 第一步引入核心库 -->
    <script src="./node_modules/highcharts/highcharts.js"></script>
    <style>
      #box {
        width: 700px;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <!-- 二 制定一个容器并指定其大小 -->
    <div id="box"></div>
    <script>
      // 图表配置
      var options = {
        chart: {
          type: "bar", //指定图表的类型，默认是折线图（line）
        },
        credits: {
          //版权信息
          enabled: false,
        },
        title: {
          text: "这个简单图表", // 标题
        },
        xAxis: {
          categories: ["原生js", "原生的node", "vue", "vuex", "vue-router"], // x 轴分类
        },
        yAxis: {
          title: {
            text: "学习的天数", // y 轴标题
          },
        },
        //如果数据是动态，就把返回来的数组替换就ok
        series: [
          //数据组
          {
            // 数据列
            name: "小凳子", // 数据列名
            data: [0, 1.5, 14, 7, 20], // 数据
          },
          {
            name: "小芳",
            data: [2, 3, 5, 7, 8],
          },
        ],
      };
      // 图表初始化函数
      //chart 这个方法中有两个参数，第一个参数是容器的id，第二个参数是你的图表配置项
      var chart = Highcharts.chart("box", options);
    </script>
  </body>
</html>

```



#### Echart

##### 官网地址：

```
http://echarts.apache.org/zh/index.html
```

##### 下载方式:

* 官网下载

```
https://echarts.apache.org/zh/download.html
```

* github

```
https://github.com/apache/incubator-echarts/releases
```

* npm

```
npm install echarts

版本号： + echarts@4.9.0
```

* cdn 

```
https://www.jsdelivr.com/package/npm/echarts
```

##### 基本应用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>echart案例</title>
    <!-- 第一步先引入 -->
    <script src="./node_modules/echarts/dist/echarts.min.js"></script>
    <style>
        #container{
            width: 700px;
            height: 500px;
        }
    </style>
</head>
<body>
    <!-- 二、创建容器，并指定其大小 -->
    <div id="container"></div>
    <!-- 三逻辑交互 -->
    <script>
        //1初始化
      let myChart =  echarts.init(document.getElementById('container'))

      //创建图表配置项
      let options = {
        title: {
                text: '双11销售量' //标题
            },
            tooltip: {},
            legend: { //图例 这个东西一定要和你数据中的name属性一致
                data:['销售量']
            },
            xAxis: { //x轴坐标
                data: ["苹果","梨","榴莲","车厘子","橘子"]
            },
            yAxis: {},
            series: [{ //数据列
                name: '销售量',
                type: 'bar',
                data: [15, 200, 360, 100, 100, 250]
            }]
      }
      //给容器设置配置项
      myChart.setOption(options)
    </script>
</body>
</html>
```



#### Echart结合VUE脚手架使用

下载安装

npm install echarts

* 局部引入（局部引入）

```vue
<template>
  <div>
    <h1>我是首页</h1>
    <div id="con"></div>
  </div>
</template>

<script>
//引入数据图表库
import Echart from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    //挂载
    let myChart = Echart.init(document.getElementById("con"));
    let options = {
        title:{
            text:"本系统的周访问量",
            textStyle:{
                color:'red',
                fontSize:30
            },
             textAlign:'auto'
        },
      xAxis: {
        type: "category",
        data: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [66, 500, 999, 1400, 800, 500, 1500],
          type: "line"
        }
      ]
    };
    //设置创建好的配置项
    myChart.setOption(options)
  }
};
</script>

<style lang="" scoped>
#con {
  width: 800px;
  height: 600px;
  margin: 20px auto;
}
</style>

```



* 全局引入
* main.js

```
//全局引入ECharts
import Echart from 'echarts'

Vue.prototype.$eh = Echart
```



#### 百度地图

##### 官网地址：

```
开放平台：
http://lbsyun.baidu.com/
开发文档：
http://lbsyun.baidu.com/index.php?title=jspopular3.0
坐标拾取器：
https://api.map.baidu.com/lbsapi/getpoint/index.html
```



----

### git

代码版本管理

#### 代码管理工具

##### svn

这个也是代码管理工具，它不是分布式系统，市面上目前用的不多

必须要创建一台独立服务器，你到了公司会有运维人员或者你的领导发给你账号密码

##### 官网地址：

```
https://tortoisesvn.net/

教程地址：
https://www.runoob.com/svn/tortoisesvn-intro.html
```

---

##### git

分布式代码管理系统，每一个人都电脑都可以成为一台服务器，它利用Linux语法



#### gitHub地址

```
https://github.com/
```

#### git网址：

```
https://git-scm.com/downloads

下载完，傻瓜式安装，下一步下一步
```

#### 使用命令（基本）

鼠标右键点击git_Bash_here，打开命令窗口客户端

* 目录地址

```
pwd
```

* 创建一个文件夹

```
mkdir
```

* 清除命令

```
clear
```

* 进入到某一个文件

```
cd XXX
```

* 初始化

```
git init
```

* 查看状态

```
git status
```

* 文件以及文件详情

```
ls 查看文件

ll 查看文件详情
```

* 查看配置列表

```
git config --list
```

* 第一次下载git的同学要设置你的git账号和密码

```
git config --global user.email 邮箱
git config --global user.name 用户名
```

----

#### 上传项目的步骤

这个步骤你在公司只操作一次，有可能还不是你操作。创建一个新仓库的时候才会操作这个命令

```
1、git init 初始化
2、git add . (.代表添加所有文件，添加一个问价直接 git add index.html,添加一类文件 git add *.txt)
3、git commit -m '你的备注信息'
4、连接远程仓库
git remote add origin https://github.com/仓库地址
5、链接成功之后，把本地代码推送到远程仓库
git push -u origin master
```

#### 下载远程仓库代码

在公司工作的第一步，下载项目代码

```
在电脑一个文件目录下，操作右键，git_Bash_here

git clone https://github.com/仓库地址
```

#### 每天如何下载上传代码

* 每天早晨开开电脑

  下载最新的代码

```
git pull 

Already up to date.(看到它代表已经时最新了)
```

* 每天晚上下班之前

  先下载最新代码

  然后提交自己代码

```
git pull 

git add . (.代表添加所有文件，添加一个问价直接 git add index.html,添加一类文件 git add *.txt)

git commit -m '备注信息'

git push (推送)
```

