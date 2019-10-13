import { Question } from "./question";

export class QuestionResult {
  question: Question;
  userAnswer: string;

  get correct(): boolean{
    return this.question.questionAnswers.includes(this.userAnswer);
  }

  public constructor(src: IQuestionResult) {
    this.question = src.question;
    this.userAnswer = src.userAnswer;
  }
}

export interface IQuestionResult {
  question: Question;
  userAnswer: string;
  meta?: any;
}