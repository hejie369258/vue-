//引入axios核心库
import axios from 'axios'

//重新自定一个新的api，重新创建一个axios的实例
const http = axios.create({
    baseURL:'/api'
})

//导出新的axios实例
export default http