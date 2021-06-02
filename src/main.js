import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Paginate from "vuejs-paginate";
import Loader from "@/components/Loader";
import dateFilter from "@/filters/date.filter.js";
import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;

Vue.filter("dateFilter", dateFilter);

Vue.component("Paginate", Paginate);
Vue.component("Loader", Loader);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
