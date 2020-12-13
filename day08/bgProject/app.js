//一、引入express插件
const express = require('express')
//二、调用express方法
const app = express()
//五、引入静态资源 
//把前端打包之后的资源部署到搭建好的node服务器上
app.use(express.static('./static'))
//四、创建一个get方式
app.get('/home',(req,res)=>{
    res.send('这么神奇么。。。。')
})
//三、创建一个监听
app.listen(3000,()=>{
    console.log('服务器已经启动，端口号3000~')
})