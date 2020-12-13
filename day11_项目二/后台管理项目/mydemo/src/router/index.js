import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export let indexRoutes = [
  {
    path: "/menu",
    component: () => import("@/views/menu/menu"),
    name: "菜单管理"
  },
  {
    path: "/role",
    component: () => import("@/views/role/role"),
    name: "角色管理"
  },
  {
    path: "/user",
    component: () => import("@/views/user/user"),
    name: "管理员管理"
  }
];
console.log(...indexRoutes,'展开')

export default new Router({
  routes: [
    {
      path: "/login",
      component: () => import("@/pages/login")
    },
    {
      path: "/index",
      component: () => import("@/pages/index"),
      children: [
        {
          path: "/home",
          component: () => import("@/views/home")
        },
        ...indexRoutes,
        {
          //二级路由重定向
          path: "",
          redirect: "/menu"
        }
      ]
    },
    {
      //重定向
      path: "*",
      redirect: "/index"
    }
  ]
});
