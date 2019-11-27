/* * @Author: 田东 * @Date: 2019-08-29 10:33:33 * @Last Modified by: 田东 *
@Last Modified time: 2019-11-22 13:19:06 * @name bar_chart * 柱状图组件
柱类型根据传递数据控制 type: 1：1柱；2：2柱；3：叠柱；*/
<template>
  <div class="bar_chart">
    <div ref="chart"></div>
  </div>
</template>

<script>
const echarts = require("echarts");
import "echarts/map/js/china"; // 引入中国地图数据

export default {
  name: "bar_chart",
  props: {
    title: {
      default: "", // 自定义标题 默认为空 不显示
      type: String
    },
    subTitle: {
      default: "", //
      type: String
    },
    type: {
      // 几柱图 1：1柱；2：2柱；3：叠柱；
      default: 1,
      type: Number
    },
    legendType: {
      // 图例类型 1：竖排列；2：横排列
      default: 1,
      type: Number
    },
    barColorList: {
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
    },
    data3: {
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
      dataY3: [],
      legendData: [] // 图例
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
      if (this.data3.name) {
        this.legendData.push(this.data3.name);
        this.data3.value.forEach((v1, e1) => {
          this.dataY3.push(v1.value);
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
      let right = "4%"; // 图形在画布右侧偏移量（默认）
      this.type === 3 && (right = "30%"); // 叠状右侧偏移配置

      // 图例配置
      let legend =
        this.type === 1 // 单柱不显示图例
          ? {
              show: false
            }
          : this.type === 2 // 双柱图例显示右上
          ? {
              data: this.legendData,
              x: "right",
              y: "20",
              itemWidth: 14,
              orient: this.legendType === 1 ? "vertical" : "horizontal",
              align: "left",
              textStyle: {
                color: "#fff"
              }
            }
          : {
              // 叠柱图例显示右下
              data: this.legendData,
              right: 20,
              bottom: 30,
              itemGap: 30,
              icon: "circle",
              itemWidth: 14,
              itemHeight: 14,
              orient: "vertical",
              align: "left",
              textStyle: {
                color: "#fff",
                
              }
            };
      // 数据配置 —— 默认单柱
      let series = [
        {
          name: this.data1.name,
          type: "bar",
          // barWidth: "60%",
          itemStyle: {
            normal: {
              // 柱子渐变颜色配置
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: this.barColorList[0] },
                { offset: 0.1, color: this.barColorList[0] },
                { offset: 1, color: this.barColorList[1] }
              ])
            },
            emphasis: {}
          },
          data: this.dataY1
        }
      ];
      // 双柱
      this.type === 2 &&
        series.push({
          name: this.data2.name,
          type: "bar",
          // barWidth: "60%",
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: this.barColorList[2] },
                { offset: 1, color: this.barColorList[3] }
              ])
            },
            emphasis: {}
          },
          data: this.dataY2
        });

      if (this.type === 3) {
        // 叠柱
        series = [];
        let dataYList = [this.dataY1, this.dataY2];
        this.dataY3.length > 1 && dataYList.push(this.dataY3);
        let num = this.data3.name ? 3 : 2;
        for (let i = 0; i < num; i++) {
          series.push({
            name: this.legendData[i],
            type: "bar",
            stack: "1",
            itemStyle: {
              normal: {
                color: this.barColorList[i]
              },
              emphasis: {}
            },
            data: dataYList[i]
          });
        }
      }
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
            y: "5%",
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
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: right,
          bottom: "3%",
          // top: "25%",
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
.bar_chart {
  height: 100%;
  background-color: #001831;
  float: left;

  div {
    height: 250px;
    width: 400px;
    margin: 15px;
  }
}
</style>
