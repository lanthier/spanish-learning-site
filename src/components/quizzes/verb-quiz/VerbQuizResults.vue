<template>
  <section>
    <paper-tabs
      class="paper-tabs tabs-fixed-width z-depth-1"
      :selected="selectedPage ? selectedPage : 0"
    >
      <paper-tab class="paper-tab" @click="selectedPage = 0">Analyze your results</paper-tab>
      <paper-tab class="paper-tab" @click="selectedPage = 1">Question and answer history</paper-tab>
    </paper-tabs>
    <iron-pages class="iron-pages" :selected="selectedPage ? selectedPage : 0">
      <section class="container">
        <div class="container">
          <div class="grid">
            <div class="card margin">
              <PieChart v-if="chartHasData(tenseCorrectChartData)" :chartData="tenseCorrectChartData" :options="{ title: { text: 'Correct by tense', display: true, fontSize: 16, fontColor: '#000' }}"></PieChart>
              <div v-else class="no-data">
                <h5>Amount of questions correct by tense will be here (no data)</h5>
              </div>
            </div>
            <div class="card margin">
              <PieChart v-if="chartHasData(pronounCorrectChartData)" :chartData="pronounCorrectChartData" :options="{ title: { text: 'Correct by pronoun', display: true, fontSize: 16, fontColor: '#000' }}"></PieChart>
              <div v-else class="no-data">
                <h5>Amount of questions correct by pronoun will be here (no data)</h5>
              </div>
            </div>
          </div>
          <div class="grid">
            <div class="card margin">
              <PieChart v-if="chartHasData(tenseIncorrectChartData)" :chartData="tenseIncorrectChartData" :options="{ title: { text: 'Incorrect by tense', display: true, fontSize: 16, fontColor: '#000' }}"></PieChart>
              <div v-else class="no-data">
                <h5>Amount of questions incorrect by tense will be here (no data)</h5>
              </div>
            </div>
            <div class="card margin">
              <PieChart v-if="chartHasData(pronounIncorrectChartData)" :chartData="pronounIncorrectChartData" :options="{ title: { text: 'Incorrect by pronoun', display: true, fontSize: 16, fontColor: '#000' }}"></PieChart>
              <div v-else class="no-data">
                <h5>Amount of questions incorrect by pronoun will be here (no data)</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container">
        <h4 v-if="results.totalQuestions">
          You have answered your questions with
          <span :class="percentageColorClass">{{ results.questionsCorrectPercentage }}%</span> accuracy.
        </h4>
        <h4 v-else>
          No data to display, answer more questions to see results show up here!
        </h4>
        <div class="card padded margin" v-for="result in results.results">
          <strong v-if="result.correct" class="color-green">Correct</strong>
          <strong v-else class="color-red">Incorrect</strong>
          <div class="flex-column">
            <span>
              <b>Question:</b>
              {{ result.question.questionText }}
            </span>
            <span>
              <b>Your inital response:</b>
              <span
                :class="result.correct ? 'color-green' : 'color-red'"
              >{{ result.userAnswer ? result.userAnswer : 'N/A' }}</span>
            </span>
            <span>
              <b>Answer:</b>
              <span class="color-green">{{ result.question.questionAnswers[0] }}</span>
            </span>
          </div>
        </div>
      </section>
    </iron-pages>
  </section>
</template>
<style lang="scss" scoped>

.paper-tabs {
  --paper-tabs-selection-bar-color: var(--primary-color);
}
.paper-tab {
  --paper-tab-ink: var(--primary-color);
  padding-left: 12px;
}

.card {
  &.padded {
    padding: 8px;
  }

  &.margin {
    margin: 8px;
  }
}

.color-green {
  color: green;
}
.color-red {
  color: red;
}
.color-yellow {
  color: #fde541;
}
.color-yellowgreen {
  color: yellowgreen;
}

.no-data {
  display: flex;
  justify-content: center;
  align-items: center;
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
  tenseCorrectChartData: any;
  tenseIncorrectChartData: any;
  pronounCorrectChartData: any;
  pronounIncorrectChartData: any;

  get tenses(): Array<string> {
    return this.$store.state.verbQuiz.config.tenses;
  }

  get pronouns(): Array<string> {
    return this.$store.state.verbQuiz.config.pronouns;
  }

  get verbs(): Array<Verb> {
    return this.$store.state.verbQuiz.config.verbs;
  }

  get results(): QuizResults {
    return this.$store.state.verbQuiz.results;
  }

  get correctQuestions(): Array<QuestionResult> {
    return this.results.results.filter(
      (result: QuestionResult) => result.correct == true
    );
  }

  get incorrectQuestions(): Array<QuestionResult> {
    return this.results.results.filter(
      (result: QuestionResult) => result.correct == false
    );
  }

  get percentageColorClass() {
    const percentage = this.results.questionsCorrectPercentage;
    if (percentage < 61) {
      return "color-red";
    } else if (percentage < 71) {
      return "color-yellow";
    } else if (percentage < 83) {
      return "color-yellowgreen";
    } else return "color-green";
  }

  public constructor() {
    super();
  }

  public created() {
    this.tenseCorrectChartData = this.getChartDataByPronoun(true);
    this.tenseIncorrectChartData = this.getChartDataByPronoun(false);
    this.pronounCorrectChartData = this.getChartDataByTense(true);
    this.pronounIncorrectChartData = this.getChartDataByTense(false);

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
      backgroundColor: ["#FF5733", "#68FF33", "#333CFF", "#FF33X7", "#FF3333"]
    };
    let i = 0;
    this.tenses.forEach((tense: string) => {
      const count = results.filter(
        (result: QuestionResult) => result.question.meta.tense == tense
      ).length;
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
      backgroundColor: ["#FF5733", "#68FF33", "#333CFF", "#FF33X7", "#FF3333"]
    };
    let i = 0;
    this.pronouns.forEach((pronoun: string) => {
      const count = results.filter(
        (result: QuestionResult) => result.question.meta.pronoun == pronoun
      ).length;
      chartData.labels[i] = pronoun;
      chartData.datasets[0].data[i] = count;
      i++;
    });

    return chartData;
  }

  public data() {
    return {
      selectedPage: this.selectedPage
    };
  }

  private chartHasData(chart: any) {
    if(chart.datasets && chart.datasets[0].data) {
      const chartData = chart.datasets[0].data;
      for(var i = 0; i < chartData.length; i++) {
        if(chartData[i] != 0) {
          return true;
        }
      }
    }

    return false;
  }
}
</script>