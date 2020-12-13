//这个文件中封装大量的接口

//引入你封装好的新的axios
import http from './axios'


/* 
导入导出
导出： 
export let a = 10 
import {a} from '地址'

export default a 
import a from  '地址'
*/

//封装一个音乐搜索接口
export function getSearch(params){
    return http.get('/search',{
        params
    })
}

//封装一个推荐歌单列表
export function getPersonalized(){
    return http.get('/personalized')
}

/* const a= function getSearch(params){
    return http.get('/api/search',{
        params
    })
}

export default {
    a
} */