export default function toTimer(timer,type){
    let date = new Date(timer);
    //获取年份
    let year = date.getFullYear();
    //获取月份
    let month =((date.getMonth() + 1)+'').padStart(2,'0')
    //获取天数
    let day = (date.getDate() +'').padStart(2,'0')
    let hour = (date.getHours() +'').padStart(2,'0')
    let minute = (date.getMinutes() +'').padStart(2,'0')
    let second = (date.getSeconds() +'').padStart(2,'0')
    console.log(day);
    //return `${year}/${month}/${day}`
    if(type=='yyyy-MM-dd HH:mm:ss'){
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`
    }else if(type=='yyyy/MM/dd HH:mm:ss'){
        return `${year}/${month}/${day} ${hour}:${minute}:${second}`
    }else{
         return `${year}-${month}-${day}`
    }
   
}

// export default 变量
// export default {} 
// export default 函数
