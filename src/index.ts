import Vue from "vue";
import router from "./router";
import App from "./App.vue";

let v = new Vue({
  router,
  el: "#app",
  template: `
    <div>
        <App :name="name" :initialEnthusiasm="5" />
        </div>
    `,
  data: { name: "World" },
  components: {
    App
  }
});
