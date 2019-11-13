<template>
<section class="container">
  <div class="grid-3">
    <div class="card">
      <h3 class="card-title">Study verbs</h3>
      <box-icon class="card-icon" name="book-open" size="lg" animation="tada-hover"></box-icon>
      <div class="list">
        <box-icon name="list-check" size="md" /><span>Choose the words you want to focus on in a catered list of common verbs</span>
        <box-icon name="filter-alt" size="md" /><span>Configure your quiz by filtering which conjugations you would like to see</span>
        <box-icon name="printer" size="md" /><span>Quiz yourself online or generate a printable page and practice on paper</span>
      </div>
      <div class="card-footer">
        <paper-button raised class="btn" @click="navigateToRouteName('VerbQuizConfiguration')">Study now</paper-button> 
      </div>
    </div>
    <div class="card">
      <h3 class="card-title">Analyze yourself</h3>
      <box-icon class="card-icon" name="data" size="lg" animation="tada-hover"></box-icon>
      <div class="list">
        <box-icon name="pie-chart-alt-2" size="md" /><span>View correct and incorret answers by specific types of conjugation</span>
        <box-icon name="list-ol" size="md" /><span>See your history of previously answered questions</span>
      </div>
    </div>
    <div class="card">
      <h3 class="card-title">About the site</h3>
      <box-icon class="card-icon" name="info-circle" size="lg" animation="tada-hover"></box-icon>
      <div class="list">
        <box-icon name="user-x" size="md" /><span>No logging in, no emails, no subscriptions are necessary</span>
        <box-icon name="low-vision" size="md" /><span>No hidden data collection about users and no analytics monitoring your every move</span>
        <box-icon name="happy" size="md" /><span>This site was a pet project for myself to help learn spanish, now you can too!</span>
      </div>
      <div class="card-footer">
        <!-- TODO <paper-button raised class="btn" @click="navigateToRouteName('AboutSite')">Learn more for developers</paper-button>  -->
        <paper-button raised class="btn" @click="navToGithub">(For developers) Github</paper-button>
      </div>
    </div>
  </div>
</section>

</template>
<style lang="scss" scoped>
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 48px;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.card-title {
  align-self: center;
}

.card-icon {
  align-self: center;
  margin-bottom: 64px;
}


.card-footer {
  display: flex;
  flex-direction: row;
  justify-content: center;

  paper-button {
    margin-top: 32px;
  }
}

.list {

  display: grid;
  grid-template-columns: 1fr 11fr;
  grid-gap: 10px;
  row-gap: 16px;
}

</style>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import "boxicons";

@Component
export default class Home extends Vue {
  public constructor() {
    super();
  }

  navigateToRouteName(routeName: string) {
    this.$router.push({ name: routeName });
  }

  navToGithub() {
    window.location.href = "https://github.com/lanthier/spanish-learning-site";
  }
}

</script>