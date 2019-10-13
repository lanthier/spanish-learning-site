import { VerbQuizConfiguration } from "./verb-quiz-configuration";
import { QuizResults } from "./quiz-results";

export class VerbQuizState {
  config: VerbQuizConfiguration;
  results?: QuizResults;

  public constructor(src?: IVerbQuizState) {
    if(src) {
      this.config = src.config;
      this.results = src.results;
    }
    else {
      this.config = new VerbQuizConfiguration();
      this.results = new QuizResults();
    }
  }
}

export interface IVerbQuizState {
  config: VerbQuizConfiguration;
  results?: QuizResults;
}