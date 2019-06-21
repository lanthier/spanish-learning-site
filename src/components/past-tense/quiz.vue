<template>
  <div>this component will quiz me</div>
</template>
<style>
</style>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Verb, VerbHelpers } from "../../words/verb";
import { verbs } from "../../words/verbs";
import { Pronoun } from "../../words/pronouns";
import {
  getRandomEnum,
  getRandomNumber,
  stripAccents
} from "../../util/utility";
import { Question } from "../shared/question";

@Component
export default class PastTenseQuiz extends Vue {
  verbs: Array<Verb> = verbs;
  verbHelper = new VerbHelpers();
  question: Question;
  public constructor() {
    super();
    this.question = this.getQuestion();
  }
  public mounted() {}

  public getQuestion(): Question {
    const pronoun = getRandomEnum(Pronoun);
    const verb = this.verbs[getRandomNumber(this.verbs.length)];
    const exactAnswer = this.verbHelper.getPreteritePastTense(verb, pronoun);
    const question = {
      questionText: "(" + pronoun + ") " + verb.englishMeaning,
      questionAnswers: [exactAnswer, stripAccents(exactAnswer)]
    };

    return question;
  }
}
</script>