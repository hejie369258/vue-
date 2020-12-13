<template>
    <div>
        <!-- 二级路由出口 -->
        <transition enter-active-class="animate__animated animate__bounceInRight">
                <router-view/>
        </transition>

        <!-- router-link中除了to,tag，
        activeClass ，点击的时候加样式 -->
        <v-Nav></v-Nav>
    </div>
</template>

<script>
//引入底部导航
import vNav from '../../common/nav'
export default {
    data() {
        return {

        };
    },
    components:{
        vNav
    }
};
</script>

<style  lang="" scoped>

</style>
