<template>
  <section>
    <tab-quiz :quizModels="quizModels"></tab-quiz>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import PastTenseInformation from "./past-tense/information.vue";
import { Question } from "./shared/question";

import {
  getRandomEnum,
  getRandomNumber,
  stripAccents
} from "../util/utility";
import { Pronoun } from "../words/pronouns";
import { Verb, VerbHelpers } from "../words/verb";
import { verbs } from "../words/verbs";
import Quiz from "./shared/quiz.vue";
import TabQuiz from "./shared/tab-quiz.vue";

@Component({
  components: {
    PastTenseInformation,
    Quiz,
    TabQuiz
  }
})
export default class PastTense extends Vue {
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