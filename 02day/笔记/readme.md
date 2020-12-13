### day02笔记

#### 课程回顾

##### vue基本概念

```
vue是一套渐进式的框架
自底向上，逐渐增强
```

##### vue的特点

```
易用，灵活，高效，轻量

vue操作数据
```

##### vue的基本指令

```
v-html 用来解析html标签
v-text 用来解析文本
v-bind: 动态绑定，我们可以简写成：
v-on: 事件绑定，我们可以简写成@
v-if和v-show 用于条件判断
v-for 循环遍历
v-model 双向数据绑定
```



### Bootstrap

#### 官网地址

```
https://www.bootcss.com/

https://v4.bootcss.com/ （4版本的官网）
```

#### 概念

```
简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。
一套简单的UI框架
```

#### 下载方式

##### 一、cdn

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css">
```

##### 二、通过npm去下载

```
npm install bootstrap  (这个命令是下载npm上最新的版本)
npm install（i） bootstrap@3 (@3 指定下载3版本)
```

#### 离线存储

```
概念：离线存储是H5新增的属性，没有出现这个属性之前，我们的存储用cookie。出现之后大部分的存储都被离线存储所代替
离线存储包含两部分：一、本地存储localStorage 二、会话存储sesssionStorage
面试题：
一、localStorage和sesssionStorage
二、localStorage和sesssionStorage以及cookie的区别
三、离线存储中哪一个方法可以实现跨页面存储（就是localStorage）
```

##### 离线存储两种方法的区别

```
相同点：都可以缓存内容，大小都是5M左右，存储形式必须是字符串它们的使用语法都一样
存值：localStorage/sesssionStorage.setItem(key,value)
取值：localStorage/sesssionStorage.getItem(key)
删除某一个值：localStorage/sesssionStorage.removeItem(key)
不同点： localStorage它又名永久存储，只要不删除，永远存储，关闭浏览器不消失
sesssionStorage名会话存储，关闭浏览器即消失

```

#### 表单输入

##### 单选框

```html
        <div>
            <!-- 单选框一定要写 value,且value是后端要去的数值 -->
            性别：
            <input type="radio" name='sex' value='0' v-model='regList.sex'> 男
            <input type="radio" name='sex' value="1" v-model='regList.sex'> 女
        </div>
```

##### 复选框

```html
 <div>
            <!-- 
                复选框：定义checkbox初始值，应是一个[] ,获取值的时候，获取的是value 的值 
                你也可以有默认值：eg:['play']
            -->
            <input type="checkbox" value='study' v-model='regList.hobby'>学习
            <input type="checkbox" value='sleep' v-model='regList.hobby'>睡觉
            <input type="checkbox" value='rap' v-model='regList.hobby'>唱歌
            <input type="checkbox" value='play' v-model='regList.hobby'>打篮球

        </div>
```

##### 下拉框

```html
            <!-- 
                下拉框的双向数据绑定，绑定在select标签上。它的value 是option中的value
             -->
           工作种类： <select v-model='regList.job'>
                <option value="" disabled>--请选择--</option>
                <option value="java">码农后端</option>
                <option value="web">大前端攻城狮</option>
                <option value="test">最弱的测试</option>
                <option value="ui">切图仔</option>
            </select>
```

##### 一个checkbox

```html
        <div>
            <!-- 一个checkbox 复选框，我们初始值可以为空，获取value的时候，是true或者false.我们的初始值也可以是true或者false -->
            协议：<input type="checkbox" v-model='regList.isGree'>
        </div>
```

#### 动态样式之class

```
动态class的第一种用法： 设定一个变量 。 例子: :class='变量属性' 
动态class的第二种用法: eg: :class="[条件?'成立的类名':'不成立的类名']" 
动态class的第三种用法： eg:"{'类名A':条件A,'类名B':条件B,'类名C':条件C,'类名D':条件d}...."    
```

#### 常用的事件修饰符

```
        .prevent 阻止默认事件
        .stop 阻止冒泡事件
        .once 只出现一次
        .self 只触发自己
        .capture 捕获
```

#### 常用的键盘修饰符

```
        键盘修饰符
        .enter 回车 .13
        .left .37
        .right .39
        .up .38
        .down .40
        .del .46
        .space .32
```



### 作业

一、整理今天笔记

二、今天的案例敲最少三遍

三、完成作业文件夹下的内容

四、填写每日监测