<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Spanish Practice</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li :key="route.path" v-for="route in routes">
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
          <!-- <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>-->
        </ul>
      </div>
    </nav>

    <router-view class="container main-page"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["name", "initialEnthusiasm"],
  data() {
    return {
      enthusiasm: this.initialEnthusiasm
    };
  },
  methods: {
    increment() {
      this.enthusiasm++;
    },
    decrement() {
      if (this.enthusiasm > 1) {
        this.enthusiasm--;
      }
    },
    clicked() {
      this.$router.push("pasttense");
    }
  },
  computed: {
    exclamationMarks(): string {
      return Array(this.enthusiasm + 1).join("!");
    },
    routes(): any {
      return (this.$router as any).options.routes;
    }
  }
});
</script>

<style lang="scss">
@import "./materialize.min.css";

.brand-logo {
  margin-left: 8px;
}

.main-page {
  margin-top: 32px;
}
</style>
