<template>
  <section>
    <paper-tabs
      class="paper-tabs tabs-fixed-width z-depth-1"
      :selected="selectedPage ? selectedPage : 0"
    >
      <paper-tab class="paper-tab" @click="setSelectedPage(0)">Information</paper-tab>
      <paper-tab class="paper-tab" @click="setSelectedPage(1)">Quiz</paper-tab>
      <paper-tab class="paper-tab" @click="setSelectedPage(2)">Notes</paper-tab>
    </paper-tabs>
    <iron-pages class="iron-pages" :selected="selectedPage ? selectedPage : 0">
      <PastTenseInformation/>
      <PastTenseNotes/>
      <PastTenseQuiz/>
    </iron-pages>
  </section>
</template>

<style lang="scss">
paper-tab {
  --paper-tab-ink: #ee6e73;
}

paper-tabs {
  --paper-tabs-selection-bar-color: #ee6e73;
}

.paper-tab {
  padding-left: 12px;
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import "@polymer/paper-tabs/paper-tabs.js";
import "@polymer/paper-tabs/paper-tab.js";
import "@polymer/iron-pages";
import { Watch } from "vue-property-decorator";
import PastTenseInformation from "./past-tense/information.vue";
import PastTenseNotes from "./past-tense/notes.vue";
import PastTenseQuiz from "./past-tense/quiz.vue";

@Component({
  components: {
    PastTenseInformation,
    PastTenseNotes,
    PastTenseQuiz
  }
})
export default class PastTense extends Vue {
  selectedPage: number = 0;
  public constructor() {
    super();
  }

  data() {
    return {
      selectedPage: this.selectedPage
    };
  }

  setSelectedPage(index: number) {
    this.selectedPage = index;
  }
}
</script>