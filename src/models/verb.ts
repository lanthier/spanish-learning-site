import { Pronoun } from "../words/pronouns";
import { VerbConjugation } from "./verb-conjugation";
export class Verb implements IVerb {
  name: string;
  englishMeaning: string;
  conjugation!: VerbConjugation;


  public constructor(src?: IVerb) {
    if (src) {
      this.name = src.name;
      this.englishMeaning = src.englishMeaning;
      this.conjugation = src.conjugation;
    }
    else {
      this.name = '';
      this.englishMeaning = '';
    }
  }
}


export interface IVerb {
  name: string;
  englishMeaning: string;
  conjugation: VerbConjugation;
}
