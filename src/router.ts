import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
import VerbQuizConfiguration from "./components/quizzes/verb-quiz/VerbQuizConfiguration.vue";
import VerbQuiz from "./components/quizzes/verb-quiz/VerbQuiz.vue";
import VerbQuizResults from "./components/quizzes/verb-quiz/VerbQuizResults.vue";
import QuizGenerate from "./components/QuizGenerate.vue";
import VerbConjugation from "./components/VerbConjugation.vue";
import Home from "./components/Home.vue";
import AboutSite from "./components/AboutSite.vue";
import NounQuizConfiguration from "./components/quizzes/noun-quiz/NounQuizConfiguration.vue";
import NounQuiz from "./components/quizzes/noun-quiz/NounQuiz.vue";

Vue.use(Router);

const routes: RouteConfig[] = [
  {
    component: Home,
    name: "Home",
    path: "/",
    meta: {
      nav: false,
      displayName: "Home"
    }
  },
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
  },
  {
    component: QuizGenerate,
    name: "QuizGenerate",
    path: "/quizgenerate",
    meta: {
      nav: false
    }
  },
  {
    component: VerbConjugation,
    name: "VerbConjugation",
    path: "/conjugation/:verbName",
    meta: {
      nav: false
    }
  },
  {
    component: AboutSite,
    name: "AboutSite",
    path: "/aboutsite",
    meta: {
      nav: false
    }
  },
  {
    component: NounQuizConfiguration,
    name: "NounQuizConfiguration",
    path: "/nounquizconfig",
    meta: {
      nav: true,
      displayName: "Noun Study"
    }
  },
  {
    component: NounQuiz,
    name: "NounQuiz",
    path: "/nounquiz",
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
