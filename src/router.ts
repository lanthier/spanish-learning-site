import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
import PastTense from "./components/PastTense.vue";
import Pronouns from "./components/Pronouns.vue";
import QuizMaker from "./components/QuizMaker.vue";
import VerbQuiz from "./components/quizzes/VerbQuiz.vue";

Vue.use(Router);

const routes: RouteConfig[] = [
  {
    component: PastTense,
    name: "Past Tense",
    path: "/pasttense",
    meta: {
      nav: true
    }
  },
  {
    component: Pronouns,
    name: "Pronoun",
    path: "/pronoun",
    meta: {
      nav: true
    }
  },
  {
    component: QuizMaker,
    name: "QuizMaker",
    path: "/quizmaker",
    meta: {
      nav: true
    }
  },
  {
    component: VerbQuiz,
    name: "VerbQuiz",
    path: "/verbquiz",
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
