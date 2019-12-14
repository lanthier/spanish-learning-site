export class Noun {
  names: Array<string>;
  englishMeaning: string;
  nounCategory: string;
  nounSubCategory?: string | null;

  public constructor(src?: INoun) {
    if(src) {
      this.names = src.names;
      this.englishMeaning = src.englishMeaning;
      this.nounCategory = src.nounCategory;
      this.nounSubCategory = src.nounSubCategory;
    } else {
      this.names = [];
      this.englishMeaning = '';
      this.nounCategory = '';
      this.nounSubCategory = null;
    }
  }
}

export interface INoun {
  names: Array<string>;
  englishMeaning: string;
  nounCategory: string;
  nounSubCategory?: string | null;
}