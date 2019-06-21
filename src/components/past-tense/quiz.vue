<template>
  <div>this component will quiz me</div>
</template>
<style>
</style>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class PastTenseQuiz extends Vue {
  public constructor() {
    super();
  }
}
</script>