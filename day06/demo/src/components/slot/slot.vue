<template>
  <div>
    <h1>槽口案例</h1>
    <slot-son>
      君不见黄河之水天上来<br />
      <p slot="aa">一首唐诗送给你</p>
      我是匿名
      <ul slot="userName">
        <li>李白</li>
        <li>白居易</li>
        <li>唐伯虎</li>
      </ul>
      <hr>
      <template v-slot:newAA>
          <div>
              <h1>我是具名槽口的新语法</h1>
          </div>
      </template>
      <div slot-scope="scope">
          {{scope}}
          <ul>
              <li v-for='item in scope.newsList' :key='item.id'>
                  新闻：{{item.tilte}}
              </li>
          </ul>
          我是一个槽口
          {{msg}}
      </div>
    </slot-son>
  </div>
</template>

<script>
import slotSon from "./slotSon";
export default {
  data() {
    return {
        msg:'我是父组件数据'
    };
  },
  beforeCreate() {
    console.log("父组件创建之前");
  },
  created() {
    console.log("父组件创建");
  },
  beforeMount() {
    console.log("父组件挂载之前");
  },
  mounted() {
    console.log(this, "slot的实例");
  },
  components: {
    slotSon
  }
};
</script>

<style lang="" scoped></style>
