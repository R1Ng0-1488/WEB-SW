import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "https://swapi.dev/api/",
  },
  mutations: {},
  actions: {},
  getters: {
    url: (s) => s.url,
  },
  modules: {},
});
