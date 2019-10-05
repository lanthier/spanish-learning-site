<template>
  <section>
    <h3>{{ verb.name + ' (' + verb.englishMeaning + ')'}}</h3>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Present</th>
          <th>Preterite</th>
          <th>Imperfect</th>
          <th>Conditional</th>
          <th>Future</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Yo</th>
          <td :key="tenseConjugation.yo" v-for="tenseConjugation in verb.conjugation"> {{ tenseConjugation.yo }}</td>
        </tr>
        <tr>
          <th>{{ 't\xFA' }}</th>
          <td :key="tenseConjugation.tu" v-for="tenseConjugation in verb.conjugation"> {{ tenseConjugation.tu }}</td>
        </tr>
        <tr>
          <th>{{ '\xE9l/ella/usted' }}</th>
          <td :key="tenseConjugation.elEllaUsted" v-for="tenseConjugation in verb.conjugation"> {{ tenseConjugation.elEllaUsted }}</td>
        </tr>
        <tr>
          <th>{{ 'nosotros/nosotras' }}</th>
          <td :key="tenseConjugation.nosotros" v-for="tenseConjugation in verb.conjugation"> {{ tenseConjugation.nosotros }}</td>
        </tr>
        <tr>
          <th>{{ 'ellos/ellas/ustedes' }}</th>
          <td :key="tenseConjugation.ellosEllasUstedes" v-for="tenseConjugation in verb.conjugation"> {{ tenseConjugation.ellosEllasUstedes }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<style lang="scss" scoped>
</style>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { verbs } from "../words/verbs";
import { Verb } from "../models/verb";

@Component
export default class VerbConjugation extends Vue {
  verb!: Verb;
  verbs: Array<Verb> = verbs;

  public constructor() {
    super();
  }

  public created() {
    const verbName = this.$route.params.verbName;
    if(verbName) {
      const verb = this.verbs.find((verb: Verb) => verb.name === verbName);
      if(verb) {
        this.verb = verb;
      }
    }
  }
}
</script>