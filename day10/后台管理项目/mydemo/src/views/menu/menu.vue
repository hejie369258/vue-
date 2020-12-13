<template>
  <div>
      <!-- 面包屑 -->
      <el-bread></el-bread>
      <!-- 添加按钮 -->
      <el-button type="primary" size='small' @click='isAdd'>添加</el-button>
      <!-- 表格列表渲染 -->
      <v-table></v-table>
      <!-- 弹框表单 -->
      <v-dialog @cancel='cancel' :isShow='isShow'></v-dialog>
  </div>
</template>

<script>
import elBread from '../../components/el-bread'
import vTable from './list'
import vDialog from './add'
export default {
  data() {
    return {
        isShow:false
    };
  },
  components:{
      elBread,
      vTable,
      vDialog
  },
  methods: {
      //打开弹框事件
      isAdd(){
          this.isShow = true
      },
      //cancel事件去改变弹框的属性
      cancel(e){
          this.isShow = e
      }
  },
};
</script>

<style lang="" scoped></style>
