import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
import PastTense from "./components/PastTense.vue";
import Pronouns from "./components/Pronouns.vue";
Vue.use(Router);

const routes: RouteConfig[] = [
  {
    component: PastTense,
    name: "Past Tense",
    path: "/pasttense"
  },
  {
    component: Pronouns,
    name: "Pronoun",
    path: "/pronoun"
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
