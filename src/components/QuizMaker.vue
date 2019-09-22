<template>
  <div>
    <h1>Customize your studies</h1>
    <div class="row">
      <div class="col s6">
        <div class="container">
          <h4>Select your verbs</h4>
          <hr />
          <p>Which verbs are you trying to work on?</p>
          <div class="card max-height-scrollable">
            <div class="margin-left-10" :key="verb.name" v-for="verb in verbs">
              <p>
              <label :for="verb.name">
                <input :id="verb.name" @change="toggleVerb" v-bind:value="verb.name" type="checkbox" />
                <span>{{verb.name + '  (' + verb.englishMeaning + ')' }}</span>
              </label>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col s6">
        <div class="container">
          <h4>Select your tenses</h4>
          <hr />
          <p>Which tenses are you trying to work on?</p>
          <template v-for="tense in tenses">
            <p :key="tense"><label><input name="tenses" :value="tense" type="checkbox" @change="toggleTense"/><span>{{ tense }}</span></label></p>
          </template>
          <p>Which pronouns are you trying to work on?</p>
          <template v-for="pronoun in pronouns">
            <p :key="pronoun"><label><input name="pronouns" :value="pronoun" type="checkbox" @change="togglePronoun"/><span>{{ pronoun }}</span></label></p>
          </template>
        </div>
      </div>
    </div>
    <button class="btn waves-effect waves-light" @click="startQuiz">Start quiz</button>
  </div>
</template>

<style lang="scss">
  .max-height-scrollable {
    max-height: 400px;
    overflow: scroll;
  }

  .margin-left-10 {
    margin-left: 10px;
  }
</style>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { Verb, VerbHelpers } from "../words/verb";
import { verbs } from "../words/verbs";
import { Tense } from "../models/tenses";
import { Pronoun } from "../words/pronouns";

@Component
export default class QuizMaker extends Vue {
  verbs: Array<Verb> = verbs;
  tenses = Object.keys(Tense);
  pronouns = Object.keys(Pronoun);

  selectedVerbNames: Array<String> = [];
  selectedTenses: Array<Tense> = [];
  selectedPronouns: Array<Pronoun> = [];

  public constructor() {
    super();
  }

  data() {
    return {
      selectedVerbs: this.selectedVerbNames
    }
  }

  @Watch('selectedVerbNames')
  onSelectedVerbsChanged(val: any) {
    console.log(val);
  }

  //TODO: Figure out why my v-model strategy isn't working. (Value is doing the stupid [object Object] thing)
  toggleVerb(event: any) {
    var verbName = event.target.value;
    if(this.selectedVerbNames.includes(verbName)) {
      this.selectedVerbNames = this.selectedVerbNames.filter(verb => verb !== verbName);
    }
    else {
      this.selectedVerbNames.push(verbName);
    }
  }

  toggleTense(event: any) {
    if(this.selectedTenses.includes(event.target.value)) {
      this.selectedTenses = this.selectedTenses.filter(tense => tense !== event.target.value as Tense);
    }
    else {
      this.selectedTenses.push(event.target.value as Tense);
    }
  }

  togglePronoun(event: any) {
    if(this.selectedPronouns.includes(event.target.value)) {
      this.selectedPronouns = this.selectedPronouns.filter(pronoun => pronoun !== event.target.value as Pronoun);
    }
    else {
      this.selectedPronouns.push(event.target.value as Pronoun);
    }
  }

  startQuiz() {
    const selectedVerbs = this.verbs.filter(verb => this.selectedVerbNames.includes(verb.name));
    
    console.log(selectedVerbs);
  }

}
</script>