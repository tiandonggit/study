<template>
  <div class="index">
    <h1
      @click="
        type = 1;
        isShow = true;
        position = 'right';
      "
    >
      平均医生日活跃
    </h1>
    <h1
      @click="
        type = 2;
        isShow = true;
        position = 'right';
      "
    >
      患教文章
    </h1>
    <h1
      @click="
        type = 3;
        isShow = true;
        position = 'left';
      "
    >
      合作科室数
    </h1>
    <h1
      @click="
        type = 4;
        isShow = true;
        position = 'left';
      "
    >
      合作患者数
    </h1>
    <h1
      @click="
        type = 5;
        isShow = true;
        position = 'left';
      "
    >
      合作医生数
    </h1>
    <h1
      @click="
        type = 6;
        isShow = true;
        position = 'middle';
      "
    >
      今日购买率
    </h1>
    <h1
      @click="
        type = 7;
        isShow = true;
        position = 'middle';
      "
    >
      今日开单数
    </h1>
    <h1
      @click="
        type = 8;
        isShow = true;
        position = 'right';
      "
    >
      产品数
    </h1>
    <h1
      @click="
        type = 9;
        isShow = true;
        position = 'right';
      "
    >
      知识产权数
    </h1>
    <h1
      @click="
        type = 10;
        isShow = true;
        position = 'middle';
      "
    >
      今日平均客单价
    </h1>
    <h1
      @click="
        type = 11;
        isShow = true;
        position = 'left';
      "
    >
      合作医院数
    </h1>
    <h1
      @click="
        type = 12;
        isShow = true;
        position = 'right';
      "
    >
      康复任务数
    </h1>

    <Dialog :position="position" :isShow="isShow">
      <div class="slot">
        <!-- 每日医生活跃 -->
        <div class="container clearfix" v-if="type == 1">
          <div class="block_1_2 clearfix">
            <div class="top">
              <p class="subtitle">每日医生活跃</p>
              <p class="right">次日预测值<span>2310</span></p>
            </div>
            <div class="cell clearfix">
              <BarChart
                title="每日医生活跃人数"
                subTitle="单位：人"
                :type="1"
                :data1="data3"
                :barColorList="barColorList3"
              ></BarChart>
            </div>
            <div class="cell clearfix">
              <singleLineChart
                title="每日医生活跃人数增长率"
                subTitle="单位：%"
                :data1="data4"
                :lineColorList="barColorList4"
              ></singleLineChart>
            </div>
            <div class="cell clearfix">
              <BarChart
                title="每日医生活跃占比"
                subTitle="单位：%"
                :type="1"
                :data1="data3"
                :barColorList="barColorList5"
              ></BarChart>
            </div>
          </div>
          <div class="block_1_2 clearfix">
            <div class="top">
              <p class="subtitle">每日医生活跃</p>
              <p class="right">次日预测值<span>2310</span></p>
            </div>
            <div class="cell clearfix">
              <BarChart
                title="每日医生活跃人数"
                subTitle="单位：人"
                :type="1"
                :data1="data3"
                :barColorList="barColorList11"
              ></BarChart>
            </div>
            <div class="cell clearfix">
              <singleLineChart
                title="每日医生活跃人数增长率"
                subTitle="单位：%"
                :data1="data5"
                :lineColorList="barColorList5"
              ></singleLineChart>
            </div>
            <div class="cell clearfix">
              <BarChart
                title="每日医生活跃占比"
                subTitle="单位：%"
                :type="1"
                :data1="data3"
                :barColorList="barColorList12"
              ></BarChart>
            </div>
          </div>
        </div>
        <!-- 患教文章 -->
        <div class="container clearfix" v-if="type == 2">
          <div class="block_3_1">
            <customizedPieChart
              :title="title1"
              :data="data1"
            ></customizedPieChart>
          </div>
          <div class="block_3_1">
            <customizedPieChart
              :title="title1"
              :data="data2"
            ></customizedPieChart>
          </div>
          <div class="block_3_1">
            <customizedPieChart
              :title="title1"
              :data="data1"
            ></customizedPieChart>
          </div>
        </div>
        <!-- 合作科室数 -->
        <div class="container clearfix" v-if="type == 3">
          <div class="block_2_2">
            <singlePieChart
              title="各合作科室类别分布"
              :data="data2"
              :type="1"
            ></singlePieChart>
          </div>
          <div class="block_2_2">
            <BarChart
              title="平均科室流水"
              subTitle="单位：万元"
              :type="2"
              :legendType="1"
              :data1="data4"
              :data2="data5"
              :barColorList="barColorList5"
            ></BarChart>
          </div>
          <div class="block_2_2">
            <BarChart
              title="平均科室开单数"
              subTitle="单位：单"
              :type="2"
              :legendType="1"
              :data1="data4"
              :data2="data5"
              :barColorList="barColorList5"
            ></BarChart>
          </div>
          <div class="block_2_2">
            <BarChart
              title="各类科室平均客单价"
              subTitle="单位：元"
              :type="2"
              :legendType="1"
              :data1="data4"
              :data2="data5"
              :barColorList="barColorList5"
            ></BarChart>
          </div>
        </div>
        <!-- 合作患者数 -->
        <div class="container clearfix" v-if="type == 4">
          <div class="block_2_2">
            <singlePieChart
              title="各合作科室类别分布"
              :data="data2"
              :type="1"
            ></singlePieChart>
          </div>
          <div class="block_2_2">
            <singlePieChart
              title="各合作科室类别分布"
              :data="data2"
              :type="1"
            ></singlePieChart>
          </div>
          <div class="block_2_2">
            <singleLineChart
              title="患者各科室购买率"
              subTitle="单位：%"
              :data1="data4"
              :lineColorList="barColorList5"
            ></singleLineChart>
          </div>
          <div class="block_2_2">
            <singleLineChart
              title="患者各类别医院购买率"
              subTitle="单位：人"
              :data1="data5"
              :lineColorList="barColorList5"
            ></singleLineChart>
          </div>
        </div>
        <!-- 合作医生数 -->
        <div class="container clearfix" v-if="type == 5">
          <div class="block_2_2">
            <radarChart
              title="合作医生级别分布"
              :dataMax="dataMax10"
              :valueList="valueList10"
            ></radarChart>
          </div>
          <div class="block_2_2">
            <singleLineChart
              title="平均接诊患者数"
              subTitle="单位：万人"
              :type="2"
              :data1="data4"
              :data2="data5"
              :lineColorList="barColorList5"
            ></singleLineChart>
          </div>
          <div class="block_2_2">
            <singleLineChart
              title="平均医生开单数"
              subTitle="单位：单"
              :type="2"
              :data1="data4"
              :data2="data5"
              :lineColorList="barColorList5"
            ></singleLineChart>
          </div>
          <div class="block_2_2">
            <singleLineChart
              title="医生平均开单时长"
              subTitle="单位：分钟"
              :type="2"
              :data1="data4"
              :data2="data5"
              :lineColorList="barColorList5"
            ></singleLineChart>
          </div>
        </div>
        <!-- 今日购买率 -->
        <div class="container1 container clearfix" v-if="type == 6">
          <div class="block_2_2">
            <p class="title">购买率</p>
          </div>
          <div class="block_2_2">
            <BarChart
              title="商品缺货情况"
              subTitle="单位：%"
              :type="2"
              :legendType="2"
              :data1="data4"
              :data2="data5"
              :barColorList="barColorList5"
            ></BarChart>
          </div>
          <div class="block_1_1 clearfix">
            <BarChart
              title="患者购买情况"
              subTitle="单位：%"
              :type="2"
              :legendType="2"
              :data1="data4"
              :data2="data5"
              :barColorList="barColorList5"
            ></BarChart>
          </div>
          <p class="title title1">购买率详情</p>
        </div>
        <!-- 今日开单数 -->
        <div class="container1 container clearfix" v-if="type == 7">
          <div class="block_2_2">
            <p class="subtitle title">开单数</p>
            <div class="kds-block clearfix">
              <div class="left fl">
                <div class="top">
                  <img src="../assets/img/kaidanshu1.png" alt="" />
                  <span class="name">医院数</span>
                  <span class="num">118</span>
                </div>
                <p>今日开单医院数</p>
              </div>
              <div class="right fr">
                <div class="top">
                  <img src="../assets/img/kaidanshu1.png" alt="" />
                  <span class="name">医生数</span>
                  <span class="num">800</span>
                </div>
                <p>今日开单医生数</p>
              </div>
            </div>
          </div>
          <div class="block_2_2">
            <BarChart
              title="平均科室流水"
              subTitle="单位：万元"
              :type="2"
              :legendType="3"
              :data1="data4"
              :data2="data5"
              :barColorList="barColorList5"
            ></BarChart>
          </div>
          <div class="block_2_2">
            <BarChart
              title="平均科室开单数"
              subTitle="单位：单"
              :type="2"
              :legendType="3"
              :data1="data4"
              :data2="data5"
              :barColorList="barColorList5"
            ></BarChart>
          </div>
          <div class="block_2_2">
            <BarChart
              title="各类科室平均客单价"
              subTitle="单位：元"
              :type="2"
              :legendType="3"
              :data1="data4"
              :data2="data5"
              :barColorList="barColorList5"
            ></BarChart>
          </div>
          <p class="title title1">开单数</p>
        </div>
        <!-- 产品数 -->
        <div class="container clearfix" v-if="type == 8">
          <div class="block_2_2">
            <p class="title subtitle">产品类别分布</p>
          </div>
          <div class="block_2_2">
            <singlePieChart
              title="各合作科室类别分布"
              :data="data2"
              :type="1"
            ></singlePieChart>
          </div>
          <div class="block_2_2">
            <singlePieChart
              title="各合作科室类别分布"
              :data="data2"
              :type="1"
            ></singlePieChart>
          </div>
          <div class="block_2_2">
            <p class="title subtitle">不同地区产品销量</p>
          </div>
        </div>
        <!-- 知识产权数 -->
        <div class="container clearfix" v-if="type == 9">
          <div class="block_2_2">
            <div class="block-box">
              <p class="title">当日知识产权生成数</p>
              <div class="bottom-box">
                <div class="text textColor1">25436</div>
                <div class="img">
                  <img src="../assets/img/zhishichanquan1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="block_2_2">
            <div class="block-box">
              <p class="title">累计知识产权生成数</p>
              <div class="bottom-box">
                <div class="text textColor2">1519750</div>
                <div class="img">
                  <img src="../assets/img/zhishichanquan2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="block_2_2">
            <div class="block-box">
              <p class="title">累计知识产权变现率</p>
              <div class="bottom-box">
                <div class="text textColor3">34%</div>
                <div class="img">
                  <img src="../assets/img/zhishichanquan3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="block_2_2">
            <div class="block-box">
              <p class="title">累计知识产权变现金额</p>
              <div class="bottom-box">
                <div class="text textColor4">¥15197500.00</div>
                <div class="img">
                  <img src="../assets/img/zhishichanquan4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 今日平均客单价 -->
        <div class="container1 container clearfix" v-if="type == 10">
          <div class="block_2_1">
            <p class="title">客单价</p>
            <div class="block-box">
              <BarChart
                title="商品缺货情况"
                subTitle="单位：%"
                :type="2"
                :legendType="2"
                :data1="data4"
                :data2="data5"
                :barColorList="barColorList5"
              ></BarChart>
            </div>
            <div class="block-box">
              <BarChart
                title="商品缺货情况"
                subTitle="单位：%"
                :type="2"
                :legendType="2"
                :data1="data4"
                :data2="data5"
                :barColorList="barColorList5"
              ></BarChart>
            </div>
          </div>
          <div class="block_2_1">
            <p class="title">复购情况</p>
            <div class="block-box">
              <singleLineChart
                title="医生平均开单时长"
                subTitle="单位：分钟"
                :type="2"
                :legendType="2"
                :data1="data4"
                :data2="data5"
                :lineColorList="barColorList5"
              ></singleLineChart>
            </div>
            <div class="block-box">
              <singleLineChart
                title="医生平均开单时长"
                subTitle="单位：分钟"
                :type="2"
                :legendType="2"
                :data1="data4"
                :data2="data5"
                :lineColorList="barColorList5"
              ></singleLineChart>
            </div>
          </div>
          <p class="title title1">平均客单价</p>
        </div>
        <!-- 合作医院数 -->
        <div class="container clearfix" v-if="type == 11">
          <div class="block_2_2">
            <singlePieChart
              title="合作医院等级分布"
              :data="data1"
              :type="2"
            ></singlePieChart>
          </div>
          <div class="block_2_2">
            <singlePieChart
              title="合作医院类别分布"
              :data="data1"
              :type="2"
            ></singlePieChart>
          </div>
          <div class="block_2_2 block_2_2_text">
            <div class="cell-box fl">
              <img src="https://dummyimage.com/140x140/0067EE/5245FC" alt="" />
              <span>平均医院流水</span>
              <p>283,738.38</p>
            </div>
            <div class="cell-box fr">
              <img src="https://dummyimage.com/140x140/CA6C36/5245FC" alt="" />
              <span>平均医院开单数</span>
              <p>383738</p>
            </div>
          </div>
          <div class="block_2_2 block_2_2_text">
            <div class="cell-box fl">
              <img src="https://dummyimage.com/140x140/B57FFF/5245FC" alt="" />
              <span>平均医院客单价</span>
              <p>738.38</p>
            </div>
            <div class="cell-box fr">
              <img src="https://dummyimage.com/140x140/ED6C9E/5245FC" alt="" />
              <span>产品覆盖率</span>
              <p>98%</p>
            </div>
          </div>
        </div>
        <!-- 康复任务数 -->
        <div class="container clearfix" v-if="type == 12">
          <div class="block_2_2 block_2_2_left">
            <p class="title subtitle">各类别康复任务数量</p>
            <div class="cell-box fl">
              <BarChart
                title=""
                subTitle="单位：个"
                :type="1"
                :legendType="5"
                :data1="data3"
                :barColorList="barColorList3"
              ></BarChart>
            </div>
            <div class="cell-box fl">
              <BarChart
                title=""
                subTitle="单位：个"
                :type="1"
                :legendType="5"
                :data1="data3"
                :barColorList="barColorList3"
              ></BarChart>
            </div>
          </div>
          <div class="block_2_2 block_2_2_right">
            <p class="title subtitle">各类别康复任务完成率</p>
          </div>
          <div class="block_2_2 block_2_2_left">
            <p class="title subtitle">各类别康复任务复制量</p>
            <div class="cell-box fl">
              <BarChart
                title=""
                subTitle="单位：个"
                :type="1"
                :legendType="5"
                :data1="data3"
                :barColorList="barColorList3"
              ></BarChart>
            </div>
            <div class="cell-box fl">
              <BarChart
                title=""
                subTitle="单位：个"
                :type="1"
                :legendType="5"
                :data1="data4"
                :barColorList="barColorList4"
              ></BarChart>
            </div>
          </div>
          <div class="block_2_2 block_2_2_right">
            <p class="title subtitle">各类别康复任务反馈率</p>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Dialog from "@/components/Dialog.vue";
