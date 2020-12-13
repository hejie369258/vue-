<template>
  <div>
    <div>
      <img :src="dataList.img" alt="" />
      <p class="name">{{dataList.name}}</p>
      <div>
          <button @click='del'>×-删除</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:['dataList','index'],
    methods: {
      //删除事件
      del(){
       // console.log(this,'我想删除')
        //调用$emit，它会触发一个自定义事件
        this.$emit('delInfo',this.index)
      }
    },
};
</script>
<style lang="" scoped>
img{
    width: 200px;
}
.name{
    color: red;
}
</style>
