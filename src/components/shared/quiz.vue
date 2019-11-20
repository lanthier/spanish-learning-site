<template>
  <div class="container">
    <div class="card padded">
      <div class="results-info">
        <p><span class="big-number correct">{{ this.results.questionsCorrect }}</span> correct out of <span class="big-number">{{ this.results.totalQuestions }}</span>
        <router-link v-if="resultsRoute && results.totalQuestions > 3" class="anchor-link" :to="resultsRoute">View results</router-link></p>
      </div>
      <p v-html="question.questionSubText"></p>
    <h5>{{question.questionText}}</h5>
    <UnderlineInput>
      <input
        v-model="userAnswer"
        class="scale-transition"
        :class="{ 'input-incorrect': answerWrong, 'input-correct': answerCorrect}"
      >
    </UnderlineInput>
    </div>
        <div class="question-buttons">
      <div>
        <span v-if="answerWrong" class="response-text incorrect">Incorrect</span>
        <span v-if="answerCorrect" class="response-text correct">Correct</span>
        <span v-if="gaveUp" class="response-text">
          The answer was <span class="response-text correct">{{ question.questionAnswers[0] }}</span>
        </span>
        <router-link class="anchor-link" v-if="question.questionAnswerResource && questionAnswered" :to="question.questionAnswerResource.internalUrl">
          {{ question.questionAnswerResource.label }}
        </router-link>
      </div>
      <paper-button class="btn secondary" @click="giveUp">See answer</paper-button>
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
  display: inline-block;
  padding: 6px;
  &.correct {
    color: var(--success-color);
  }
  &.incorrect {
    color: var(--error-color);
  }
}
.input-correct {
  border-bottom: 2px solid var(--success-color);
}
.input-incorrect {
  border-bottom: 2px solid var(--error-color);
}

.big-number {
  font-size: 24px;

  &.correct {
    color: var(--success-color);
  }
}

.padded {
  padding: 8px 32px 16px;
}

.results-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
import UnderlineInput from "../shared/UnderlineInput.vue";
@Component({
  components: {
    UnderlineInput
  }
})
export default class Quiz extends Vue{
  @Prop() questionFunction!: () => Question;
  @Prop() results!: QuizResults;
  @Prop() resultsRoute!: string;
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
