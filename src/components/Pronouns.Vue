<template>
  <section>
    <tab-quiz :quizModels="quizModels"></tab-quiz>
  </section>
</template>
<style lang="scss" scoped>
</style>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import {
  getRandomEnum,
  getRandomNumber,
  stripAccents
} from "../util/utility";
import { Pronoun, PronounHelpers } from "../words/pronouns";
import { Verb, VerbHelpers } from "../words/verb";
import { verbs } from "../words/verbs";
import { IQuizComponentPropertyModel } from "./shared/tab-quiz.vue";
import TabQuiz from "./shared/tab-quiz.vue";

@Component({
  components: {
    TabQuiz
  }
})
export default class Pronouns extends Vue {
  quizModels!: Array<IQuizComponentPropertyModel>;
  verbs: Array<Verb> = verbs;
  verbHelper = new VerbHelpers();
  pronounHelper = new PronounHelpers();

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

  public setupQuizzes() {
    this.quizModels = [
      {
        reference: 'pronoun-quiz',
        name: 'Pronoun Quiz',
        question: this.getPronounQuestion(),
        questionFunction: this.getPronounQuestion
      }
    ];
  }

  getPronounQuestion() {
    const fromPronoun = getRandomEnum(Pronoun);
    const toPronoun = getRandomEnum(Pronoun);
    const verb = this.verbs[getRandomNumber(verbs.length)];
    const presentVerb = this.verbHelper.getPresentTense(verb, fromPronoun);
    var exactAnswer = this.pronounHelper.getIndirectObject(toPronoun) + " " + presentVerb;
    const question = {
      questionText: "(" + fromPronoun + " a " + toPronoun + ") " + verb.englishMeaning,
      questionSubText: "Write the following verb with the leading <b>pronoun</b> in present tense.",
      questionAnswers: [ exactAnswer, stripAccents(exactAnswer) ]
    }

    return question;
  }
}
</script>