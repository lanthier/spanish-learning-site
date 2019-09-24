import { Verb } from "../words/verb";
import { Pronoun } from "../words/pronouns";
import { Tense } from "../models/tenses";
import { VerbQuizConfiguration } from "../models/verb-quiz-configuration";

class _VerbQuizConfigurationService {
  //Singleton
  private static _instance?: _VerbQuizConfigurationService;
  private constructor() {}
  static get instance() {
    return this._instance || (this._instance = new this());
  }
  
  //Local storage keys
  private _verbKey = 'verbs';
  private _pronounKey = 'pronouns';
  private _tenses = 'tenses';

  get(): VerbQuizConfiguration{
    
    return new VerbQuizConfiguration({
      verbs: this._getArrayFromLocalStorage<Verb>(this._verbKey),
      pronouns: this._getArrayFromLocalStorage<Pronoun>(this._pronounKey),
      tenses: this._getArrayFromLocalStorage<Tense>(this._tenses)
    });
  }
  
  post(verbQuizConfiguration: VerbQuizConfiguration) {
    localStorage.setItem(this._verbKey, JSON.stringify(verbQuizConfiguration.verbs));
    localStorage.setItem(this._pronounKey, JSON.stringify(verbQuizConfiguration.pronouns));
    localStorage.setItem(this._tenses, JSON.stringify(verbQuizConfiguration.tenses));
  }

  private _getArrayFromLocalStorage<T>(arrayItemKey: string): Array<T>{
    var localStorageValue = localStorage.getItem(arrayItemKey);
    if(localStorageValue) {
      return JSON.parse(localStorageValue) as Array<T>;
    }
    else {
      return new Array<T>();
    }
  }

}

const verbQuizConfigurationService = _VerbQuizConfigurationService;

export { verbQuizConfigurationService as VerbQuizConfigurationService };
