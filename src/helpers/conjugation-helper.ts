import { Verb } from "../words/verb";
import { Pronoun } from "../words/pronouns";
import { Tense } from "../models/tenses";
import { getPropertyValue } from "../util/utility";

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

  _mapPronounToVerbProperty(pronoun: Pronoun): "yo" | "tu" | "elEllaUdsted" | "nosotros" | "ellosEllasUdstedes"{
    if(pronoun === Pronoun.I) {
      return 'yo';
    }
    else if(pronoun === Pronoun.YOU) {
      return 'tu';
    }
    else if(pronoun === Pronoun.HE || pronoun === Pronoun.SHE || pronoun === Pronoun.YOU_FORMAL) {
      return 'elEllaUdsted'
    }
    else if(pronoun === Pronoun.WE_FEMININE || pronoun === Pronoun.WE_MASCULINE) {
      return 'nosotros';
    }
    else return 'ellosEllasUdstedes';
  }
}

const conjugationHelper = _ConjugationHelper.instance;

export { conjugationHelper as ConjugationHelper };