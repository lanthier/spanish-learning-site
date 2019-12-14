<template>
  <section class="Container">
      <h2>Customize your noun questions</h2>
    <div class="actions">
      <paper-button raised class="btn" :disabled="startDisabled" @click="generateQuiz">Generate a printable quiz</paper-button>
      <paper-button raised class="btn" :disabled="startDisabled" @click="startQuiz">Start quiz</paper-button>
    </div>
    <div class="grid">
      <div class="container">
        <h3>Noun selection</h3>
        <hr />
        <div class="noun-category-list">
          <label>Noun category</label>
            <select v-model="selectedNounCategory">
              <option :key="nounCategory" v-for="nounCategory in nounCategories" :value="nounCategory">{{ nounCategory }}</option>
            </select>
        </div>
        <p>Select nouns from selected category:</p>
        <div class="card max-height-scrollable">
          <div class="margin-left-10" :key="noun.englishMeaning" v-for="noun in displayedNouns">
            <label>
              <input :id="noun.englishMeaning" type="checkbox" @change="toggleNoun(noun)" :checked="selectedNounsContains(noun)"/>
              <span>{{getNounName(noun) + '  (' + noun.englishMeaning + ')' }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="container">
        <h3>Seleted nouns</h3>
        <hr />
        <div class="card selected-noun-card">
          <div class="noun-selection-list">
            <template v-for="noun in selectedNouns">
              <MiniCard class="mini-card" :key="noun.englishMeaning" :text="getNounName(noun)" v-on:click.native="toggleNoun(noun)">
                <box-icon name="trash" class="delete-icon"></box-icon>
              </MiniCard>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  .actions {
    display: flex;
    justify-content: flex-end;
  }

  .max-height-scrollable {
    height: 400px;
    max-height: 400px;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .selected-noun-card {
    height: 400px;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 16px;

  }
  
  .mini-card {
    --var-icon-hover-color: red;
    width: 45%;
    height: 40px;
    padding: 4px;
  }

  .noun-selection-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }

</style>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { nouns, nounCategories } from "../../../words/nouns";
import { Noun } from "../../../models/noun";
import MiniCard from "../../shared/MiniCard.vue";

@Component({
  components: {
    MiniCard
  }
})
export default class NounQuizConfiguration extends Vue {
  nouns: Array<Noun> = nouns;
  nounCategories: Array<string> = nounCategories;
  selectedNounCategory: string = nounCategories[0];
  selectedNouns!: Array<Noun>;
  startDisabled: boolean = false;

  get quizConfig(): NounQuizConfiguration {
    return this.$store.state.nounQuiz.config;
  }

  get displayedNouns() {
    return this.nouns.filter(noun => noun.nounCategory === this.selectedNounCategory);
  }

  public constructor() {
    super();
  }
  
  public created() {
    this.selectedNouns = this.quizConfig.nouns as Array<Noun>;
    console.log(this.selectedNouns);
  }

  public toggleNoun(noun: Noun) {
    if(this.selectedNounsContains(noun)) {
      this.selectedNouns = this.selectedNouns.filter(selectedNoun => selectedNoun.englishMeaning !== noun.englishMeaning);
    }
    else {
      this.selectedNouns.push(noun);
    }
    this.$forceUpdate();
  }

  generateQuiz() {

  }

  startQuiz() {
    this.saveConfig();
    this.$router.push({ name: "NounQuiz" });
  }

  saveConfig() {
    this.$store.commit('nounQuiz/setNouns', this.selectedNouns);
  }

  selectedNounsContains(noun: Noun) {
    return this.selectedNouns.findIndex(selectedNoun => selectedNoun.englishMeaning === noun.englishMeaning) !== -1;
  }

  getNounName(noun: Noun) {
    if(noun.names) {
      return noun.names.join(", ");
    }
    else {
      console.log(noun.names);
      console.log(noun);
      setTimeout(() => {
        console.log(noun.names);
      }, 1000);
      // console.log(noun);
      // return "bs";
    }
  }

  data() {
    return {
      selectedNouns: this.selectedNouns
    }
  }
}
</script>