<template>
  <div class="underline-input">
    <slot></slot>
    <span class="underline"></span>
  </div>
</template>
<style lang="scss" scoped>
.underline-input {
  background-color: #FFF;
}

input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #CCC;
  color: #555;
  box-sizing: border-box;
  font-family: 'Arvo';
  font-size: 18px;
  height: 50px;
  padding: 10px 0px;
  width: 100%;

  &:focus {
    outline: none;    
  }
}

input::-webkit-input-placeholder {
  color: #AAA;
}

input:focus::-webkit-input-placeholder {
  color: dodgerblue;
}

input:focus+.underline {
  transform: scale(1);
}

.underline {
  background-color: var(--primary-color);
  display: block;
  height: 2px;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  width: 100%;
  position: relative;
}
</style>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class UnderlineInput extends Vue {
  public constructor() {
    super();
  }
}
</script>