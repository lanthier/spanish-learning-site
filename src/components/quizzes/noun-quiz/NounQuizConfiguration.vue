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
          <div class="margin-left-10" :key="noun.name" v-for="noun in displayedNouns">
            <label :for="noun.name">
              <input :id="noun.name" type="checkbox" @change="toggleNoun($event.target.value)" v-bind:value="noun.name" :checked="selectedNounNames.includes(noun.name)"/>
              <span>{{noun.name + '  (' + noun.englishMeaning + ')' }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="container">
        <h3>Seleted nouns</h3>
        <hr />
        <div class="card selected-noun-card">
          <div class="noun-selection-list">
            <MiniCard class="mini-card" :key="nounName" v-for="nounName in selectedNounNames" :text="nounName" v-on:click.native="toggleNoun(nounName)">
              <box-icon name="trash" class="delete-icon"></box-icon>
            </MiniCard>
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
  selectedNounNames!: Array<string>;
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
    var storedNouns = (this.quizConfig.nouns as Array<Noun>);
    this.selectedNounNames = storedNouns.map((noun: Noun) => noun.name);
  }

  public toggleNoun(nounName: string) {
    if(this.selectedNounNames.includes(nounName)) {
      this.selectedNounNames = this.selectedNounNames.filter(noun => noun !== nounName);
    }
    else {
      this.selectedNounNames.push(nounName);
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
    const selectedNouns = this.nouns.filter(noun => this.selectedNounNames.includes(noun.name));
    this.$store.commit('nounQuiz/setNouns', selectedNouns);
  }
}
</script>