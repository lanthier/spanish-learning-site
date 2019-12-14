export class NounCategory {
  name: string;
  childCategories: Array<NounCategory>;

  public constructor(src?: INounCategory) {
    if(src) {
      this.name = src.name;
      this.childCategories = src.childCategories;
    }
    else {
      this.name = "";
      this.childCategories = new Array<NounCategory>();
    }
  }
}


export interface INounCategory {
  name: string;
  childCategories: Array<NounCategory>;
}