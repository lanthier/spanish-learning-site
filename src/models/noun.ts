export class Noun {
  name: string;
  englishMeaning: string;
  nounCategory: string;

  public constructor(src?: INoun) {
    if(src) {
      this.name = src.name;
      this.englishMeaning = src.englishMeaning;
      this.nounCategory = src.nounCategory;
    } else {
      this.name = '';
      this.englishMeaning = '';
      this.nounCategory = '';
    }
  }
}

export interface INoun {
  name: string;
  englishMeaning: string;
  nounCategory: string;
}