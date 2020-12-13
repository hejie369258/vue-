### day10

### 课程回顾

* vuex状态管理

* vuex有哪些核心属性方法

  * state 单一的数据源，用于管理数据对象
  * mutations 它是state的唯一方式（其他的修改方式都是不合法）
  * getters 它作为视图和state之间的隔离层存在，使我们获取state更加简洁方便
  * actions 它是操作异步方法，它不能直接去修改state，它要commit一个mutation。dispatch触发一个行动
  * modules 模块，每一个模块中都函数state,mutations,getters,actions,甚至还可以再切割模块。命名空间：namespaced

* UI框架之elementUI

   ```
  npm install element-ui
   ```

### 一、UI框架之移动端

#### 1、mintUI

##### 官网：

```
http://mint-ui.github.io/#!/zh-cn
```

##### 下载命令：

```
npm install mint-ui
版本号：+ mint-ui@2.2.13
```

##### 全局调用：

main.js

```js
//引入下载好的mint-ui框架
import MintUI from 'mint-ui'
//引入mint-ui的css
import 'mint-ui/lib/style.min.css'
//调用插件
Vue.use(MintUI)
```

#### 2、vantUI

##### 官网：

```
https://youzan.github.io/vant/#/zh-CN/
```

##### 下载命令：

```
npm install(i) vant
版本号 + vant@2.10.13
```

##### 全局调用：

```
//全局引入vantUI
import VantUI from 'vant'
import 'vant/lib/index.css'
//调用插件
Vue.use(VantUI)
```

---

### 二、css预处理器之stylus

#### 官网：

```
https://stylus.bootcss.com/
```

#### 概念：

```
富于表现力、动态的、健壮的 CSS
```

#### 特点：

```
省略掉花括号
再把分号省略掉
省略冒号
实现层级嵌套
实现定义变量
```

#### 下载：

```
npm install(i) stylus
npm install(i) stylus-loader@3.0.2

简写 
npm i stylus stylus-loader

版本号：
+ stylus-loader@3.0.2
+ stylus@0.54.8
```

