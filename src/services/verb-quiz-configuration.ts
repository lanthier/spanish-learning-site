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
  private _tenseKey = 'tenses';

  public getVerbQuizConfiguration(): VerbQuizConfiguration{
    
      const verbs = this._getArrayFromLocalStorage<Verb>(this._verbKey);
      const pronouns = this._getArrayFromLocalStorage<Pronoun>(this._pronounKey);
      const tenses = this._getArrayFromLocalStorage<Tense>(this._tenseKey);

      return new VerbQuizConfiguration({
        verbs: verbs,
        pronouns: pronouns,
        tenses: tenses
      });
  }
  
  public postVerbQuizConfiguration(verbQuizConfiguration: VerbQuizConfiguration) {
    localStorage.setItem(this._verbKey, JSON.stringify(verbQuizConfiguration.verbs));
    localStorage.setItem(this._pronounKey, JSON.stringify(verbQuizConfiguration.pronouns));
    localStorage.setItem(this._tenseKey, JSON.stringify(verbQuizConfiguration.tenses));
  }

  private _getArrayFromLocalStorage<T>(arrayItemKey: string): Array<T>{
    var localStorageValue = localStorage.getItem(arrayItemKey);
    if(localStorageValue) {
      const parsedArray = JSON.parse(localStorageValue) as Array<T>;
      return parsedArray;
    }
    else {
      return new Array<T>();
    }
  }
}

const verbQuizConfigurationService = _VerbQuizConfigurationService.instance;

export { verbQuizConfigurationService as VerbQuizConfigurationService };
