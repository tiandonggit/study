<template>
  <div class="mapChart_page">
    <div ref="chart"></div>
  </div>
</template>

<script>
  const echart = require('echarts')
  import 'echarts/map/js/china' // 引入中国地图数据

  export default {
    name: "mapEchart",
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.echartDrew()
      })
    },
    methods: {
      /**
       * echart init
       * **/
      echartDrew() {
        // let self = this
        if (!this.chart) {
          let dom = this.$refs.chart
          let chart = this.chart = echart.init(dom)
          if (chart === 'undefined' || chart === null) {
            // console.error(`echarts init err`)
            return false
          }
          this.$nextTick(() => {
            this.chart.setOption(this.generatorChartOption())
            this.chart.on('click', () => {
              // console.log('name',params.name)
            })
          })
        } else {
          this.$nextTick(() => {
            this.chart.setOption(this.generatorChartOption())
            this.chart.on('click', () => {
              // console.log('name',params.name)
            })
          })
        }
        window.addEventListener('resize', this.handleResizeEvent)
      },

      /**
       * 图表配置
       * **/
      generatorChartOption() {
        // let _this = this
        let option = {
          // tooltip: {
          //   trigger: 'item',
          //   formatter: '{b}'
          // },
          // geo: {
            // map: "china",
            // center: [104.004115019531, 36.382111640625],
            // aspectScale: 0.75, //长宽比
            // zoom:1.2,
            // roam: false,
            // itemStyle: {
            //   normal: {
            //     areaColor: "rgba(61,52,199)",
            //     shadowColor:"#001831",
            //     shadowOffsetX:0,
            //     shadowOffsetY:25
            //   },
            //   emphasis: {
            //     label:{
            //       show:false
            //     },
            //     areaColor: "rgba(61,52,199)",
            //     shadowColor:"#001831",
            //   }
            // }
          // },
          series: [{
            geoIndex: 1,
            aspectScale: 0.75, //长宽比
            emphasis: {
              label:{
                show:false
              }
            },
            name: '中国',
            type: 'map',
            mapType: 'china',
            selectedMode: 'single',
            itemStyle: {
              normal: {//未选中状态
                borderWidth: 2,//边框大小
                borderColor: 'rgba(20,26,142)',
                // areaColor: '#226DE6',//背景颜色
                areaColor:{
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: 'rgba(61,52,199)' // 0% 处的颜色
                  }, {
                    offset: 1, color: 'rgba(26,127,239)' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                },
                label: {
                  show: true, //显示名称
                  textStyle: {
                    color: '#fff'
                  },
                  fontSize: 24
                },
              },
              emphasis: {// 也是选中样式
                borderWidth: 2,
                borderColor: '#fff',
                areaColor: 'rgba(61,52,199)',
                label: {
                  show: true,
                  textStyle: {
                    color: '#fff'
                  },
                  fontSize: 24
                }
              }
            },
            roam: false,
            zoom: 1.2,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            data: [
              {
              name: '北京'
              },
              {
                name: '天津',
              },
              {
                name: '上海',
              },
              {
                name: '重庆',
              },
              {
                name: '河北',
              },
              {
                name: '河南',
              },
              {

                name: '云南',
              },
              {
                name: '辽宁',
              },
              {
                name: '黑龙江',
              },
              {
                name: '湖南',
              },
              {
                name: '安徽',
              },
              {
                name: '山东',
              },
              {
                name: '新疆',
              },
              {
                name: '江苏',
              },
              {
                name: '浙江',
              },
              {
                name: '江西',
              },
              {
                name: '湖北',
              },
              {
                name: '广西',
              },
              {
                name: '甘肃',
              },
              {
                name: '山西',
              },
              {
                name: '内蒙古',
              },
              {
                name: '陕西',
              },
              {
                name: '吉林',
              },
              {
                name: '福建',
              },
              {
                name: '贵州',
              },
              {
                name: '广东',
              },
              {
                name: '青海',
              },
              {
                name: '西藏',
              },
              {
                name: '四川',
              },
              {
                name: '宁夏',
              },
              {
                name: '海南',
              },
              {
                name: '台湾',
              },
              {
                name: '香港',
              },
              {
                name: '澳门',
              },
              {
                name: '南海诸岛',
                itemStyle: {
                  normal: {opacity: 0, label: {show: false}}
                }
              }
            ]
          }]
        }
        return option
      },

      /**
       * 如果有图表实例，则对实例进行自适应调整
       * */
      handleResizeEvent() {
        let self = this
        if (this.chart) {
          setTimeout(function () {
            self.chart.resize()
          }, 100)
        }
      },
    },

    beforeDestroy() {
      if (this.chart) {
        this.chart = null
      }
      window.removeEventListener('resize', this.handleResizeEvent)
    }
  }
</script>

<style scoped lang="less">
  .mapChart_page {
    width: 100%;
    height: 100%;
    background-color: #001831;

    div {
      width: 100%;
      height: 100%;
    }
  }
</style>
