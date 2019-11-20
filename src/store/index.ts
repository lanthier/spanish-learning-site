import Vue from 'vue';
import Vuex from 'vuex';
import verbQuiz from "./modules/verb-quiz";
import nounQuiz from "./modules/noun-quiz";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    verbQuiz,
    nounQuiz
  }
})