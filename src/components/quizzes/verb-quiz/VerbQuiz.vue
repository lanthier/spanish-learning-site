<template>
<section>
  <router-link class="back-link" :to="'verbquizconfig'">Back to configuration</router-link> 
    <Quiz class="container" 
      :questionFunction="getQuestion" 
      :results="quizResults"
      :resultsRoute="'verbquizresults' + this.getReturnUrlParams()"
      @questionAnswered="postQuestionResult"/>
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
import Quiz from "../../shared/Quiz.vue";
import { getRandomNumber, getRandomEnum, stripAccents } from "../../../util/utility";
import { Pronoun } from "../../../words/pronouns";
import { Tense } from "../../../models/tenses";
import { Question } from "../../../models/question";
import { QuestionResult } from "../../../models/question-result";
import { VerbQuestionMetadata } from "../../../models/verb-question-metadata";

@Component({
  name: "VerbQuiz",
  components: {
    Quiz
  }
})
export default class VerbQuiz extends Vue {
  get verbs() {
    return this.$store.state.verbQuiz.config.verbs;
  }

  get pronouns() {
    return this.$store.state.verbQuiz.config.pronouns;
  }

  get tenses() {
    return this.$store.state.verbQuiz.config.tenses;
  }

  get quizResults() {
    return this.$store.state.verbQuiz.results;
  }

  public constructor() {
    super();
  }

  getQuestion() {
    const verb = this.verbs[getRandomNumber(this.verbs.length)];
    const pronoun = this.pronouns[getRandomNumber(this.pronouns.length)];
    const tense = getRandomEnum(this.tenses);
    const exactAnswer = ConjugationHelper.getConjugation(verb, pronoun, tense);
    const question: Question = {
      questionText: "(" + pronoun + ") " + verb.englishMeaning,
      questionSubText: "Write the following in <b>" + tense.toString() + "</b> tense.",
      questionAnswers: [exactAnswer, stripAccents(exactAnswer)],
      questionAnswerResource: { label: "See conjugation", internalUrl: "conjugation/" + verb.name + this.getReturnUrlParams() }
    };
    question.meta = new VerbQuestionMetadata({
      verb: verb,
      pronoun: pronoun,
      tense: tense
    });
    return question;
  }

  navigateToVerbConfig() {
    this.$router.push('quizmaker');
  }

  postQuestionResult(questionResult: QuestionResult) {
    this.$store.commit('verbQuiz/postResult', questionResult);
  }

  getReturnUrlParams() {
    return "?returnUrl=/verbquiz&returnLabel=backToQuiz";
  }
}
</script>