<style lang="scss" scoped>
</style>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Pie } from "vue-chartjs"
import { mixins } from 'vue-class-component';

@Component({
  extends: Pie
})
export default class PieChart extends Vue<Pie> {
  @Prop() chartData!: any;
  @Prop() options!: any;
  
  public constructor() {
    super();
  }

  mounted() {
    this.renderChart(this.chartData, this.options);
  }

}
</script>