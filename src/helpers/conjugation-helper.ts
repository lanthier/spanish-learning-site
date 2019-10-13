import { Verb } from "../models/verb";
import { Pronoun } from "../words/pronouns";
import { Tense } from "../models/tenses";
import { getPropertyValue } from "../util/utility";
import { PronounGroup } from "../models/pronoun-group";

class _ConjugationHelper {

  //Singleton jargon
  private static _instance?: _ConjugationHelper;
  private constructor() {}
  static get instance() {
    return this._instance || (this._instance = new this());
  }

  //Helper methods
  getConjugation(verb: Verb, pronoun: Pronoun, tense: Tense) {
    var verbPronounProperty = this._mapPronounToVerbProperty(pronoun);
    
    if(tense === Tense.Present) {
      return getPropertyValue(verb.conjugation.present, verbPronounProperty);
    }
    else if(tense === Tense.Preterite) {
      return getPropertyValue(verb.conjugation.preterite, verbPronounProperty);
    }
    else if(tense === Tense.Imperfect) {
      return getPropertyValue(verb.conjugation.imperfect, verbPronounProperty);
    }
    else if(tense === Tense.Conditional) {
      return getPropertyValue(verb.conjugation.conditional, verbPronounProperty);
    }
    else {
      return getPropertyValue(verb.conjugation.future, verbPronounProperty);
    }
  }

  _mapPronounToVerbProperty(pronoun: Pronoun): "yo" | "tu" | "elEllaUsted" | "nosotros" | "ellosEllasUstedes"{
    if(pronoun === Pronoun.I) {
      return 'yo';
    }
    else if(pronoun === Pronoun.YOU) {
      return 'tu';
    }
    else if(pronoun === Pronoun.HE || pronoun === Pronoun.SHE || pronoun === Pronoun.YOU_FORMAL) {
      return 'elEllaUsted'
    }
    else if(pronoun === Pronoun.WE_FEMININE || pronoun === Pronoun.WE_MASCULINE) {
      return 'nosotros';
    }
    else return 'ellosEllasUstedes';
  }
}

const conjugationHelper = _ConjugationHelper.instance;

const verbConjugationPronounGroups: Array<PronounGroup> = [
  {
    label: 'yo',
    pronouns: [ Pronoun.I ]
  },
  {
    label: 't\xFA',
    pronouns: [ Pronoun.YOU ]
  },
  {
    label: '\xE9l/ella/udsted',
    pronouns: [ Pronoun.HE, Pronoun.SHE, Pronoun.YOU_FORMAL ]
  },
  {
    label: 'nosotros',
    pronouns: [ Pronoun.WE_FEMININE, Pronoun.WE_MASCULINE ]
  },
  {
    label: 'ellos/ellas/ustedes',
    pronouns: [ Pronoun.THEY_FEMANINE, Pronoun.THEY_MASCULINE ]
  }
];

export { conjugationHelper as ConjugationHelper };
export { verbConjugationPronounGroups };