import { NounQuizConfiguration } from "../models/noun-quiz-configuration";
import { Noun } from "../models/noun";

class _NounQuizConfigurationService {
  //Singleton
  private static _instance?: _NounQuizConfigurationService;
  private constructor() {}
  static get instance() {
    return this._instance || (this._instance = new this());
  }
  
  //Local storage keys
  private _nounKey = 'nouns';

  public getNounQuizConfiguration(): NounQuizConfiguration{
      const nouns = this._getArrayFromLocalStorage<Noun>(this._nounKey);

      return new NounQuizConfiguration({
        nouns: nouns
      });
  }
  
  public postNounQuizConfiguration(nounQuizConfiguration: NounQuizConfiguration) {
    localStorage.setItem(this._nounKey, JSON.stringify(nounQuizConfiguration.nouns));
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

const nounQuizConfigurationService = _NounQuizConfigurationService.instance;

export { nounQuizConfigurationService as NounQuizConfigurationService };
