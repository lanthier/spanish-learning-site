export class Question {
  questionText: string;
  questionAnswers: Array<string>;

  public constructor(src?: IQuestion) {
    if (src) {
      this.questionText = src.questionText;
      this.questionAnswers = src.questionAnswers;
    }
    else {
      this.questionText = "";
      this.questionAnswers = new Array<string>();
    }
  }
}

export interface IQuestion {
  questionText: string;
  questionAnswers: Array<string>;
}