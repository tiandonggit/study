import Vue from "vue";
import router from "./router/router";
import store from "./store/store";
import NProgress from "nprogress";
import Vant from "vant";
import wx from "weixin-js-sdk";

import "nprogress/nprogress.css";
import "vant/lib/index.css";
import "./assets/css/reset.css";
import App from "./App.vue";
import http from "./utils/request";
import method from "./utils/method.js";
import plugin from "./utils/plugin.js";
import * as echarts from 'echarts';
import { globalServiceHost } from "./utils/httpConfig";

Vue.use(Vant);
Vue.use(method);
Vue.use(plugin);
Vue.use(echarts);
Vue.prototype.$http = http;
Vue.prototype.$wx = wx;
Vue.prototype.$globalServiceHost = globalServiceHost;
Vue.config.debug = false;


Vue.config.productionTip = false;

//顶部加载进度条
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
//顶部加载进度条
router.afterEach(() => {
  NProgress.done();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.afterEach(() => {
  window.scrollTo(0, 0);
});
