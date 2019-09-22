import Vue from 'vue';
import Vuex from 'vuex';
import verbQuiz from "./modules/verb-quiz";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    verbQuiz
  }
})