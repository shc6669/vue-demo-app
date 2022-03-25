<template>
  <div :class="`card pt-4 ${cardClasses}`">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2>Moves</h2>
      </div>
      <!--end::Card title-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body py-0">
      <!--begin::Table-->
      <table
        class="table align-middle table-row-dashed fs-6 text-gray-600 fw-bold gy-5"
        id="kt_table_moves"
      >
        <!--begin::Table body-->
        <tbody>
          <template v-for="(move, i) in moves" :key="i">
            <tr>
              <!--begin::Moves--->
              <td class="pe-0 text-gray-600 text-center min-w-200px">
                {{ move.move.name }}
              </td>
              <!--end::Moves--->
            </tr>
          </template>
        </tbody>
        <!--end::Table body-->
      </table>
      <!--end::Table-->
    </div>
    <!--end::Card body-->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "moves",
  props: {
    cardClasses: String,
    moves: {}
  },
  components: {},
  setup() {

    return {};
  },
});
</script>
