<template>
  <!--begin::Card-->
  <div :class="`card pt-4 ${cardClasses}`">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2>Statsistics</h2>
      </div>
      <!--end::Card title-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body py-0">
      <!--begin::Table wrapper-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table align-middle table-row-dashed fw-bold text-gray-600 fs-6 gy-5"
          id="kt_table_stats"
        >
          <!--begin::Table body-->
          <tbody>
            <template v-for="(state, i) in states" :key="i">
              <tr>
                <!--begin::Stats--->
                <td>
                  {{ state.stat.name }}
                </td>
                <!--end::Stats--->
                <!--begin::Badge--->
                <td class="min-w-70px">
                  <div :class="`badge badge-light-success`">
                    {{ state.base_stat }}
                  </div>
                </td>
                <!--end::Badge--->
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table wrapper-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "stats",
  components: {},
  props: {
    cardClasses: String,
    states: {}
  },
  setup() {

    return {};
  },
});
</script>
