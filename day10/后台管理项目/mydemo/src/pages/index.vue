<template>
  <div>
    <el-container>
      <el-header>XXX大型后台管理项目</el-header>
      <el-container>
        <el-aside width="200px">
          <!-- 引入导航菜单 -->
          <v-nav></v-nav>
        </el-aside>
        <el-main>
          <!-- 二级路由出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
//引入nav导航组件
import vNav from "../components/nav";
export default {
  data() {
    return {};
  },
  components: {
    vNav
  }
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index.styl'
.el-header
    background $thirdBgColor
</style>
