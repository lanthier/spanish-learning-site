import { Verb } from "../../models/verb";
import { Pronoun } from "../../words/pronouns";
import { Tense } from "../../models/tenses";
import { VerbQuizConfigurationService } from "../../services/verb-quiz-configuration";
import { QuizResults } from "../../models/quiz-results";
import { VerbQuizState } from "../../models/verb-quiz-state";
import { QuestionResult } from "../../models/question-result";

const state: VerbQuizState = {
  config: VerbQuizConfigurationService.getVerbQuizConfiguration(),
  results: new QuizResults()
}

const getters = {};
const actions = {};

const mutations = {
  setVerbs(state: VerbQuizState, verbs: Array<Verb>) {
    state.config.verbs = verbs;
    VerbQuizConfigurationService.postVerbQuizConfiguration(state.config);
  },
  setPronouns(state: VerbQuizState, pronouns: Array<Pronoun>) {
    state.config.pronouns = pronouns;
    VerbQuizConfigurationService.postVerbQuizConfiguration(state.config);
  },
  setTenses(state: VerbQuizState, tenses: Array<Tense>) {
    state.config.tenses = tenses;
    VerbQuizConfigurationService.postVerbQuizConfiguration(state.config);
  },
  postResult(state: VerbQuizState, questionResult: QuestionResult) {
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