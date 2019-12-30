import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/index",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/index.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/bar_charts",
    name: "bar_charts",
    component: () =>
      import(/* webpackChunkName: "bar_charts" */ "../views/bar_charts.vue")
  },
  {
    path: "/mapChart",
    name: "mapChart",
    component: () =>
      import(/* webpackChunkName: "mapChart" */ "../views/mapChart.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
