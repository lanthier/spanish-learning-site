import Vue from "vue";
import { Verb, VerbHelpers } from "../../words/verb";
import { verbs } from "../../words/verbs";
import { Pronoun } from "../../words/pronouns";

import { Question } from "./question";

export default abstract class Quiz extends Vue {
  verbs: Array<Verb> = verbs;
  verbHelper = new VerbHelpers();

  public constructor() {
    super();
  }
  public mounted() { }

  public abstract getQuestion(): Question;
}