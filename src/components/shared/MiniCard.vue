<template>
  <div class="content-card-mini">
    <span>{{ text }}</span>
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.content-card-mini {
  background-color: #fff; 
  box-shadow: 0 0.1rem 0.3rem #00000016;
  margin: 4px;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .delete-icon {
    fill: lightgray;
  }
  &:hover {
    cursor: pointer;
    .delete-icon {
      fill: red;
    }
  }
}
</style>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "MiniCard"
})
export default class MiniCard extends Vue {
  @Prop() text!: string;
  public constructor() {
    super();
  }
}
</script>