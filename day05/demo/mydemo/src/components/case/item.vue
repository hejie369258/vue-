<template>
  <div>
    <div>
      <img :src="dataList.img" alt="" />
      <p class="name">{{dataList.name}}</p>
      <div>
          <button>×</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:['dataList']
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
