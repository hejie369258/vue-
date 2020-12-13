<template>
    <div class="father">
        <h1>我是父组件</h1>
        <son name='aa' bb='呵呵'  :msg='msg'></son>
        <h1>{{msg}}</h1>
    </div>
</template>
<script>
//引入儿子组件
import son from './son'
export default {
    data(){
        return{
            msg:'天生我材必有用'
        }
    },
    components:{
        son
    }
}
</script>
<style lang="" scoped>
 .father{
     border: 1px solid orange;
 }   
</style>