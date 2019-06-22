<template>
  <div>
    <p>
      Write the following in
      <b>imperfect</b> past tense.
    </p>
    <h5>{{question.questionText}}</h5>
    <input
      v-model="userAnswer"
      class="scale-transition"
      :class="{ 'input-incorrect': answerWrong, 'input-correct': answerCorrect}"
    >
    <div class="question-buttons">
      <span v-if="answerWrong" class="response-text incorrect">Incorrect</span>
      <span v-if="answerCorrect" class="response-text correct">Correct</span>
      <span v-if="gaveUp" class="response-text gave-up">
        The answer was
        <span class="response-text correct">{{ question.questionAnswers[0] }}</span>
      </span>
      <button class="waves-effect waves-light btn" @click="gaveUp = true">I suck</button>
      <button class="waves-effect waves-light btn" @click="checkAnswer" :disabled="gaveUp">Check answer</button>
      <button class="waves-effect waves-light btn" @click="nextQuestion">Next question</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.question-buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.btn {
  margin: 8px;
  &[disabled] {
    cursor: not-allowed;
    pointer-events: unset;
  }
}

.response-text {
  font-size: 18px;
  margin-right: auto;
  font-weight: 600;
  &.correct {
    color: green;
  }
  &.incorrect {
    color: red;
  }
}
.input-correct {
  border-bottom: 2px solid green;
}
.input-incorrect {
  border-bottom: 2px solid red;
}
</style>

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
export default class ImperfectQuiz extends Quiz {
  question!: Question;
  userAnswer: string = "";
  answerCorrect: boolean = false;
  answerWrong: boolean = false;
  gaveUp: boolean = false;

  public constructor() {
    super();
  }

  public created() {
    this.question = this.getQuestion();
  }

  public getQuestion(): Question {
    const pronoun = getRandomEnum(Pronoun);
    const verb = this.verbs[getRandomNumber(this.verbs.length)];
    const exactAnswer = this.verbHelper.getImperfectPastTense(verb, pronoun);
    const question = {
      questionText: "(" + pronoun + ") " + verb.englishMeaning,
      questionAnswers: [exactAnswer, stripAccents(exactAnswer)]
    };
    return question;
  }

  public checkAnswer() {
    const result = this.question.questionAnswers.includes(this.userAnswer);
    if (result) {
      this.answerCorrect = true;
      this.answerWrong = false;
    } else {
      this.answerCorrect = false;
      this.answerWrong = true;
    }
  }

  public nextQuestion() {
    this.question = this.getQuestion();
    this.reset();
    this.$forceUpdate(); //TODO make question reactive when I feel like it
  }

  public reset() {
    this.answerCorrect = this.answerWrong = false;
    this.userAnswer = "";
    this.gaveUp = false;
  }
}
</script>
