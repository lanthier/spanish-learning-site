<template>
  <section>
    <paper-tabs
      class="paper-tabs tabs-fixed-width z-depth-1"
      :selected="selectedPage ? selectedPage : 0"
    >
      <paper-tab class="paper-tab" @click="setSelectedPage(0)">Preterite Quiz</paper-tab>
      <paper-tab class="paper-tab" @click="setSelectedPage(1)">Imperfect Quiz</paper-tab>
    </paper-tabs>
    <iron-pages class="iron-pages" :selected="selectedPage ? selectedPage : 0">
      <Quiz class="container" 
        :key="quizModel.name"
        v-for="quizModel in quizModels"
        :question="quizModel.question"
        :ref="quizModel.name"
        @nextQuestion="quizModel.question = quizModel.questionFunction();"/>
    </iron-pages>
  </section>
</template>

<style lang="scss">
paper-tab {
  --paper-tab-ink: #ee6e73;
  padding-left: 12px;
}

paper-tabs {
  --paper-tabs-selection-bar-color: #ee6e73;
}

</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import "@polymer/paper-tabs/paper-tabs.js";
import "@polymer/paper-tabs/paper-tab.js";
import "@polymer/iron-pages";
import { Prop, Watch } from "vue-property-decorator";
import PastTenseInformation from "./past-tense/information.vue";
import { Question } from "./question";
import Quiz from "./quiz.vue";
import {
  getRandomEnum,
  getRandomNumber,
  stripAccents
} from "../../util/utility";
import { Pronoun } from "../../words/pronouns";
import { Verb, VerbHelpers } from "../../words/verb";
import { verbs } from "../../words/verbs";

@Component({
  components: {
    Quiz,
  } 
})
export default class TabQuiz extends Vue {
  selectedPage: number = 0;
  // quizModels!: Array<IQuizComponentPropertyModel>;
  @Prop() quizModels!: Array<IQuizComponentPropertyModel>;
  verbs: Array<Verb> = verbs;
  verbHelper = new VerbHelpers();

  public constructor() {
    super();
  }

  data() {
    return {
      selectedPage: this.selectedPage,
      quizModels: this.quizModels
    };
  }

  setSelectedPage(index: number) {
    this.selectedPage = index;
  }

}

export interface IQuizComponentPropertyModel {
  name: string,
  questionFunction: () => Question;
  question: Question;
}

</script>