<template>
  <div class="home">

    <h1>嵌套环形饼图、空心饼图组合</h1>
    <div class="box clearfix">
      <customizedPieChart :title="title1" :data="data1"></customizedPieChart>
      <customizedPieChart :title="title2" :data="data2"></customizedPieChart>
    </div>

    <h1>柱状图 （单柱 双柱）</h1>
    <div class="box clearfix">
      <BarChart
        :title="title1"
        :subTitle="subTitle3"
        :type="1"
        :data1="data3"
        :barColorList="barColorList3"
      ></BarChart>
      <BarChart
        :title="title2"
        :subTitle="subTitle4"
        :type="1"
        :data1="data4"
        :barColorList="barColorList4"
      ></BarChart>
      <BarChart
        :title="title1"
        :subTitle="subTitle5"
        :type="2"
        :legendType="1"
        :data1="data4"
        :data2="data5"
        :barColorList="barColorList5"
      ></BarChart>
    </div>

    <h1>折线 （单线 渐变色）</h1>
    <div class="box clearfix">
      <singleLineChart
        :title="title6"
        :subTitle="subTitle6"
        :data="data2"
        :lineColorBeg="lineColorBeg6"
        :lineColorEnd="lineColorEnd6"
      ></singleLineChart>
      <singleLineChart
        :title="title7"
        :subTitle="subTitle7"
        :data="data1"
        :lineColorBeg="lineColorBeg7"
        :lineColorEnd="lineColorEnd7"
      ></singleLineChart>
    </div>

    <h1>单饼 实心 图</h1>
    <div class="box clearfix">
      <singlePieChart :title="title8" :data="data1" :type="1"></singlePieChart>
      <singlePieChart :title="title9" :data="data2" :type="1"></singlePieChart>
    </div>

    <h1>单饼 空心 图</h1>
    <div class="box clearfix">
      <singlePieChart :title="title8" :data="data1" :type="2"></singlePieChart>
      <singlePieChart :title="title9" :data="data2" :type="2"></singlePieChart>
    </div>

    <h1>雷达图</h1>
    <div class="box clearfix">
      <radarChart
        :title="title10"
        :dataMax="dataMax10"
        :valueList="valueList10"
      ></radarChart>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import customizedPieChart from "@/components/customizedPie_chart.vue";
import BarChart from "@/components/bar_chart.vue";
import singleLineChart from "@/components/singleLine_chart.vue";
import singlePieChart from "@/components/singlePie_chart.vue";
import radarChart from "@/components/radar_chart.vue";

export default {
  name: "home",
  components: {
    customizedPieChart,
    BarChart,
    singleLineChart,
    singlePieChart,
    radarChart
  },
  data() {
    return {
      title1: "转发率发布1",
      data1: [
        { value: 10, name: "内科1" },
        { value: 5, name: "外科" },
        { value: 15, name: "妇产科" },
        { value: 25, name: "五官科" },
        { value: 20, name: "内科2" },
        { value: 35, name: "其他" }
      ],
      title2: "转发率发布2",
      data2: [
        { value: 10, name: "内科1" },
        { value: 5, name: "外科" },
        { value: 15, name: "妇产科" },
        { value: 25, name: "五官科" },
        { value: 20, name: "内科2" },
        { value: 35, name: "其他" },
        { value: 20, name: "内科3" },
        { value: 35, name: "其他2" },
        { value: 20, name: "内科4" },
        { value: 35, name: "其他3" },
        { value: 20, name: "内科5" },
        ,
      ],
      barColorList3: ["#f2d551", "#001831", "", ""],
      subTitle3: "单位：人",
      data3: {
        name: "1",
        value: [
          { value: 10, name: "内科1" },
          { value: 5, name: "外科" },
          { value: 15, name: "妇产科" },
          { value: 25, name: "五官科" },
          { value: 20, name: "内科2" },
          { value: 35, name: "其他" }
        ]
      },
      barColorList4: ["#41c2ff", "#001831", "", ""],
      data4: {
        name: "1",
        value: [
          { value: 10, name: "内科1" },
          { value: 5, name: "外科" },
          { value: 15, name: "妇产科" },
          { value: 25, name: "五官科" },
          { value: 20, name: "内科2" },
          { value: 35, name: "其他" }
        ]
      },
      subTitle4: "单位：%",
      subTitle5: "单位：万元",
      barColorList5: ["#41c2ff", "#3f50ff", "#00e9a3", "#11d563"],
      data5: {
        name: "2",
        value: [
          { value: 10, name: "内科1" },
          { value: 5, name: "外科" },
          { value: 15, name: "妇产科" },
          { value: 25, name: "五官科" },
          { value: 20, name: "内科2" },
          { value: 35, name: "其他" }
        ]
      },
      title6: "每日医生活跃增长率",
      subTitle6: "单位：%",
      lineColorBeg6: "#ff8b1f",
      lineColorEnd6: "#ff2c2c",
      title7: "每月医生活跃增长率",
      subTitle7: "单位：%",
      lineColorBeg7: "#54cfff",
      lineColorEnd7: "#8c37fd",
      title8: "患者各科室分布",
      title9: "患者各类别医院分布",
      title10: "合作医生等级分布",
      dataMax10: [
        { name: "销售", max: 6500 },
        { name: "管理", max: 16000 },
        { name: "客服", max: 38000 },
        { name: "研发", max: 52000 },
        { name: "市场", max: 25000 }
      ],
      valueList10: [4300, 10000, 28000, 35000, 10000]
    };
  }
};
</script>
<style lang="less">
.home {
  .box {
    margin: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