import customizedPieChart from "@/components/customizedPie_chart.vue";
import BarChart from "@/components/bar_chart.vue";
import singleLineChart from "@/components/singleLine_chart.vue";
import singlePieChart from "@/components/singlePie_chart.vue";
import radarChart from "@/components/radar_chart.vue";

export default {
  name: "index",
  components: {
    customizedPieChart,
    BarChart,
    singleLineChart,
    singlePieChart,
    radarChart,
    Dialog
  },
  data() {
    return {
      isShow: false,
      type: 1,
      position: "middle",
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
        name: "视频广告",
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
      barColorList5: ["#41c2ff", "#3f50ff", "#00e9a3", "#11d563"], // 双柱颜色顺序 左上 -> 左下 -> 右上 -> 右下
      data5: {
        name: "联盟广告",
        value: [
          { value: 15, name: "内科1" },
          { value: 15, name: "外科" },
          { value: 5, name: "妇产科" },
          { value: 15, name: "五官科" },
          { value: 10, name: "内科2" },
          { value: 25, name: "其他" }
        ]
      },
      data11: {
        name: "邮件营销",
        value: [
          { value: 10, name: "内科1" },
          { value: 5, name: "外科" },
          { value: 15, name: "妇产科" },
          { value: 25, name: "五官科" },
          { value: 20, name: "内科2" },
          { value: 35, name: "其他" }
        ]
      },
      barColorList11: ["#005ee5", "#31ffb4", "#6340ff", ""], // 叠柱颜色顺  下 -> 上
      barColorList12: ["#ff864a", "#0ce5ff", "", ""], // 叠柱颜色顺  下 -> 上
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
        // 逆时针顺序
        { name: "主任医师", max: 6500 },
        { name: "副主任医师", max: 16000 },
        { name: "主治医师", max: 38000 },
        { name: "医士", max: 52000 },
        { name: "医师/住院医师", max: 25000 }
      ],
      valueList10: [4300, 10000, 28000, 35000, 10000]
    };
  },
  methods: {
    beforeClose() {
      this.isShow = false;
      this.type = 0;
    }
  }
};
</script>
<style lang="less">
.index {
  h1 {
    background-image: -webkit-linear-gradient(top, #ff8b1f, #ff2c2c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .box {
    margin: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.slot {
  .container {
    height: 100%;

    .title {
      padding: 10% 0;
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: bold;
      color: #fff;
      line-height: 25px;
    }
  }

  .container1 {
    position: relative;
    padding-top: 50px;

    .title1 {
      position: absolute;
      top: 0;
      width: 100%;
      font-size: 20px;
      padding: 0;
    }
  }

  // 大块   横行 1    竖行 2
  .block_1_2 {
    width: 100%;
    padding: 30px 15px 15px;
    background: #061b4d;
    height: 48%;
    border-radius: 10px;
    box-shadow: inset -3px -3px 11px #0f245d, inset 3px 3px 11px #0f245d;

    &:first-child {
      margin-bottom: 20px;
    }

    .top {
      position: relative;
      margin-bottom: 7px;
      font-size: 18px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: #fff;
      line-height: 25px;

      p.subtitle {
        width: 40%;
        margin: 0 auto;
      }

      .right {
        position: absolute;
        right: 149px;
        top: 0;

        span {
          font-size: 24px;
          margin-left: 20px;
        }
      }
    }

    .cell {
      width: 33%;
      height: 88%;
      margin-right: 3px;
      float: left;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  // 大块   横行 3    竖行 1
  .block_3_1 {
    width: 30%;
    height: 100%;
    float: left;
    margin-right: 5%;
    padding: 15px;
    background: #061b4d;
    border-radius: 10px;
    box-shadow: inset -3px -3px 11px #0f245d, inset 3px 3px 11px #0f245d;

    &:last-child {
      margin-right: 0;
    }
  }

  .block_2_2 {
    width: 48%;
    height: 48%;
    float: left;
    margin: 0 4% 25px 0;
    background: #061b4d;
    padding: 15px;
    border-radius: 10px;
    box-shadow: inset -3px -3px 11px #0f245d, inset 3px 3px 11px #0f245d;

    &:nth-child(2),
    &:nth-child(4) {
      margin-right: 0;
    }

    &:nth-child(3),
    &:nth-child(4) {
      margin-bottom: 0;
    }
  }

  .block_1_1 {
    width: 66%;
    height: 48%;
    margin-left: 17%;
    padding: 15px;
    float: left;
    background: #061b4d;
    border-radius: 10px;
    box-shadow: inset -3px -3px 11px #0f245d, inset 3px 3px 11px #0f245d;
  }

  .block_2_1 {
    width: 48%;
    height: 100%;
    float: left;
    margin: 0 4% 0 0;
    background: #061b4d;
    border-radius: 10px;
    box-shadow: inset -3px -3px 11px #0f245d, inset 3px 3px 11px #0f245d;

    &:nth-child(2) {
      margin-right: 0;
    }

    p.title {
      margin-top: 5%;
      padding: 0;
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: bold;
      color: #fff;
      line-height: 25px;
    }

    div.block-box {
      height: 46%;
    }
  }

  // 非图表样式
  .block_2_2 {
    .block-box {
      padding: 13% 3.6% 2.5% 6.5%;
      height: 100%;

      p.title {
        padding: 0;
        text-align: left;
        margin-bottom: 28px;
      }

      .bottom-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 90%;

        .img {
          width: 35%;

          img {
            width: 100%;
          }
        }

        .text {
          font-size: 40px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          line-height: 56px;
        }

        .textColor1 {
          background: linear-gradient(180deg, #00a0fb 0%, #ea1ade 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .textColor2 {
          background: linear-gradient(180deg, #c52d7b 0%, #7d1bf5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .textColor3 {
          background: linear-gradient(180deg, #cd2f2f 0%, #ff9e00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .textColor4 {
          background: linear-gradient(180deg, #00ffc7 0%, #364dfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }

    // 今日开单数
    p.subtitle {
      padding: 3% 0 0;
    }

    .kds-block {
      margin-top: 40px;
      padding: 0 10%;

      .left,
      .right {
        width: 31%;

        .top {
          position: relative;

          img {
            width: 100%;
          }

          span.name {
            position: absolute;
            left: 32%;
            top: 29%;
          }

          span.num {
            position: absolute;
            left: 36%;
            top: 50%;
            font-size: 20px;
            font-family: PingFang-SC-Bold, PingFang-SC;
            font-weight: bold;
            line-height: 28px;
            background: linear-gradient(180deg, #00bafa 0%, #9f36fa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        p,
        span.name {
          font-size: 16px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: #fff;
          line-height: 22px;
        }
        p {
          margin-top: 10%;
        }
      }
    }
  }

  .block_2_2_text {
    background: none;

    .cell-box {
      width: 45.5%;
      height: 100%;
      background: #061b4d;
      padding: 12% 0;

      img {
        display: block;
        margin: 0 auto 13%;
      }
      span {
        font-size: 18px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: #fff;
        line-height: 25px;
      }
      p {
        font-size: 28px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: #fff;
        line-height: 40px;
        margin-top: 6%;
      }
    }
  }

  .block_2_2_left {
    width: 65%;

    p.subtitle {
      padding: 1.5% 0 0;
    }

    .cell-box {
      width: 49%;
      height: 85%;
    }
  }
  .block_2_2_right {
    width: 30%;
  }
}
</style>
