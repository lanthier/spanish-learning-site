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
          <div class="row">
            <label for="pet-select">Choose a pet:</label>

            <select name="pets" id="pet-select">
                <option value="">--Please choose an option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>
            <select>
              <option>Correct</option>
              <option>Incorrect</option>
            </select>
          </div>
          <PieChart :chartData="chartData"></PieChart>
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
import PieChart from "../../charts/PieChart.vue";

@Component({
  components: {
    PieChart
  }
})
export default class VerbQuizResults extends Vue {
  selectedPage: number = 0;
  chartData: any;

  get tenses(): Array<string> {
    return this.$store.state.verbQuiz.config.tenses;
  }

  get pronouns(): Array<string> {
    return this.$store.state.verbQuiz.config.pronouns;
  }

  get verbs(): Array<Verb> {
    return this.$store.state.verbQuiz.config.verbs;
  }

  get results(): QuizResults{
    return this.$store.state.verbQuiz.results;
  }

  get correctQuestions(): Array<QuestionResult>{
    return this.results.results.filter((result: QuestionResult) => result.correct == true);
  }
  
  get incorrectQuestions(): Array<QuestionResult>{
    return this.results.results.filter((result: QuestionResult) => result.correct == false);
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

  public created() {
    this.chartData = this.getChartDataByPronoun(false);
  }

  getChartDataByTense(correct: boolean) {
    const results = correct ? this.correctQuestions : this.incorrectQuestions;
    let chartData = {
      labels: new Array<string>(),
      datasets: new Array<any>()
    };
    chartData.datasets[0] = {
      label: (correct ? "Correct" : "Incorrect") + " answers by tense.",
      data: new Array<number>(),
      backgroundColor: [
        '#FF5733',
        '#68FF33',
        "#333CFF",
        '#FF33X7',
        '#FF3333'
      ]
    }
    let i = 0;
    this.tenses.forEach((tense: string) => {
      const count = results.filter((result: QuestionResult) => result.question.meta.tense == tense).length;
      chartData.labels[i] = tense;
      chartData.datasets[0].data[i] = count;
      i++;
    });

    return chartData;
  }

  getChartDataByPronoun(correct: boolean) {
    const results = correct ? this.correctQuestions : this.incorrectQuestions;
    let chartData = {
      labels: new Array<string>(),
      datasets: new Array<any>()
    };
    chartData.datasets[0] = {
      label: (correct ? "Correct" : "Incorrect") + " questions by pronoun.",
      data: new Array<number>(),
      backgroundColor: [
        '#FF5733',
        '#68FF33',
        "#333CFF",
        '#FF33X7',
        '#FF3333'
      ]
    }
    let i = 0;
    this.pronouns.forEach((pronoun: string) => {
      const count = results.filter((result: QuestionResult) => result.question.meta.pronoun == pronoun).length;
      chartData.labels[i] = pronoun;
      chartData.datasets[0].data[i] = count;
      i++;
    });

    return chartData;
  }

  public data() {
    return {
      selectedPage: this.selectedPage
    }
  }
}
</script>