<template>
  <div>
    <p v-html="question.questionSubText"></p>
    <h5>{{question.questionText}}</h5>
    <input
      v-model="userAnswer"
      class="scale-transition"
      :class="{ 'input-incorrect': answerWrong, 'input-correct': answerCorrect}"
    >
    <div class="question-buttons">
      <span v-if="answerWrong" class="response-text incorrect">Incorrect</span>
      <span v-if="answerCorrect" class="response-text correct">Correct</span>
      <span v-if="gaveUp" class="response-text">
        The answer was <span class="response-text correct">{{ question.questionAnswers[0] }}</span>
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
import { Prop } from "vue-property-decorator";
import {
  getRandomEnum,
  getRandomNumber,
  stripAccents
} from "../../util/utility";
import { Question } from "../shared/question";
import { Pronoun } from "../../words/pronouns";
import Component from "vue-class-component";
import { Verb, VerbHelpers } from "../../words/verb";
import { verbs } from "../../words/verbs";

@Component
export default class Quizz extends Vue{

  @Prop() question!: Question;
  userAnswer: string = "";
  answerCorrect: boolean = false;
  answerWrong: boolean = false;
  gaveUp: boolean = false;
  public constructor() {
    super();
  }

  public created() {
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
    this.$emit('nextQuestion');
    this.reset();
  }

  public reset() {
    this.answerCorrect = this.answerWrong = false;
    this.userAnswer = "";
    this.gaveUp = false;
  }
}
</script>
