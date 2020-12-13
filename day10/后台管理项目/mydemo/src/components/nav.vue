<template>
    <div>
   <!-- 
            导航菜单 
            el-menu属性
          background-color	菜单的背景色（仅支持 hex 格式）  
          text-color	菜单的文字颜色（仅支持 hex 格式）
          active-text-color	当前激活菜单的文字颜色（仅支持 hex 格式）
          unique-opened	是否只保持一个子菜单的展开
          default-active	当前激活菜单的 index
          router	是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
          -->
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#585858"
            text-color="#fff"
            active-text-color="#FF8000"
            unique-opened
            router
          >
            <el-menu-item index="2">
              <i class="el-icon-s-grid"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item index="/menu">
                <span slot="title">菜单管理</span>
              </el-menu-item>
              <el-menu-item index="/role">
                <span slot="title">角色管理</span>
              </el-menu-item>
              <el-menu-item index="/user">
                <span slot="title">管理员管理</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span>商城管理</span>
              </template>
              <el-menu-item index="6">
                <span slot="title">商品分类</span>
              </el-menu-item>
              <el-menu-item index="7">
                <span slot="title">商品规格</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
};
</script>

<style  lang="stylus" scoped>
.el-menu
  height 90vh
</style>
