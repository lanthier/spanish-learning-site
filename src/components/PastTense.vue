<template>
  <section>
    <paper-tabs
      class="paper-tabs tabs-fixed-width z-depth-1"
      :selected="selectedPage ? selectedPage : 0"
    >
      <!-- <paper-tab class="paper-tab" @click="setSelectedPage(0)">Information</paper-tab> -->
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
      <!-- <PastTenseInformation class="container"/>-->
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
import { Watch } from "vue-property-decorator";
import PastTenseInformation from "./past-tense/information.vue";
import { Question } from "./shared/question";
import Quiz from "./shared/quiz.vue";
import {
  getRandomEnum,
  getRandomNumber,
  stripAccents
} from "../util/utility";
import { Pronoun } from "../words/pronouns";
import { Verb, VerbHelpers } from "../words/verb";
import { verbs } from "../words/verbs";
import Quizz from "./shared/quiz.vue";

@Component({
  components: {
    PastTenseInformation,
    Quiz,
  }
})
export default class PastTense extends Vue {
  selectedPage: number = 0;
  quizModels!: Array<IQuizComponentPropertyModel>;
  verbs: Array<Verb> = verbs;
  verbHelper = new VerbHelpers();

  public constructor() {
    super();
  }

  public mounted() {
    this.setupQuizzes();
  }

  data() {
    return {
      selectedPage: this.selectedPage,
      quizModels: this.quizModels
    };
  }

  setupQuizzes() {
    this.quizModels = [
      {
        name: 'preterite-quiz',
        question: this.getPreteriteQuestion(),
        questionFunction: this.getPreteriteQuestion
      },
      {
        name: 'imperfect-quiz',
        question: this.getImperfectQuestion(),
        questionFunction: this.getImperfectQuestion
      }
    ];
  }

  setSelectedPage(index: number) {
    this.selectedPage = index;
  }

  getPreteriteQuestion() : Question {
    const pronoun = getRandomEnum(Pronoun);
    const verb = this.verbs[getRandomNumber(this.verbs.length)];
    const exactAnswer = this.verbHelper.getPreteritePastTense(verb, pronoun);
    const question = {
      questionText: "(" + pronoun + ") " + verb.englishMeaning,
      questionSubText: 'Write the following in <b>preterite</b> past tense.',
      questionAnswers: [exactAnswer, stripAccents(exactAnswer)]
    };
    return question;
    
  }

  getImperfectQuestion() : Question{
    const pronoun = getRandomEnum(Pronoun);
    const verb = this.verbs[getRandomNumber(this.verbs.length)];
    const exactAnswer = this.verbHelper.getImperfectPastTense(verb, pronoun);
    const question = {
      questionText: "(" + pronoun + ") " + verb.englishMeaning,
      questionSubText: 'Write the following in <b>imperfect</b> past tense.',
      questionAnswers: [exactAnswer, stripAccents(exactAnswer)]
    };
    return question;
  }
}

export interface IQuizComponentPropertyModel {
  name: string,
  questionFunction: () => Question;
  question: Question;
}
</script>