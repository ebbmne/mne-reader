import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/webfonts/daysOne.css";
import "./assets/styles/iconfonts/icon.css";
import "./assets/styles/global.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
