/* * @Author: 田东 * @Date: 2019-08-29 10:33:33 * @Last Modified by: 田东 *
@Last Modified time: 2019-11-22 13:19:06 * @name radar_charts */
<template>
  <div class="bar_charts">
    <div ref="chart"></div>
  </div>
</template>

<script>
const echarts = require("echarts");
import "echarts/map/js/china"; // 引入中国地图数据

export default {
  name: "bar_charts",
  components: {},

  data() {
    return {
      value1: 70,
      chart: null,
      title: "医生活跃人数",
      subTitle: "单位：人",
      barAxisColor: "#3e8ea9"
    };
  },
  mounted() {
    this.$nextTick(() => {
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
      let option = {
        title: {
          text: "基础雷达图",
          x: "center"
        },
        tooltip: {},
        legend: {
          show: false
          // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#fff",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: "销售", max: 6500 },
            { name: "管理", max: 16000 },
            { name: "客服", max: 38000 },
            { name: "研发", max: 52000 },
            { name: "市场", max: 25000 }
          ],
          splitArea: {
            areaStyle: {
              color: ["#0c1a63", "#1f23a0", "#0c1a63", "#1f23a0", "#0c1a63"],
              shadowColor: "rgba(0, 0, 255, 0.3)",
              shadowBlur: 10
            }
          },
          axisLine: {
            lineStyle: {
              color: "#393fff"
            }
          },
          splitLine: {
            lineStyle: {
              color: "#1f23a0"
            }
          }
        },

        series: [
          {
            name: "",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 10000],
                name: "预算分配",
                lineStyle: {
                  normal: {
                    color: "#3c09bf"
                  }
                },
                areaStyle: {
                  normal: {
                    color: "rgba(70, 51, 202, 1)"
                  }
                }
              }
              //  {
              //     value : [5000, 14000, 28000, 31000, 42000, 21000],
              //     name : '实际开销（Actual Spending）'
              // }
            ]
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
.bar_charts {
  width: 100%;
  height: 100%;
  background-color: #001831;

  div {
    height: 250px;
    width: 400px;
  }
}
</style>
