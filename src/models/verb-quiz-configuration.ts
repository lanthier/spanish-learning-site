import { Verb } from "./verb";
import { Pronoun } from "../words/pronouns";
import { Tense } from "./tenses";

export class VerbQuizConfiguration {
  verbs: Array<Verb>;
  pronouns: Array<Pronoun>;
  tenses: Array<Tense>;

  public constructor(src?: IVerbQuizConfiguration) {
    if(src) {
      this.verbs = src.verbs;
      this.pronouns = src.pronouns;
      this.tenses = src.tenses;
    }
    else {
      this.verbs = this.pronouns = this.tenses = [];
    }
  }
}

export interface IVerbQuizConfiguration {
  verbs: Array<Verb>;
  pronouns: Array<Pronoun>;
  tenses: Array<Tense>;
}