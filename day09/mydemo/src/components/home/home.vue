<template>
  <div>
    <h1>我是home-element案例</h1>
    <el-row>
      <el-col :span="12">
        <div>你好我是布局</div>
      </el-col>
    </el-row>
    <hr />
    <el-container>
      <el-header>
        我是头部导航
      </el-header>
      <el-container>
        <el-aside
          >我是侧边栏
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          我是中心主体内容
          <div>
            <i class="el-icon-star-off"></i>
            <i class="el-icon-download"></i>
          </div>
          <div>
            <el-button type="success">成功</el-button>
            <el-button
              type="danger"
              icon="el-icon-delete-solid
"
              >删除</el-button
            >
            <el-button type="primary" round>主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning" size="mini">警告按钮</el-button>
            <el-button type="danger" size="small">危险按钮</el-button>
          </div>
          <div>
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2" disabled>女</el-radio>
          </div>
          <div>
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="allCheck"
              >全选</el-checkbox
            >
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="checkOne">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{
                city
              }}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div>
            <div class="block">
              <span class="demonstration">默认</span>
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </div>
          </div>
          <hr />
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            <el-table-column label="性别">
              <template slot-scope="scope">
                <div>
                  <!-- {{scope.row}} -->
                  <div v-if="scope.row.sex == 0">男</div>
                  <div v-else>女</div>
                </div>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </el-main>
      </el-container>
    </el-container>
    <hr />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      radio: "1",
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      value1: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: 1
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          sex: 0
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          sex: 1
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          sex: 0
        }
      ]
    };
  },
  methods: {
    allCheck(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    checkOne(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>

<style lang="" scoped>
.el-header {
  background: pink;
}
.el-aside {
  background: #ccc;
}
/* .el-main {
  background: peru;
} */
</style>
