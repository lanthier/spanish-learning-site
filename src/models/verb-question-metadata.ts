import { Verb } from "./verb";
import { Tense } from "./tenses";
import { Pronoun } from "../words/pronouns";

export class VerbQuestionMetadata {
  verb?: Verb;
  tense?: Tense;
  pronoun?: Pronoun;

  public constructor(src?: IVerbQuestionMetadata) {
    if(src) {
      this.verb = src.verb;
      this.tense = src.tense;
      this.pronoun = src.pronoun;
    }
  }
}

export interface IVerbQuestionMetadata {
  verb?: Verb;
  tense?: Tense;
  pronoun?: Pronoun;
}