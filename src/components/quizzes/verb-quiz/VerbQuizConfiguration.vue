<template>
  <div>
    <h2>Customize your verb questions</h2>
    <div class="row actions">
      <paper-button raised class="btn" :disabled="startDisabled" @click="generateQuiz">Generate a printable quiz</paper-button>
      <paper-button raised class="btn" :disabled="startDisabled" @click="startQuiz">Start quiz</paper-button>
    </div>
    <div class="grid">
      <div>
        <div class="container"> 
          <h3>Select your verbs</h3>
          <hr />
          <p>Which verbs do you want in your quiz?</p>
          <div class="verb-list-actions">
            <paper-button class="btn secondary" @click="selectAllVerbs">Select all</paper-button>
            <paper-button class="btn secondary" @click="clearSelectedVerbs">Clear</paper-button>
          </div>
          <div class="card max-height-scrollable">
            <div class="margin-left-10" :key="verb.name" v-for="verb in verbs">
              <p>
              <label :for="verb.name">
                <input :id="verb.name" type="checkbox" @change="toggleVerb" v-bind:value="verb.name" :checked="selectedVerbNames.includes(verb.name)"/>
                <span>{{verb.name + '  (' + verb.englishMeaning + ')' }}</span>
              </label>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="container">
          <h3>Select your tenses and pronouns</h3>
          <hr />
          <p>Which conjuation tenses would you like in your quiz?</p>
          <template v-for="tense in tenses">
            <p :key="tense"><label><input name="tenses" :value="tense" type="checkbox" @change="toggleTense" :checked="selectedTenses.includes(tense)"/><span>{{ tense }}</span></label></p>
          </template>
          <p>Which pronoun conjugation forms do you want to work on?</p>
          <template v-for="pronounGroup in pronounGroups">
            <p :key="pronounGroup.label"><label><input name="pronouns" :value="pronounGroup.label" type="checkbox" @change="togglePronounGroupLabel" :checked="selectedPronounGroupLabels.includes(pronounGroup.label)"/><span>{{ pronounGroup.label }}</span></label></p>
          </template>
        </div>
      </div>
    </div>
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

  .actions {
    display: flex;
    justify-content: flex-end;
  }

  .verb-list-actions {
    display: flex;
    margin-bottom: 8px;
  }

</style>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { Verb } from "../../../models/verb";
import { verbs } from "../../../words/verbs";
import { Tense } from "../../../models/tenses";
import { Pronoun } from "../../../words/pronouns";
import "@polymer/paper-button";
import { verbConjugationPronounGroups } from "../../../helpers/conjugation-helper";

@Component
export default class VerbQuizConfiguration extends Vue {
  verbs: Array<Verb> = verbs;
  tenses = Object.keys(Tense);
  pronouns = Object.keys(Pronoun);
  pronounGroups = verbConjugationPronounGroups;
  selectedVerbNames: Array<String> = [];
  selectedTenses: Array<Tense> = [];
  selectedPronounGroupLabels: Array<string> = [];

  public constructor() {
    super();
  }

  public created() {
    var storedVerbs = (this.quizConfig.verbs as Array<Verb>);
    this.selectedVerbNames = storedVerbs.map((verb: Verb) => verb.name);
    this.selectedTenses = this.quizConfig.tenses.map((tense: string) => tense as Tense);
    this.selectedPronounGroupLabels = this.pronounsToPronounGroupLabels();
  }

  data() {
    return {
      selectedVerbs: this.selectedVerbNames
    }
  }

  get startDisabled() {
    return !(this.selectedVerbNames.length && this.selectedTenses.length && this.selectedPronounGroupLabels.length)
  }

  get quizConfig(): VerbQuizConfiguration{
    return this.$store.state.verbQuiz.config;
  }

  selectAllVerbs() {
    this.selectedVerbNames = this.verbs.map(verb => verb.name);
  }

  clearSelectedVerbs() {
    this.selectedVerbNames = [];
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

  togglePronounGroupLabel(event: any) {
    if(this.selectedPronounGroupLabels.includes(event.target.value)) {
      this.selectedPronounGroupLabels = this.selectedPronounGroupLabels.filter(pronounGroupLabel => pronounGroupLabel !== event.target.value);
    }
    else {
      this.selectedPronounGroupLabels.push(event.target.value);
    }
  }

  startQuiz() {
    this.saveConfig();
    this.$router.push({ name: "VerbQuiz" });
  }

  generateQuiz() {
    this.saveConfig();
    this.$router.push({ name: "QuizGenerate" })
  }

  pronounsToPronounGroupLabels() : Array<string> {
    let finalListOfPronounGroupLabels: Array<string> = [];
    var pronouns = this.quizConfig.pronouns.map((pronoun: string) => pronoun as Pronoun);
    pronouns.forEach((pronoun: Pronoun) => {
      this.pronounGroups.forEach((pronounGroup) => {
        if(pronounGroup.pronouns.includes(pronoun)) {
          finalListOfPronounGroupLabels.pushUnique(pronounGroup.label);
        }
      });
    });

    return finalListOfPronounGroupLabels;
  }

  pronounGroupLabelsToPronouns(): Array<Pronoun> {
    let finalListOfPronouns: Array<Pronoun> = [];
    var pronounGroupLabels = this.selectedPronounGroupLabels;

    pronounGroupLabels.forEach((groupLabel) => {
      var matchingPronounGroup = this.pronounGroups.find(pronounGroup => pronounGroup.label === groupLabel);
      if(matchingPronounGroup) {
        matchingPronounGroup.pronouns.forEach((pronoun: any) => {
          finalListOfPronouns.push(pronoun);
        });
      }
    });

    return finalListOfPronouns;
  }

  saveConfig() {
    const selectedVerbs = this.verbs.filter(verb => this.selectedVerbNames.includes(verb.name));
    const selectedPronouns = this.pronounGroupLabelsToPronouns();
    this.$store.commit('verbQuiz/setVerbs', selectedVerbs);
    this.$store.commit('verbQuiz/setPronouns', selectedPronouns);
    this.$store.commit('verbQuiz/setTenses', this.selectedTenses);
  }
}
</script>