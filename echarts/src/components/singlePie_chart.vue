/* * @Author: 田东 * @Date: 2019-11-26 09:54:47 * @Last Modified by: 田东 *
@Last Modified time: 2019-11-26 09:55:32 * singlePie_chart 单饼图
type类型控制实心还是空心饼图*/

<template>
  <div class="singlePie_chart">
    <div ref="chart"></div>
  </div>
</template>

<script>
const echarts = require("echarts");
import "echarts/map/js/china"; // 引入中国地图数据

export default {
  name: "singlePie_chart",
  props: {
    type: {
      // 饼图类型 1：1实心饼；2：空心饼
      default: 1,
      type: Number
    },
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
      chart: null
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
      let radius = "55%",
        roseType = "",
        left = "50%";
      if (this.type === 2) {
        radius = [20, 100];
        roseType = "radius";
        left = "40%";
      }
      let option = {
        title: [
          {
            // 标题配置
            text: this.title,
            x: "center",
            y: "5%",
            textStyle: {
              color: "#fff"
            }
          }
        ],
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {d}%"
        },
        legend: {
          show: this.type === 2,
          right: 35,
          top: "30%",
          type: "scroll",
          orient: "vertical",
          pageIconColor: '#fff', // 翻页按钮的颜色。
          pageIconInactiveColor: '#666', // 翻页按钮不激活时（即翻页到头时）的颜色。
          align: "left",
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "姓名",
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
            radius: radius,
            center: [left, "60%"],
            roseType: roseType, //"radius",
            data: this.data,
            label: {
              normal: {
                show: this.type === 1,
                formatter: "{b} {d}% "
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
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
.singlePie_chart {
  width: 100%;
  height: 100%;
  background-color: #061B4D;
  // float: left;

  div {
    height: 100%;
    width: 100%;
  }
}
</style>
