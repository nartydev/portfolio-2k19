import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { VueHammer } from "vue2-hammer";
VueHammer.config.pan = {
  threshold: 0
};

Vue.use(VueHammer)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
