import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
import PastTense from "./components/PastTense.vue";
Vue.use(Router);

const routes: RouteConfig[] = [
  {
    component: PastTense,
    name: "Past Tense",
    path: "/pasttense"
  }
];

// routes.push({
//   component: NotFound,
//   path: "/404",
//   alias: "*",
//   name: "404"
// });

export default new Router({
  routes
});
