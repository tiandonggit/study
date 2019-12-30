/* * @Author: 田东 * @Date: 2019-08-29 10:33:33 * @Last Modified by: 田东 *
@Last Modified time: 2019-11-22 13:19:06 * @name singleLine_chart */
<template>
  <div class="singleLine_chart">
    <div ref="chart"></div>
  </div>
</template>

<script>
const echarts = require("echarts");
import "echarts/map/js/china"; // 引入中国地图数据

export default {
  name: "singleLine_chart",
  props: {
    title: {
      default: "", // 自定义标题 默认为空 不显示
      type: String
    },
    subTitle: {
      default: "", // 自定义副标题 默认为空 不显示
      type: String
    },
    type: {
      default: 1,
      type: Number
    },
    legendType: {
      default: 1, // 图例类型  1竖排   2横排
      type: Number
    },
    lineColorList: {
      default: ["", "", "", ""], // 柱子颜色数组 参数：（1）、1柱上；（2）、1柱下；（3）、2柱上；（4）、2柱下
      type: Array
    },
    data1: {
      // 数据
      default: function() {
        return {};
      }, //一级分类
      type: Object
    },
    data2: {
      // 数据
      default: function() {
        return {};
      }, //一级分类
      type: Object
    }
  },
  data() {
    return {
      chart: null,
      barAxisColor: "#3e8ea9",
      dataX: [],
      dataY1: [],
      dataY2: [],
      legendData: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.legendData.push(this.data1.name);
      this.data1.value.forEach((v1, e1) => {
        this.dataX.push(v1.name);
        this.dataY1.push(v1.value);
      });
      if (this.data2.name) {
        this.legendData.push(this.data2.name);
        this.data2.value.forEach((v1, e1) => {
          this.dataY2.push(v1.value);
        });
      }
      this.drow();
    });
  },
  methods: {
    drow() {
      if (!this.chart) {
        let dom = this.$refs.chart;
        let chart = (this.chart = echarts.init(dom));
        if (chart === "undefined" || chart === null) {
          console.error(`echarts init err`);
          return false;
        }
        this.$nextTick(() => {
          this.chart.setOption(this.generatorChartOption());
        });
      } else {
        this.$nextTick(() => {
          this.chart.setOption(this.generatorChartOption());
        });
      }
      window.addEventListener("resize", this.handleResizeEvent);
    },
    generatorChartOption() {
      let series = [
        {
          data: this.dataY1,
          name: this.legendData[0],
          type: "line",
          smooth: true,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: this.lineColorList[0] },
                { offset: 1, color: this.lineColorList[1] }
              ])
            },
            emphasis: {}
          }
        }
      ];
      if (this.type === 2) {
        series.push({
          data: this.dataY2,
          name: this.legendData[1],
          type: "line",
          smooth: true,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: this.lineColorList[2] },
                { offset: 1, color: this.lineColorList[3] }
              ])
            },
            emphasis: {}
          }
        });
      }
      // 图例配置
      let legend =
        this.type === 1 // 单柱不显示图例
          ? {
              show: false
            }
          : {
              show: true,
              data: this.legendData,
              right: "26px",
              align: "left",
              y: "20%",
              itemWidth: 14,
              orient: this.legendType === 1 ? "vertical" : "horizontal",
              align: "left",
              icon: "circle",
              textStyle: {
                color: "#fff"
              }
            };
      let option = {
        title: [
          {
            // 标题配置
            text: this.title,
            x: "center",
            y: "8%",
            textStyle: {
              color: "#fff"
            }
          },
          {
            subtext: this.subTitle,
            left: "5px",
            y: "16%",
            subtextStyle: {
              color: this.barAxisColor
            }
          }
        ],
        legend: legend,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          top: "32%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            axisLine: false,
            type: "category",
            data: this.dataX,
            axisLabel: {
              textStyle: {
                color: this.barAxisColor
              }
            },
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            axisLine: false,
            type: "value",
            axisLabel: {
              textStyle: {
                color: this.barAxisColor
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#041d52"
              }
            }
          }
        ],
        series: series
      };
      return option;
    },
    /**
     * 如果有图表实例，则对实例进行自适应调整
     * */
    handleResizeEvent() {
      let self = this;
      if (this.chart) {
        setTimeout(function() {
          self.chart.resize();
        }, 100);
      }
    }
  }
};
</script>

<style scoped lang="less">
.singleLine_chart {
  width: 100%;
  height: 100%;
  background-color: #061b4d;

  div {
    height: 100%;
    width: 100%;
    // margin: 15px;
  }
}
</style>
