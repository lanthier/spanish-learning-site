<template>
  <div>
    <div>
      <div class="heading">
        <p v-html="question.questionSubText"></p>
        <p> <span class="big-number correct">{{ this.results.questionsCorrect }}</span> correct out of <span class="big-number">{{ this.results.totalQuestions }}</span></p>
      </div>
    </div>
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
      <paper-button class="waves-effect waves-light btn" @click="giveUp">I suck</paper-button>
      <paper-button class="waves-effect waves-light btn" @click="checkAnswer" :disabled="gaveUp">Check answer</paper-button>
      <paper-button class="waves-effect waves-light btn" @click="nextQuestion">Next question</paper-button>
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

.heading {
  display: flex;
  justify-content: space-between;
}

.big-number {
  font-size: 24px;

  &.correct {
    color: green;
  }
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
import { Question } from "../../models/question";
import { Pronoun } from "../../words/pronouns";
import Component from "vue-class-component";
import { Verb } from "../../models/verb";
import { verbs } from "../../words/verbs";
import { QuizResults } from "../../models/quiz-results";
import { QuestionResult } from "../../models/question-result";

@Component
export default class Quiz extends Vue{
  @Prop() questionFunction!: () => Question;
  @Prop() results!: QuizResults;
  userAnswer: string = "";
  answerCorrect: boolean = false;
  answerWrong: boolean = false;
  gaveUp: boolean = false;
  question!: Question;
  questionAnswered: boolean = false;

  public constructor() {
    super();
  }

  public created() {
    this.question = this.questionFunction();
  }

  public data() {
    return {
      question: this.question
    }
  }

  public checkAnswer() {
    this.emitAnswered();
    const result = this.question.questionAnswers.includes(this.userAnswer);
    if (result) {
      this.answerCorrect = true;
      this.answerWrong = false;
    } else {
      this.answerCorrect = false;
      this.answerWrong = true;
    }

    this.$forceUpdate();
  }

  public nextQuestion() {
    this.$emit('nextQuestion');
    this.question = this.questionFunction();
    this.reset();
  }

  public giveUp() {
    this.emitAnswered();
    this.gaveUp = true
  }

  public emitAnswered() {
    if(!this.questionAnswered) {
      this.questionAnswered = true;
      this.$emit('questionAnswered', new QuestionResult({ question: this.question, userAnswer: this.userAnswer }));
    }
  }

  public reset() {
    this.answerCorrect = this.answerWrong = false;
    this.userAnswer = "";
    this.gaveUp = false;
    this.questionAnswered = false;
  }
}

</script>
