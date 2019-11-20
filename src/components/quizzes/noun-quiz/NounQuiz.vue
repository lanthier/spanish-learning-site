<template>
  <div>
    <router-link class="anchor-link" :to="'nounquizconfig'">Back to configuration</router-link> 
    <Quiz class="container" 
      :questionFunction="getQuestion" 
      :results="quizResults"
      @questionAnswered="postQuestionResult"/>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { getRandomNumber, getRandomEnum, stripAccents } from "../../../util/utility";
import { Question } from "../../../models/question";
import { QuestionResult } from "../../../models/question-result";
import { Noun } from "../../../models/noun";
import Quiz from "../../shared/Quiz.vue";

@Component({
  components: {
    Quiz
  }
})
export default class NounQuiz extends Vue {
  get nouns() {
    return this.$store.state.nounQuiz.config.nouns;
  }

  get quizResults() {
    return this.$store.state.nounQuiz.results;
  }

  public constructor() {
    super();
  }

  getQuestion() {
    const noun = this.nouns[getRandomNumber(this.nouns.length)] as Noun;
    const exactAnswer = noun.name;
    const question: Question = {
      questionText: noun.englishMeaning,
      questionAnswers: [exactAnswer, stripAccents(exactAnswer)]
    };
    return question;
  }

  postQuestionResult(questionResult: QuestionResult) {
    this.$store.commit('nounQuiz/postResult', questionResult);
  }
}
</script>