import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Planets",
    component: () => import("../views/Planets.vue"),
  },
  {
    path: "/planet/:id",
    name: "PlanetDetail",
    props: true,
    component: () => import("../views/PlanetDetail.vue"),
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: () => import("../views/Statistics.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
