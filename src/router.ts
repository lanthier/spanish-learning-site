import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
import VerbQuizConfiguration from "./components/quizzes/verb-quiz/VerbQuizConfiguration.vue";
import VerbQuiz from "./components/quizzes/verb-quiz/VerbQuiz.vue";
import VerbQuizResults from "./components/quizzes/verb-quiz/VerbQuizResults.vue";

Vue.use(Router);

const routes: RouteConfig[] = [
  {
    component: VerbQuizConfiguration,
    name: "VerbQuizConfiguration",
    path: "/verbquizconfig",
    meta: {
      nav: true,
      displayName: "Verb Study"
    }
  },
  {
    component: VerbQuiz,
    name: "VerbQuiz",
    path: "/verbquiz",
    meta: {
      nav: false
    }
  },
  {
    component: VerbQuizResults,
    name: "VerbQuizResults",
    path: "/verbquizresults",
    meta: {
      nav: false
    }
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
