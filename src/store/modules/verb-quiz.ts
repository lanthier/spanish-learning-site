import { VerbQuizConfiguration } from "../../models/verb-quiz-configuration";
import { Verb } from "../../words/verb";
import { Pronoun } from "../../words/pronouns";
import { Tense } from "../../models/tenses";
import { VerbQuizConfigurationService } from "../../services/verb-quiz-configuration";

const state: VerbQuizConfiguration = VerbQuizConfigurationService.getVerbQuizConfiguration();

const getters = {};
const actions = {};

const mutations = {
  setVerbs(state: VerbQuizConfiguration, verbs: Array<Verb>) {
    state.verbs = verbs;
    VerbQuizConfigurationService.postVerbQuizConfiguration(state);
  },
  setPronouns(state: VerbQuizConfiguration, pronouns: Array<Pronoun>) {
    state.pronouns = pronouns;
    VerbQuizConfigurationService.postVerbQuizConfiguration(state);
  },
  setTenses(state: VerbQuizConfiguration, tenses: Array<Tense>) {
    state.tenses = tenses;
    VerbQuizConfigurationService.postVerbQuizConfiguration(state);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}