<template>
<section>
  <router-link class="back-link" :to="'verbquizconfig'">Back to configuration</router-link> 
    <Quiz class="container" :questionFunction="getQuestion"/>
</section>
</template>
<style lang="scss" scoped>
.back-link {
	color: #1f5ea8;
	font-weight: 600;
	display: flex;
	align-items: center;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		color: #17477d;
	}
}
</style>
<script lang="ts">

import { Vue, Component, Prop } from "vue-property-decorator";
import { ConjugationHelper } from "../../../helpers/conjugation-helper";
import Quiz from "../../shared/quiz.vue";
import { getRandomNumber, getRandomEnum, stripAccents } from "../../../util/utility";
import { Pronoun } from "../../../words/pronouns";
import { Tense } from "../../../models/tenses";
import { Question } from "../../shared/question";

@Component({
  name: "VerbQuiz",
  components: {
    Quiz
  }
})
export default class VerbQuiz extends Vue {
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
  }

  getQuestion() {
    const verb = this.verbs[getRandomNumber(this.verbs.length)];
    const pronoun = this.pronouns[getRandomNumber(this.pronouns.length)];
    const tense = getRandomEnum(this.tenses);

    const exactAnswer = ConjugationHelper.getConjugation(verb, pronoun, tense);
    const question = {
      questionText: "(" + pronoun + ") " + verb.englishMeaning,
      questionSubText: "Write the following in <b>" + tense.toString() + "</b> tense.",
      questionAnswers: [exactAnswer, stripAccents(exactAnswer)]
    };

    return question;
  }

  navigateToVerbConfig() {
    this.$router.push('quizmaker');
  }
}
</script>