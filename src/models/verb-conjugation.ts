export class VerbConjugation {
  present: VerbTenseConjugation;
  preterite: VerbTenseConjugation;
  imperfect: VerbTenseConjugation;
  conditional: VerbTenseConjugation;
  future: VerbTenseConjugation;

  public constructor(src: IVerbConjugation) {
    this.present = src.present;
    this.preterite = src.preterite;
    this.imperfect = src.imperfect;
    this.conditional = src.conditional;
    this.future = src.future;
  }
}

export interface IVerbConjugation {
  present: VerbTenseConjugation;
  preterite: VerbTenseConjugation;
  imperfect: VerbTenseConjugation;
  conditional: VerbTenseConjugation;
  future: VerbTenseConjugation;
}

export class VerbTenseConjugation {
  yo: string;
  tu: string;
  elEllaUsted: string;
  nosotros: string;
  ellosEllasUstedes: string;
  irregular?: boolean;

  public constructor(src?: IVerbTenseConjugation) {
    if(src) {
      this.yo = src.yo;
      this.tu = src.tu;
      this.elEllaUsted = src.elEllaUdsted;
      this.nosotros = src.nosotros;
      this.ellosEllasUstedes = src.ellosEllasUdstedes;
      this.irregular = src.irregular ? src.irregular : false;
    }
    else {
      this.yo = "";
      this.tu = "";
      this.elEllaUsted = "";
      this.nosotros = "";
      this.ellosEllasUstedes = "";
      this.irregular = false;
    }
  }
}

export interface IVerbTenseConjugation {
  yo: string;
  tu: string;
  elEllaUdsted: string;
  nosotros: string;
  ellosEllasUdstedes: string;
  irregular?: boolean;
}