<template>
    <div>
        <h1>父子组件通信案例</h1>
        <v-sport></v-sport>
        <v-game></v-game>
    </div>
</template>
<script>
//引入运动组件
import vSport from './sport'
import vGame from './game'
//引入游戏组件
export default {
    components:{
        vSport,
        vGame
    }
}
</script>
<style lang="" scoped>
    
</style>