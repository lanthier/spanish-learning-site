import { VerbQuizConfiguration } from "../../models/verb-quiz-configuration";
import { Verb } from "../../words/verb";
import { Pronoun } from "../../words/pronouns";
import { Tense } from "../../models/tenses";

const state: VerbQuizConfiguration = {
  verbs: [],
  pronouns: [],
  tenses: []
}

const getters = {
  
};
const actions = {};

const mutations = {
  setVerbs(state: VerbQuizConfiguration, verbs: Array<Verb>) {
    state.verbs = verbs;
  },
  setPronouns(state: VerbQuizConfiguration, pronouns: Array<Pronoun>) {
    state.pronouns = pronouns;
  },
  setTenses(state: VerbQuizConfiguration, tenses: Array<Tense>) {
    state.tenses = tenses;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}