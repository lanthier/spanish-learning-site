import { Pronoun } from "../words/pronouns";

export class PronounGroup {
  label: string;
  pronouns: Array<Pronoun>;

  public constructor(src?: IPronounGroup) {
    if(src) {
      this.label = src.label;
      this.pronouns = src.pronouns;
    }
    else {
      this.label = "";
      this.pronouns = [];
    }
  }
}

export interface IPronounGroup {
  label: string;
  pronouns: Array<Pronoun>;
}