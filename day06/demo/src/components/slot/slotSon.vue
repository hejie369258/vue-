<template>
  <div class="slotSon">
    <slot></slot>
    <h1>槽口子组件</h1>
    <slot name='aa'></slot>
    <slot name="userName"></slot>
    <!-- 槽口 slot -->
    <!-- <slot></slot>
    <slot></slot>
    <slot></slot>
    <slot></slot> -->
    <slot name='newAA'></slot>
    <slot data='数据啊' :list='name' :newsList='newsList'></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
        msg:'hoho',
        name:'张三',
        newsList:[
          {
            id:1,
            tilte:'美国大选'
          },
          {
            id:2,
            tilte:'拜登260多票'
          }
        ]
    };
  },
  beforeCreate() {
    console.log("子组件创建之前");
  },
  created() {
    console.log("子组件创建");
  },
  beforeMount() {
    console.log("子组件挂载之前");
  },
  mounted() {
    console.log(this, "子组件");
  }
};
</script>

<style lang="" scoped>
.slotSon {
  border: 2px solid red;
}
</style>
