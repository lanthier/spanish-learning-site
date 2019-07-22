//TODO Make pronoun an object
export enum Pronoun {
  I = "yo",
  WE_FEMININE = "nosotros",
  WE_MASCULINE = "nosotras",
  YOU = "t\xFA",
  YOU_FORMAL = "usted",
  YOU_ALL = "ustedes",
  HE = "\xE9l",
  SHE = "ella",
  THEY_MASCULINE = "ellos",
  THEY_FEMANINE = "ellas"
}

//TODO Make singleton
export class PronounHelpers {
  getIndirectObject(pronoun: Pronoun) {
    if(pronoun === Pronoun.I) {
      return "me";
    }
    else if(pronoun === Pronoun.YOU) {
      return "te";
    }
    else if(pronoun === Pronoun.HE || pronoun === Pronoun.SHE || pronoun === Pronoun.YOU_FORMAL) {
      return "le";
    }
    else if(pronoun === Pronoun.THEY_FEMANINE || pronoun === Pronoun.THEY_MASCULINE || pronoun === Pronoun.YOU_ALL) {
      return "les";
    }
    else if(pronoun === Pronoun.WE_FEMININE || pronoun === Pronoun.WE_MASCULINE) {
      return "nos";
    }
    else {
      console.error("Pronoun not supported");
      return "";
    }
  }
}