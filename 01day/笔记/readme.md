#### 自我介绍

张静怡（张张张大大）

四阶段是最重要的阶段没有之一

#### 课程设置（19+1答辩）

Vue框架（8天基础知识+5天的项目-后台管理项目和移动端）+1 

第一周基础

第二周项目铺垫

React(4天的基础知识+1天的项目)+1 ，高阶的函数放到了第六阶段

最后一周晚自习申请答辩，预留出最后一天（半天进行授课）

#### 课程要求

第一、认真听课

第二、认真做笔记

第三、每天早晨听写，错一个20遍，然后复盘再错成倍

第四、挤出一点点时间去复习原生js(以面试题的形式去复习)

#### 自我问题

语速比较快

---

#### Vue的基础

##### vue的基本了解

```
作者：华人尤雨溪
我们目前利用的vue.js的核心库是2.x版本，因为3.0的核心库还在测试阶段
```

##### vue的官网

```
https://cn.vuejs.org/
```

##### vue是什么

```
vue是一套渐进式框架

什么是渐进式框架？
自底向上，逐渐增强 
首先vue可以当作一个普通的库去使用，类似于jquery,直接引入到界面（html）应用。随着我们产品需求的增加，我们要做的内容越来越复杂，那么我们就需要路由跳转，调取接口，封装页面。。。这个时候我们就可以直接借助vue脚手架（创建好了基本的项目骨架）直接开发项目

官方：
Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

html就是试图层（用户看的见）
```

##### vue的缺点（兼容性）

```
vue不支持IE8及其以下

Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。
```

##### vue的安装

###### 一、cdn方式（个人不建议）

```
开发环境
这个环境下的核心库，包含警告和提示
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

生产环境
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>

```

###### 二、把文件直接下载到本地

```
开发环境
https://cdn.jsdelivr.net/npm/vue/dist/vue.js
生产环境
https://cdn.jsdelivr.net/npm/vue@2.6.12
```

###### 三、通过npm管理包下载

```
npm install(i) vue
版本号：+ vue@2.6.12

步骤流程：一、先初始化创建，package.json文件，用来管理插件和包，命令是：npm init(自定义配置)或者npm init -y(自动生成)
二、下载你需要的插件
```

#### 环境

```
开发环境（未上线版本）
内部调试环境，指的是你写好的项目部署到云服务之后，由测试人员测试，我们和Java进行接口联调

生产环境（上线之后的环境）
所有的文件都是打包压缩后，提高运行速率
```

---

### vue的基本应用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 第一步 引入核心库 -->
    <!-- cdn方式 -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> -->
    <!-- 第二种引入js文件 -->
    <!-- <script src="./js/vueDev.js"></script> -->
    <!-- 第三种npm管理插件 -->
    <script src="./node_modules/vue/dist/vue.js"></script>
</head>
<body>
    <!-- 第二步创建一个容器，用来承载vue的视图 -->
    <div id="box">
        {{msg}}
    </div>
    <!-- 第三步 交互逻辑 -->
    <script>
        // console.log(Vue,'核心方法')
        // Vue是一个构造函数，实例它
        new Vue({
            el:'#box',//el元素 element 
            data:{//数据，属性
                msg:'我觉得vue真简单啊'
            }
        })
    </script>
</body>
</html>
```

### vue的基本指令

```
v-html 解析html语法
v-text 解析文本
v-bind: 动态绑定，我们可以简写成:
v-on: 事件绑定，我们可以简写成@
v-if和v-show 都是用于控制显示隐藏
v-for 循环遍历
v-model 双向数据绑定
```





### 错误集锦

```
一、Do not mount Vue to <html> or <body> - mount to normal elements instead.
在vue中不能用html或者body作为挂载点，只能用正常的元素去替代
```



### 面试题

##### 对于Vue是一套渐进式框架的理解

渐进式代表的含义是：主张最少。
Vue可能有些方面是不如React，不如Angular，但它是渐进的，没有强主张，你可以在原有大系统的上面，把一两个组件改用它实现，当jQuery用；也可以整个用它全家桶开发，当Angular用；还可以用它的视图，搭配你自己设计的整个下层用。你可以在底层数据逻辑的地方用MVVM和设计模式的那套理念，也可以函数式，都可以，它只是个轻量视图而已，只做了自己该做的事，没有做不该做的事，仅此而已。

#####  **请列出至少4个vue基本指令，并简要说明其作用。** 

v-model 多用于表单元素实现双向数据绑定
v-for 格式： v-for="字段名 in(of) 数组json"  循环数组或json,需要注意从vue2开始取消了$index
v-show 显示内容 
v-if    显示与隐藏  
v-else  必须和v-if连用  不能单独使用  否则报错   模板编译错误
v-bind  动态绑定  作用： 及时对页面的数据进行更改,可以简写成:
v-on:click 给标签绑定函数，可以缩写为@，例如绑定一个点击函数  函数必须写在methods里面
v-text  解析文本
v-html   解析html标签

##### v-show 与 v-if 有什么区别？

v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。
所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景



### 作业：

```
一、整理今天笔记，纸质
二、今天的所有案例至少敲3遍
三、完成今天的代码作业并提交（排行榜，背景色可以省略）
四、有一个扩展作业，可以选择性完成（学生管理系统）
```



