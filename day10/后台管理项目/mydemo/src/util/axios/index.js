//引入重新封装的axios实例
import http from './axios'

//暴露（导出）接口
/* 菜单管理接口 */
//封装菜单添加接口
export function getMenuAdd(data){
    return http.post('/api/menuadd',data)
}
//封装菜单列表接口
export function getMenuList(params){
    return http.get('/api/menulist',{
        params
    })
}
//封装菜单获取（一条）接口
export function getMenuInfo(params){
    return http.get('/api/menuinfo',{
        params
    })
}
//封装菜单修改接口
export function getMenuEdit(data){
    return http.post('/api/menuedit',data)
}
//封装菜单删除接口
export function getMenuDelete(data){
    return http.post('/api/menudelete',data)
}