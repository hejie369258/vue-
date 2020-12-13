<template>
  <div>
    <el-table :data="menuList" style="width: 100%">
      <el-table-column prop="id" label="菜单编号" width="180"> </el-table-column>
      <el-table-column prop="title" label="菜单名称" width="180"> </el-table-column>
      <el-table-column prop="pid" label="上级菜单"> </el-table-column>
      <el-table-column prop="icon" label="菜单图标" width="180"> </el-table-column>
      <el-table-column prop="url" label="菜单地址" width="180"> </el-table-column>
      <el-table-column prop="status" label="状态"> </el-table-column>
      <el-table-column label="操作">
          <template slot-scope="item">
              <div>
                    <el-button type="primary" size='small'>编辑</el-button>
                    <el-button type="danger" size='small'>删除</el-button>
              </div>
          </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
//引入辅助性函数
import {mapGetters,mapActions} from 'vuex'
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      menuList:'menu/getMenuList'
    })
  },
  mounted() {
    //组件一加载就触发调取列表
    this.getMenuList()
  },
  methods: {
    ...mapActions({
      getMenuList:'menu/getMenuListAction'
    })
  },
};
</script>

<style lang="" scoped></style>
