<template>
  <div class="one">
    <h1>我是组件AAAAA</h1>
    <h2>接收到来自B的数据----{{ getB }}</h2>
    <h2>接收到来自C的数据----{{ getC  }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      getB: "",
      getC: ""
    };
  },
  mounted() {
    console.log(this, "组件实例");
    //创建一个监听器，实时监听事件的变化
    //$on这个监听器有两个参数，一、是事件名称，二、是回调函数
    this.Event.$on("aa", d => {
      console.log(d, "你是谁");
      this.getB = d;
    });
    this.Event.$on("bb", d => {
      this.getC = d;
    });
  }
};
</script>
<style lang="" scoped>
.one {
  border: 2px solid orange;
}
</style>
