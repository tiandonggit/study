/* * @Author: 田东 * @Date: 2019-08-29 10:33:33 * @Last Modified by: 田东 *
@Last Modified time: 2019-11-22 13:19:06 * @name bar_charts */
<template>
  <div class="bar_charts">
    <div id="main1">
      <!-- <waterProgress :value="value1"></waterProgress> -->
    </div>
    <div class="my_charts">
      <div ref="chart"></div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
const echarts = require("echarts");
import "../../utils/china"

import waterProgress from "../../components/waterProgress";

export default {
  name: "bar_charts",
  components: {
    waterProgress
  },

  data() {
    return {
      value1: 70,
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
      let option = {
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: [
              { value: 235, name: "视频广告" },
              { value: 274, name: "联盟广告" },
              { value: 310, name: "邮件营销" },
              { value: 335, name: "直接访问" },
              { value: 400, name: "搜索引擎" }
            ]
          }
        ]
      };
      return option;
    }
  }
};
</script>

<style scoped lang="less">
.bar_charts {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
}
</style>
