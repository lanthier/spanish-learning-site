import { VerbQuizConfiguration } from "../../models/verb-quiz-configuration";
import { Verb } from "../../words/verb";
import { Pronoun } from "../../words/pronouns";
import { Tense } from "../../models/tenses";

const state: VerbQuizConfiguration = {
  selectedVerbs: [],
  selectedPronouns: [],
  selectedTenses: []
}

const getters = {};
const actions = {};

const mutations = {
  setVerbs(state: VerbQuizConfiguration, verbs: Array<Verb>) {
    state.selectedVerbs = verbs;
  },
  setPronouns(state: VerbQuizConfiguration, pronouns: Array<Pronoun>) {
    state.selectedPronouns = pronouns;
  },
  setTenses(state: VerbQuizConfiguration, tenses: Array<Tense>) {
    state.selectedTenses = tenses;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}