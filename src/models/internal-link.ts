export class InternalLink {
  label: string;
  internalUrl: string;
  public constructor(src: IInternalLink) {
    this.label = src.label;
    this.internalUrl = src.internalUrl;
  }
}

export interface IInternalLink {
  label: string;
  internalUrl: string;
}