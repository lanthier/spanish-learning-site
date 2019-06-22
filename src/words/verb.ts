import { Pronoun } from "./pronouns";

export class Verb implements IVerb {
  name: string;
  englishMeaning: string;

  public constructor(src?: IVerb) {
    if (src) {
      this.name = src.name;
      this.englishMeaning = src.englishMeaning;
    }
    else {
      this.name = '';
      this.englishMeaning = '';
    }
  }
}

export class VerbHelpers {
  getPreteritePastTense(verb: Verb, pronoun: Pronoun): string {
    if (this.getVerbType(verb) == VerbType.Infinitive) {
      return this._getPreteritePastTenseForInfinitive(verb.name, pronoun)
    }

    else {
      console.error("Error when getting verb type for preterite past tense", [verb, pronoun]);
      return "";
    }
  }

  getImperfectPastTense(verb: Verb, pronoun: Pronoun): string {
    if (this.getVerbType(verb) == VerbType.Infinitive) {
      return this._getImperfectPastTenseForInfinitive(verb.name, pronoun);
    }
    else {
      console.error("Error when getting verb type for imperfect past tense", [verb, pronoun]);
      return "";
    }
  }

  private _getImperfectPastTenseForInfinitive(verbName: string, pronoun: Pronoun): string {
    let lastTwoCharacters = verbName.slice(-2);
    let pastName: string = verbName.slice(0, -2); //Strip off "ar"
    if (lastTwoCharacters == 'ar') {
      if (pronoun === Pronoun.I || pronoun === Pronoun.HE || pronoun === Pronoun.SHE || pronoun === Pronoun.YOU_FORMAL) {
        pastName += "aba";
      }
      else if (pronoun === Pronoun.YOU) {
        pastName += "abas";
      }
      else if (pronoun === Pronoun.WE_FEMININE || pronoun === Pronoun.WE_MASCULINE) {
        pastName += "\xE1bamos";
      }
      else if (pronoun === Pronoun.YOU_ALL || pronoun === Pronoun.THEY_FEMANINE || pronoun === Pronoun.THEY_MASCULINE) {
        pastName += "aban";
      }
      else {
        console.error("Invalid pronoun when getting imperfect past tense", [pronoun]);
        return "";
      }
    }
    else if (lastTwoCharacters == 'ir' || lastTwoCharacters == 'er') {
      if (pronoun === Pronoun.I || pronoun === Pronoun.HE || pronoun === Pronoun.SHE || pronoun === Pronoun.YOU_FORMAL) {
        pastName += "\xEDa";
      }
      else if (pronoun === Pronoun.YOU) {
        pastName += "\xEDas";
      }
      else if (pronoun === Pronoun.WE_FEMININE || pronoun === Pronoun.WE_MASCULINE) {
        pastName += "\xEDamos";
      }
      else if (pronoun === Pronoun.YOU_ALL || pronoun === Pronoun.THEY_FEMANINE || pronoun === Pronoun.THEY_MASCULINE) {
        pastName += "\xEDan";
      }
      else {
        console.error("Invalid pronoun when getting imperfect past tense", [pronoun]);
        return "";
      }
    }
    else {
      console.error("Error when trying to find imperfect tense, last two characters are not 'ar', 'ir', nor 'er'", [verbName]);
    }

    return pastName;
  }

  private _getPreteritePastTenseForInfinitive(verbName: string, pronoun: Pronoun) {
    let lastTwoCharacters = verbName.slice(-2);
    let pastName: string = verbName.slice(0, -2); //Strip off "ar"
    if (lastTwoCharacters == 'ar') {
      if (pronoun === Pronoun.I) {
        pastName += "\xE9"
      }
      else if (pronoun === Pronoun.YOU) {
        pastName += "aste";
      }
      else if (pronoun === Pronoun.HE || pronoun === Pronoun.SHE || pronoun === Pronoun.YOU_FORMAL) {
        pastName += "\xF3";
      }
      else if (pronoun === Pronoun.WE_FEMININE || pronoun === Pronoun.WE_MASCULINE) {
        pastName += "amos";
      }
      else if (pronoun === Pronoun.THEY_FEMANINE || pronoun === Pronoun.THEY_MASCULINE || pronoun === Pronoun.YOU_ALL) {
        pastName += "aron";
      }
      else {
        console.error("Invalid pronoun when getting preterite past tense", [pronoun]);
        return "";
      }
    }
    else if (lastTwoCharacters === "ir" || lastTwoCharacters == "er") {
      if (pronoun === Pronoun.I) {
        pastName += "\xED"
      }
      else if (pronoun === Pronoun.YOU) {
        pastName += "iste";
      }
      else if (pronoun === Pronoun.HE || pronoun === Pronoun.SHE || pronoun === Pronoun.YOU_FORMAL) {
        pastName += "i\xF3";
      }
      else if (pronoun === Pronoun.WE_FEMININE || pronoun === Pronoun.WE_MASCULINE) {
        pastName += "imos";
      }
      else if (pronoun === Pronoun.THEY_FEMANINE || pronoun === Pronoun.THEY_MASCULINE || pronoun === Pronoun.YOU_ALL) {
        pastName += "ieron";
      }
      else {
        console.error("Invalid pronoun when getting preterite past tense", [pronoun]);
        return "";
      }
    }
    else {
      console.error("Error when trying to find preterite tense, last two characters are not 'ar', 'ir', nor 'er'", [verbName]);
    }

    return pastName;
  }

  //For now this will only handle infinitive verbs
  getVerbType(verb: Verb): string {
    const lastTwoCharacters = verb.name.slice(-2);
    if (lastTwoCharacters == "ar" || lastTwoCharacters == "er" || lastTwoCharacters == "ir") {
      return VerbType.Infinitive;
    }

    else {
      console.error("Error when getting verb type, verb type does not exist.", [verb]);
      return "";
    }
  }
}

export interface IVerb {
  name: string;
  englishMeaning: string;
}

export enum VerbType {
  Infinitive = "Infinitive"
}