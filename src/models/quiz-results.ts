import { QuestionResult } from "./question-result";

export class QuizResults {
  results: Array<QuestionResult>;

  get totalQuestions(): number{
    return this.results.length;
  }

  get questionsCorrect(): number{
    return this.results.filter((result: QuestionResult) => result.correct).length;
  }

  get questionsIncorrect(): number{
    return this.results.filter((result: QuestionResult) => !result.correct).length;
  }

  get questionsCorrectPercentage(): number{
    if(this.totalQuestions == 0) {
      return 100;
    }
    return Math.round((this.questionsCorrect / this.totalQuestions * 100));
  }

  public constructor(src?: IQuizResults) {
    if(src) {
      this.results = src.results;
    }
    else {
      this.results = [];
    }
  }
}

export interface IQuizResults {
  results: Array<QuestionResult>;
}