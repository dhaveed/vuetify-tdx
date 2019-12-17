import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// new Vue({
//   router,
//   render: h => h(App),
//   watch: {
//     $route(to) {
//       if (to.currentRoute.meta.reload == true) {
//         window.location.reload();
//       }
//     }
//   }
// }).$mount("#app");

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");