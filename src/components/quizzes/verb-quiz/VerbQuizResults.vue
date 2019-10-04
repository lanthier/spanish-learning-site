<template>
  <section>
    <paper-tabs class="paper-tabs tabs-fixed-width z-depth-1" :selected="selectedPage ? selectedPage : 0">
      <paper-tab class="paper-tab" @click="selectedPage = 0">Analyze your results</paper-tab>
      <paper-tab class="paper-tab" @click="selectedPage = 1">Question and answer history</paper-tab>
    </paper-tabs>
    <iron-pages class="iron-pages" :selected="selectedPage ? selectedPage : 0">
      <section class="container">
        <h5>You have answered your questions with <span :class="percentageColorClass"> {{ results.questionsCorrectPercentage }}% </span> accuracy.</h5>
        <div class="flex-column">
          <span></span>
        </div>
      </section>
      <section class="container">
        <h5>You have answered your questions with <span :class="percentageColorClass"> {{ results.questionsCorrectPercentage }}% </span> accuracy.</h5>
        <div class="card padded" v-for="result in results.results">
          <strong v-if="result.correct" class="color-green">Correct</strong>
          <strong v-else class="color-red">Incorrect</strong>
          <div class="flex-column">
          <span><b>Question: </b>{{ result.question.questionText }}</span>
          <span><b>Your inital response: </b><span :class="result.correct ? 'color-green' : 'color-red'">{{ result.userAnswer ? result.userAnswer : 'N/A' }}</span></span>
          <span><b>Answer: </b><span class="color-green">{{ result.question.questionAnswers[0] }}</span></span>
          </div>
        </div>
      </section>
    </iron-pages>
  </section>
</template>
<style lang="scss" scoped>
  .paper-tabs {
    --paper-tabs-selection-bar-color: #ee6e73;
  }
  .paper-tab {
    --paper-tab-ink: #ee6e73;
    padding-left: 12px;
  }

  .card {
    &.padded {
      padding: 8px;
    }
  }

  //TODO This can probably just be a css variable
  .color-green {
    color: green;
  }
  .color-red {
    color: red;
  }
  .color-yellow {
    color: #FDE541;
  }
  .color-yellowgreen {
    color: yellowgreen;
  }
</style>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { QuizResults } from "../../../models/quiz-results";
import { Tense } from "../../../models/tenses";
import { Pronoun } from "../../../words/pronouns";
import { Verb } from "../../../models/verb";
import { QuestionResult } from "../../../models/question-result";
import "@polymer/iron-pages";
import "@polymer/paper-tabs";

@Component
export default class VerbQuizResults extends Vue {
  selectedPage: number = 0;
  tenses: Array<string> = this.$store.state.verbQuiz.tenses;
  pronouns: Array<string> = this.$store.state.verbQuiz.pronouns;
  verbs: Array<Verb> = this.$store.state.verbQuiz.verbs;
  get results() {
    return this.$store.state.verbQuiz.results;
  }

  get tenseResultGroups(): Array<{ key: string, results: Array<QuestionResult> }> {
    let tenseGroups: Array<{ key: string, results: Array<QuestionResult>}> = [];
    this.tenses.forEach((tense: string) => {
      tenseGroups.push({
        key: tense,
        results: this.results.results.filter((result: QuestionResult) => result.question.meta.tense == tense)
      });
    });

    return tenseGroups;
  }

  get pronounResultGroups(): Array<{ key: string, results: Array<QuestionResult> }> {
    let pronounGroups: Array<{ key: string, results: Array<QuestionResult>}> = [];
    this.pronouns.forEach((pronoun: string) => {
      pronounGroups.push({
        key: pronoun,
        results: this.results.results.filter((result: QuestionResult) => result.question.meta.pronoun == pronoun)
      });
    });

    return pronounGroups;
  }

  get verbResultGroups(): Array<{ key: string, results: Array<QuestionResult> }> {
    let verbGroups: Array<{ key: string, results: Array<QuestionResult> }> = [];
    this.verbs.forEach((verb: Verb) => {
      verbGroups.push({
        key: verb.name,
        results: this.results.results.filter((result: QuestionResult) => result.question.meta.verb.name == verb.name)
      });
    });

    return verbGroups;
  }

  get percentageColorClass() {
    const percentage = this.results.questionsCorrectPercentage;
    if(percentage < 61) {
      return 'color-red'
    }
    else if(percentage < 71) {
      return 'color-yellow';
    }
    else if(percentage < 83) {
      return 'color-yellowgreen';
    }
    else return 'color-green';
  }
  
  public constructor() {
    super();
  }

  public data() {
    return {
      selectedPage: this.selectedPage
    }
  }
}
</script>