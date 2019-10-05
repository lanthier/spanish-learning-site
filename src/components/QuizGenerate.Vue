<template>
  <section class="row">
    <section class="row">
      <paper-button class="btn generate-button" @click="generatePdf">Generate PDF</paper-button>
    </section>
    <div class="col s6 flex-column">
      <div class="input-container">
        <label>Title of quiz</label>
        <input maxlength="100" v-model="quizTitle"/>
      </div>
      <div class="input-container">
        <label>Number of questions</label>
        <input type="number" min="1" max="50" v-model="questionAmount" />
      </div>
      <div class="input-container">
        <label>How would you like your answers?</label>
        <select>
          <option>I don't want answers</option>
          <option>On a separate sheet</option>
          <option>Upside down on the bottom</option>
          <option>Show me the answers here</option>
        </select>
      </div>
    </div>
    <div class="col s6">
    </div>
  </section>
</template>
<style lang="scss" scoped>

</style>
<script lang="ts">
declare var require: any;
import { Vue, Component, Prop } from "vue-property-decorator";
import { getRandomEnum, getRandomNumber, stripAccents } from "../util/utility";
import { ConjugationHelper } from "../helpers/conjugation-helper";
import { Question } from "../models/question";
const pdfMake = require("pdfmake/build/pdfmake");
const pdfFonts = require("pdfmake/build/vfs_fonts");
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component
export default class QuizGenerate extends Vue {
  quizTitle!: string;
  questionAmount!: number;
  docDefinition!: any;

  get verbs() {
    return this.$store.state.verbQuiz.config.verbs;
  }

  get pronouns() {
    return this.$store.state.verbQuiz.config.pronouns;
  }

  get tenses() {
    return this.$store.state.verbQuiz.config.tenses;
  }

  public constructor() {
    super();
  }

  public created() {
    this.quizTitle = "";
    this.questionAmount = 10;
    this.docDefinition = {
      styles: this.getStyles()
    }
  }

  getQuestion() {
    const verb = this.verbs[getRandomNumber(this.verbs.length)];
    const pronoun = this.pronouns[getRandomNumber(this.pronouns.length)];
    const tense = getRandomEnum(this.tenses);

    const exactAnswer = ConjugationHelper.getConjugation(verb, pronoun, tense);
    const question: Question = {
      questionText: "(" + pronoun + ", " + tense + ") " + verb.englishMeaning,
      questionSubText: "Write the following in <b>" + tense.toString() + "</b> tense.",
      questionAnswers: [exactAnswer, stripAccents(exactAnswer)],
    };
    return question;
  }

  public generatePdf() {
    this.docDefinition.content = [
      {text: this.quizTitle != '' ? this.quizTitle : 'Verb Quiz', style: 'header'}
    ];
    const contentLength = this.docDefinition.content.length;
    for(let i = 0; i < this.questionAmount; i+=1) {
      const question = this.getQuestion();
      const questionText = (i+1) + ". " + question.questionText;
      if(i % 2) {
        debugger;
        this.docDefinition.content[this.docDefinition.content.length - 1].columns.push({
          width: "50%",
          text: questionText,
          style: 'marginBottom'
        });
      }
      else {
        this.docDefinition.content.push({
          columns: [
            {
              width: "50%",
              text: questionText  ,
              style: 'marginBottom'
            }
          ]
        });
      }
    }
    pdfMake.createPdf(this.docDefinition).open();
  }

  public getStyles() {
    return {
      header: {
        fontSize: 18,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 40]
      },
      marginBottom: {
        margin: [0, 0, 0, 30]
      }
    }
  }
  
  
}
</script>