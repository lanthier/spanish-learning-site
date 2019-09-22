import { Verb } from "../words/verb";
import { Pronoun } from "../words/pronouns";
import { Tense } from "./tenses";

export class VerbQuizConfiguration {
  selectedVerbs!: Array<Verb>;
  selectedPronouns!: Array<Pronoun>;
  selectedTenses!: Array<Tense>;
}