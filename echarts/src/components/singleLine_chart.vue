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
    lineColorBeg: {
      default: "", // 折线起始颜色
      type: String
    },
    lineColorEnd: {
      default: "", // 折线尾部颜色
      type: String
    },
    data: {
      // 数据
      default: function() {
        return [];
      }, //一级分类
      type: Array
    }
  },
  data() {
    return {
      value1: 70,
      chart: null,
      barAxisColor: "#3e8ea9",
      dataX: [],
      dataY: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.drow();
      this.data.forEach((v, e) => {
        this.dataX.push(v.name);
        this.dataY.push(v.value);
      });
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
      let option = {
        title: [
          {
            // 标题配置
            text: this.title,
            x: "center",
            y: "0%",
            textStyle: {
              color: "#fff"
            }
          },
          {
            subtext: this.subTitle,
            x: "left",
            y: "3%",
            subtextStyle: {
              color: this.barAxisColor
            }
          }
        ],
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
        series: [
          {
            data: this.dataY,
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: this.lineColorBeg },
                  { offset: 1, color: this.lineColorEnd }
                ])
              },
              emphasis: {}
            }
          }
        ]
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
  // width: 100%;
  height: 100%;
  background-color: #001831;

  div {
    height: 250px;
    width: 400px;
  }
}
</style>
