import { Noun } from "./noun";

export class NounQuizConfiguration {
  nouns: Array<Noun>;

  public constructor(src?: INounQuizConfiguration) {
    if(src) {
      this.nouns = src.nouns;
    }
    else {
      this.nouns = [];
    }
  }
}

export interface INounQuizConfiguration {
  nouns: Array<Noun>;
}