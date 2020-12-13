<template>
  <div>
    <el-dialog
      :title="addInfo.isAdd ? '添加规格' : '修改规格'"
      :visible.sync="addInfo.isShow"
      :before-close="cancel"
      center
    >
      <el-form :model="form" :rules="rules">
        <el-form-item
          prop="specsname"
          label="规格名称:"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.specsname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          v-for="(item, index) in arrAttr"
          :key="index"
          label="规格属性:"
          :label-width="formLabelWidth"
        >
          <el-input
            class="inputW"
            v-model="item.value"
            autocomplete="off"
          ></el-input>
          <el-button v-if="index == 0" @click="addAttr" type="primary"
            >新增规格属性</el-button
          >
          <el-button v-else @click="delAttr(item)" type="danger">删除</el-button>
        </el-form-item>
        <el-form-item label="状态:" :label-width="formLabelWidth">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button v-if="addInfo.isAdd" @click="add" type="primary"
          >添 加</el-button
        >
        <el-button v-else @click="update" type="primary">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//引入辅助性函数
import { mapActions } from "vuex";
import { getSpecsAdd, getSpecsInfo, getSpecsEdit } from "../../util/axios";
export default {
  data() {
    return {
      //定义一个规格属性数组
      arrAttr: [
        {
          value: ""
        }
      ],
      //表单对象
      form: {
        specsname: "", // 规格名称
        attrs: "", //规格属性
        status: 1 //状态1正常2禁用
      },
      //label宽度
      formLabelWidth: "120px",
      //规则验证
      rules: {
        specsname: [
          { required: true, message: "请输入规格名称", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" }
        ],
        roleid: [{ required: true, message: "请选择所属角色", trigger: "blur" }]
      }
    };
  },

  props: ["addInfo"],
  methods: {
    //添加动态表单事件
    addAttr() {
      //最多让用户添加6个
      if (this.arrAttr.length <= 6) {
        //往数组中添加数据
        this.arrAttr.push({
          value: ""
        });
      } else {
        this.$message.warning("最多只能添加6项！！！");
      }
    },
    //删除冬天表单事件
    delAttr(item) {
      var index = this.arrAttr.indexOf(item);
      if (index !== -1) {
        this.arrAttr.splice(index, 1);
      }
    },
    //封装重置事件
    reset() {
      this.form = {
        specsname: "", // 规格名称
        attrs: "", //规格属性
        status: 1 //状态1正常2禁用
      };
      //初始化动态循环表单
      this.arrAttr = [
        {
          value: ""
        }
      ];
    },
    //点击取消修改父组件弹框事件
    cancel() {
      this.$emit("cancel", false);
      //调用重置
      this.reset();
    },
    //调取行动
    ...mapActions({
      getSpecsList: "specs/getSpecsAction",
      getCountAction: "specs/getCountAction"
    }),
    //添加事件
    add() {
      //  let newArr= this.arrAttr.map(item=>{
      //     // console.log(item,'item')
      //     return item .value
      //   })
      // this.form.attrs = newArr.join(',')
      this.form.attrs = this.arrAttr.map(item => item.value).join(",");
      // console.log(newArr,'newArr');
      // console.log(this.form, "表单信息");
      //修改属性值
      // 调取添加接口
      getSpecsAdd(this.form).then(res => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          //重新调取接口
          this.getSpecsList();
          //重新调取总条数
          this.getCountAction();
          //关闭弹框
          this.cancel();
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    //封装一个查看一条数据的方法
    look(id) {
      //调取查看接口
      getSpecsInfo({ id }).then(res => {
        console.log(res, "获取一条数据");
        if (res.data.code == 200) {
          //对数据进行二次修改
          let data = res.data.list[0];
          this.form = data;
          data.attrs.map((item, index) => {
            console.log(item, "nihao ");
            if (index == 0) {
              //如果索引是0 就强制匹配第一项
              this.arrAttr[0].value = item;
            } else {
              this.arrAttr.push({
                value: item
              });
            }
          });
        }
      });
    },
    //编辑确定事件
    update() {
      // console.log(this.form,'表单信息')
      //调取添加接口
      getSpecsEdit(this.form).then(res => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          //重新调取接口
          this.getSpecsList();
          //重新调取总条数
          this.getCountAction();
          //关闭弹框
          this.cancel();
        } else {
          this.$message.error(res.data.msg);
        }
      });
    }
  }
};
</script>

<style lang="" scoped>
/* 改变默认input框宽度 */
.inputW {
  width: 70%;
}
</style>
