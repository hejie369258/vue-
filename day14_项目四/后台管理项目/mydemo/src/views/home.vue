<template>
  <div>
    <h1>我是首页</h1>
    <div id="con"></div>
  </div>
</template>

<script>
//引入数据图表库
// import Echart from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    //挂载
    //let myChart = Echart.init(document.getElementById("con"));
    console.log(this,'组件实例')
    let myChart = this.$eh.init(document.getElementById("con"));
    let options = {
        title:{
            text:"本系统的周访问量",
            textStyle:{
                color:'red',
                fontSize:30
            },
             textAlign:'auto'
        },
      xAxis: {
        type: "category",
        data: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [66, 500, 999, 1400, 800, 500, 1500],
          type: "line"
        }
      ]
    };
    //设置创建好的配置项
    myChart.setOption(options)
  }
};
</script>

<style lang="" scoped>
#con {
  width: 800px;
  height: 600px;
  margin: 20px auto;
}
</style>
