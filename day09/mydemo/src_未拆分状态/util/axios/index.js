//引入重新创建的实例
import http from './axios'

//导出你封装的接口
export function getBanner(){
    return http.get('/banner')
}