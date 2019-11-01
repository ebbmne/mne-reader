import Vue from "vue";
import router from "./router/index.js";
import store from "./store/index.js";
import App from "./App.vue";

import "./assets/styles/iconfonts/icon.css";
import "./assets/styles/global.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
