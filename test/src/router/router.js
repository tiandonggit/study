import Vue from "vue";
import Router from "vue-router";

/****************************** 田东 **********************************/
// 患者信息填写
const bar_charts = () =>
  import(
    /* webpackChunkName: "inputPerson" */ "../pages/echarts/bar_charts"
  );
//end
Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "bar_charts",
      component: bar_charts
    }
  ]
});
