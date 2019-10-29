import Vue from "vue";
import Vuex from "vuex";
import { BASE_URL } from "@/config/network.js";
import book from "./modules/EBook/book.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseURL: BASE_URL
  },
  getters: {
    baseURL: state => state.baseURL,
    book: state => state.book
  },
  modules: {
    book
  }
});
