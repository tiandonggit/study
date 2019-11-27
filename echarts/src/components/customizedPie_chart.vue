/* * @Author: 田东 * @Date: 2019-11-25 11:19:41 * @Last Modified by: 田东 *
@Last Modified time: 2019-11-25 12:11:26 * @name customizedPie_chart *
上嵌套环形图 下扇形图 组合组件 */

<template>
  <div class="customizedPie_chart">
    <div ref="chart"></div>
  </div>
</template>

<script>
const echarts = require("echarts");
import "echarts/map/js/china"; // 引入中国地图数据

export default {
  name: "customizedPie_chart",
  props: {
    title: {
      default: "", // 自定义标题 默认为空 不显示
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
      dataNameList: [], // 底部名称数组
      chart: null,
      topChartPositionY: "25%"
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.data.forEach((v, e) => {
        this.dataNameList.push(v.name);
      });
      this.chartsDrow();
    });
  },
  methods: {
    chartsDrow() {
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
        // title: {
        //   // 标题配置
        //   text: this.title,
        //   x: "center",
        //   textStyle: {
        //     color: "#fff"
        //   }
        // },
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
            subtext: "阅读数分布 ",
            x: "center",
            y: "3%"
          },
          {
            subtext: "转发率分布",
            x: "center",
            y: "45%"
          }
        ],
        tooltip: {
          // 鼠标进入显示文本
          trigger: "item",
          formatter: "{d}%"
        },
        legend: {
          // 底部名称配置
          x: "center",
          y: "bottom",
          data: this.dataNameList,
          textStyle: {
            color: "#fff"
          }
        },
        // calculable: true,
        series: [
          {
            name: "",
            type: "pie",
            color: [
              "#1cc2ff",
              "#ff7e46",
              "#68ffe4",
              "#fc31b4",
              "#811cc8",
              "#ff4a4a",
              "#6234ff",
              "#34ff8a",
              "#ffae31",
              "#ffec00",
              "#144AFF"
            ],
            radius: [20, 110],
            center: ["50%", "70%"],
            roseType: "radius",
            label: {
              normal: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: this.data
          },
          {
            name: "",
            type: "pie",
            radius: ["40%", "55%"],
            center: ["50%", this.topChartPositionY],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                  textStyle: {
                    color: "#fff"
                  }
                },
                labelLine: {
                  show: true
                }
              },
              emphasis: {
                label: {
                  show: true,
                  position: "center"
                }
              }
            },
            data: this.data
          },
          {
            name: "",
            type: "pie",
            radius: ["0", " 30%"],
            center: ["50%", this.topChartPositionY],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                  textStyle: {
                    color: "#fff"
                  }
                },
                labelLine: {
                  show: false
                }
              },
              emphasis: {
                label: {
                  show: false
                }
              }
            },
            data: this.data
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
.customizedPie_chart {
  background-color: #001831;
  float: left;

  div {
    height: 750px;
    width: 400px;
    margin: 15px;
  }
}
</style>
