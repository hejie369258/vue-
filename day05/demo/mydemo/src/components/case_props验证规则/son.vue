<template>
  <div class="son">
    <h1>我是子组件</h1>
    <!-- <h2>{{name}}</h2>
        <h2>{{bb}}</h2>
        <hr>
        <h1>这是父亲送的诗----{{msg}}</h1> -->
    <h1>{{ dd }}</h1>
    <h1>{{ ss }}</h1>
    <hr />
    <h1>{{ info }}</h1>
  </div>
</template>
<script>
/* 
Invalid prop: type check failed for prop "name". Expected Number with value NaN, got String with value "aa". 
类型检查失败，不匹配
Missing required prop: "ss"
丢失一个必传的属性
*/
export default {
    // props:['info','aa','bb','dd','ss'],
  //props 自定义属性
  // props:['name','bb','msg'],
  //props属性的验证
  props: {
    name: String, //检查name这个自定义属性的数据类型
    bb: [String, Number], //多类型检查
    dd: {
      type: String, //类型检查
      default: "默认" //默认值
    },
    ss: {
      type: String,
      required: true, //必填项
      default: "ss默认值"
    },
    info: {
      type: String,
      required: true,
      validator(val) {
        //验证
        console.log(val, "我要验证的内容");
        //在这个函数中，我们需要返回一个验证的状态，true是成功 false是失败
        if (val.length > 6) {
          return false;
        } else {
          return true;
        }
      }
    }
  },
  mounted() {
    //组件中this指向的是组件自己的实例
    console.log(this, "你是谁");
  }
};
</script>
<style lang="" scoped>
.son {
  border: 1px solid green;
}
</style>
