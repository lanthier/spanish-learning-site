import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import App from "./App.vue";
import store from "./store";
import "./util/array-prototypes";

let vue = new Vue({
  router,
  el: "#app",
  store,
  template: `
    <div>
        <App />
        </div>
    `,
  components: {
    App
  }
});
