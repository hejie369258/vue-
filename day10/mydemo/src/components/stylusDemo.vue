<template>
  <div>
    <h1>预处理器案例</h1>
    <div class="header">
      <span class="title">真棒大型后台管理系统</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
// @import '../stylus/bgColor.styl'
// @import '../stylus/fontSize.styl'
@import '../stylus/index.styl'
.header
  width 100% 
  height 100px 
  border 1px solid #ccc
  background $oneBgColor
  .title
    color red
    font-size $threeSize
</style>
