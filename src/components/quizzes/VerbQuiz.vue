<template>
  <tab-quiz :quizModels="quizModels" />
</template>
<style lang="scss" scoped>
</style>
<script lang="ts">

import { Vue, Component, Prop } from "vue-property-decorator";
import { ConjugationHelper } from "../../helpers/conjugation-helper";
import TabQuiz from "../shared/tab-quiz.vue";
import { IQuizComponentPropertyModel } from "../shared/tab-quiz.vue";
import { getRandomNumber, getRandomEnum, stripAccents } from "../../util/utility";
import { Pronoun } from "../../words/pronouns";
import { Tense } from "../../models/tenses";
import { Question } from "../shared/question";

@Component({
  name: "VerbQuiz",
  components: {
    TabQuiz
  }
})
export default class VerbQuiz extends Vue {
  quizModels!: Array<IQuizComponentPropertyModel>;

  get verbs() {
    return this.$store.state.verbQuiz.verbs;
  }

  get pronouns() {
    return this.$store.state.verbQuiz.pronouns;
  }

  get tenses() {
    return this.$store.state.verbQuiz.tenses;
  }

  public constructor() {
    super();
  }

  public created() {
    this.quizModels = [
      {
        reference: 'verb-quiz',
        name: 'Verb Quiz',
        question: this.getQuestion(),
        questionFunction: this.getQuestion
      }
    ];
  }

  getQuestion() {
    var verb = this.verbs[getRandomNumber(this.verbs.length - 1)];
    var pronoun = getRandomEnum(this.pronouns);
    var tense = getRandomEnum(this.tenses);

    const exactAnswer = ConjugationHelper.getConjugation(verb, pronoun, tense);
    const question = {
      questionText: "(" + Pronoun[pronoun as keyof typeof Pronoun] + ") " + verb.englishMeaning,
      questionSubText: "Write the following in <b>" + tense.toString() + "</b> tense.",
      questionAnswers: [exactAnswer, stripAccents(exactAnswer)]
    };

    return question;
  }
}
</script>