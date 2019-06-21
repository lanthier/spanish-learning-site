<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Spanish Practice</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li :key="route.path" v-for="route in routes">
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view class="container main-page"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["name"],
  methods: {
    clicked() {
      this.$router.push("pasttense");
    }
  },
  computed: {
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
