import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Planets",
    meta: { title: "Planets" },
    component: () => import("../views/Planets.vue"),
  },
  {
    path: "/planet/:id",
    name: "PlanetDetail",
    meta: { title: "Planet" },
    props: true,
    component: () => import("../views/PlanetDetail.vue"),
  },
  {
    path: "/statistics",
    name: "Statistics",
    meta: { title: "Statistics" },
    component: () => import("../views/Statistics.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  next();
});
export default router;
