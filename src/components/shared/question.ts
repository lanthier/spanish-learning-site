export class Question {
  questionText: string;
  questionSubText: string;
  questionAnswers: Array<string>;

  public constructor(src?: IQuestion) {
    if (src) {
      this.questionText = src.questionText;
      this.questionSubText = src.questionSubText;
      this.questionAnswers = src.questionAnswers;
    }
    else {
      this.questionText = "";
      this.questionSubText = "";
      this.questionAnswers = new Array<string>();
    }
  }
}

export interface IQuestion {
  questionText: string;
  questionSubText: string;
  questionAnswers: Array<string>;
}