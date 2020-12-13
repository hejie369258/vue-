//引入axios核心库
import axios from 'axios'

//重新创建一个实例
const http = axios.create({
    baseURL:'/api'
})

//导出http实例
export default http