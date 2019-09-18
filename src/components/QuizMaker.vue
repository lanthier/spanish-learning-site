<template>
  <div>
    <h1>Customize your studies</h1>
    <div class="row">
      <div class="col s6">
        <div class="container">
          <h4>Select your verbs</h4>
          <hr />
          <p>Which verbs are you trying to work on?</p>
          <p><label><input name="verb-types" type="radio"/><span>All verbs</span></label></p>
          <p><label><input name="verb-types" type="radio"/><span>Regular verbs in the selected tenses</span></label></p>
          <p><label><input name="verb-types" type="radio"/><span>Irregular verbs in the selected tenses</span></label></p>
          <p><label><input name="verb-types" type="radio"/><span>Choose from custom list:</span></label></p>
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
          <p><label><input name="tenses" type="checkbox"/><span>Present</span></label></p> 
          <p><label><input name="tenses" type="checkbox"/><span>Preterite Past</span></label></p>
          <p><label><input name="tenses" type="checkbox"/><span>Future</span></label></p>
          <p><label><input name="tenses" type="checkbox"/><span>Subjunctive</span></label></p>
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

@Component
export default class QuizMaker extends Vue {
  verbs: Array<Verb> = verbs;
  selectedVerbNames: Array<String> = [];
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

  startQuiz() {
    const selectedVerbs = this.verbs.filter(verb => this.selectedVerbNames.includes(verb.name));
    console.log(selectedVerbs);
  }

}
</script>