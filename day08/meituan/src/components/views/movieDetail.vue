<template>
  <div>
    <h1>movieDetail</h1>
    <h1>接收到query参数是---{{ $route.query.id }}</h1>
    <hr />
    <h1>接收到params的参数是----{{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this, "组件实例");
    console.log(this.$route.query.id);
  },
  beforeRouteEnter(to, from, next) {
    //当前没有this,因为组件实例未创建
    console.log(this, "当前组件实例！！！");
    console.log(to, "组件进入之前tttotototo");
    console.log(from, "组件进入之前fromfromfrom");
    if (from.path == "/movieList") {
      next();
    } else {
      next("/home");
    }
  },
  beforeRouteUpdate(to, from, next) {
    //动态路由情况下，去切换你的动态路由值，会触发组件更新导航守卫
    console.log(this, "更新组件实例");
    console.log(to, "组件更新tttotototo");
    console.log(from, "组件更新fromfromfrom");
    next();
  },
  beforeRouteLeave(to, from, next) {
    //this指向组件实例
    console.log(this, "组件实例啊啊啊啊啊");
    console.log(to, "组件离开tttotototo");
    console.log(from, "组件离开fromfromfrom");
    next();
  }
};
</script>

<style lang="" scoped></style>
