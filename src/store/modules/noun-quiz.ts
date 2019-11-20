import { Noun } from "../../models/noun";
import { NounQuizState } from "../../models/noun-quiz-state";
import { NounQuizConfigurationService } from "../../services/noun-quiz-configuration";
import { QuestionResult } from "../../models/question-result";
import { QuizResults } from "../../models/quiz-results";

const state: NounQuizState = {
  config: NounQuizConfigurationService.getNounQuizConfiguration(),
  results: new QuizResults()
}

const getters = {};
const actions = {};

const mutations = {
  setNouns(state: NounQuizState, nouns: Array<Noun>) {
    state.config.nouns = nouns;
    NounQuizConfigurationService.postNounQuizConfiguration(state.config);
  },
  postResult(state: NounQuizState, questionResult: QuestionResult) {
    state.results!.results.push(questionResult);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}