import { InternalLink } from "./internal-link";

export class Question {
  questionText: string;
  questionAnswers: Array<string>;
  questionAnswerResource?: InternalLink;
  meta?: any;

  public constructor(src?: IQuestion) {
    if (src) {
      this.questionText = src.questionText;
      this.questionAnswers = src.questionAnswers;
      this.questionAnswerResource = src.questionAnswerResource;
      this.meta = src.meta;
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
  questionAnswerResource?: InternalLink;
  meta?: any;
}