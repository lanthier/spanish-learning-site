<template>
  <div>
    <h2>{{question.questionText}}</h2>
    <input v-model="userAnswer">
    <button @click="checkAnswer">Check answer</button>
    <button @click="nextQuestion">Next question</button>
  </div>
</template>
<style></style>

<script lang="ts">
import Vue from "vue";
import Quiz from "../shared/quiz";
import {
  getRandomEnum,
  getRandomNumber,
  stripAccents
} from "../../util/utility";
import { Question } from "../shared/question";
import { Pronoun } from "../../words/pronouns";
import Component from "vue-class-component";

@Component
export default class PreteriteQuiz extends Quiz {
  question!: Question;
  userAnswer: string = "";
  answerCorrect: boolean = true;

  public constructor() {
    super();
  }

  public created() {
    this.question = this.getQuestion();
  }

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

  public checkAnswer() {
    this.answerCorrect = this.question.questionAnswers.includes(
      this.userAnswer
    );
  }

  public nextQuestion() {
    this.question = this.getQuestion();
  }
}
</script>
