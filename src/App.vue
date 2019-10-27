<template>
  <div>
    <nav>
      <div class="top-bar">
        <a href="#" class="brand-logo">Spanish Practice</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <template v-for="route in routes">
            <li :key="route.path" v-if="route.meta.nav">
              <router-link :to="route.path">{{ route.meta && route.meta.displayName ? route.meta.displayName : name }}</router-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <router-view class="container main-page"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    clicked() {
      this.$router.push("/");
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
@import "./styles/common.css";
@import "./styles/global.scss";
@import "./styles/variables.scss";
.brand-logo {
  margin-left: 8px;
}

.main-page {
  margin-top: 32px;
}
</style>
