//引入axios核心库
import axios from 'axios'

//重新创建一个新的axiosAPI
//baseURL 基础地址
//http://www.zhenbang.com
const http = axios.create({
    //baseURL:'http://www.zhenbang.com'
    baseURL:'/api'
})

//导出
export default http