import { InternalLink } from "./internal-link";

export class Question {
  questionText: string;
  questionSubText: string;
  questionAnswers: Array<string>;
  questionAnswerResource?: InternalLink;
  meta?: any;

  public constructor(src?: IQuestion) {
    if (src) {
      this.questionText = src.questionText;
      this.questionSubText = src.questionSubText;
      this.questionAnswers = src.questionAnswers;
      this.questionAnswerResource = src.questionAnswerResource;
      this.meta = src.meta;
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
  questionAnswerResource?: InternalLink;
  meta?: any;
}