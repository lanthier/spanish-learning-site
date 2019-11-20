import { NounQuizConfiguration } from "./noun-quiz-configuration";
import { QuizResults } from "./quiz-results";

export class NounQuizState {
  config: NounQuizConfiguration;
  results?: QuizResults;

  public constructor(src?: INounQuizState) {
    if(src) {
      this.config = src.config;
      this.results = src.results
    }
    else {
      this.config = new NounQuizConfiguration();
      this.results = new QuizResults();
    }
  }
}

export interface INounQuizState {
  config: NounQuizConfiguration;
  results: QuizResults;
}