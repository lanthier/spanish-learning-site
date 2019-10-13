<template>
  <section>
    <h3>{{ verb.name + ' (' + verb.englishMeaning + ')'}}</h3>
    <router-link v-if="backLink" class="back-link" :to="backLink.internalUrl">{{ backLink.label }}</router-link> 
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
.back-link {
	color: #1f5ea8;
	font-weight: 600;
	display: flex;
	align-items: center;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		color: #17477d;
	}
}
</style>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { verbs } from "../words/verbs";
import { Verb } from "../models/verb";
import { InternalLink } from "../models/internal-link";

@Component
export default class VerbConjugation extends Vue {
  verb!: Verb;
  verbs: Array<Verb> = verbs;
  backLink?: InternalLink;

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

    if(this.$route.query.returnUrl) {
      this.backLink = {
        internalUrl: this.$route.query.returnUrl as string,
        label: this.$route.query.returnLabel ? this.$route.query.returnLabel as string : 'Back'
      };

      console.log(this.backLink);
    }
  }
  
}
</script>