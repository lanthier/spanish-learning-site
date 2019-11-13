<template>
  <div>
    <nav>
      <div class="top-bar">
        <LogoSvg />
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <template v-for="route in routes">
            <li :key="route.path" v-if="route.meta.nav">
              <router-link :to="route.path">
                <h4>{{ route.meta && route.meta.displayName ? route.meta.displayName : name }}</h4>
              </router-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <router-view class="main-page"></router-view>
  </div>
</template>

<style>
</style>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import LogoSvg from "./svgs/LogoSvg.vue";

@Component({
  components: {
    LogoSvg
  }
})
export default class App extends Vue {
  public constructor() {
    super();
  }

  clicked() {
    this.$router.push("/");
  }

  get routes() {
    return (this.$router as any).options.routes;
  }
}

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
  padding: 8px 128px;
}
</style>
