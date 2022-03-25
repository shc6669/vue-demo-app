<template>
  <!--begin::Card-->
  <router-link :to="{name: 'item-details', params: {id: pokemonId}}" 
    class="card border border-2 border-gray-300 border-hover"
  >
    <!--begin::Card header-->
    <div class="card-header border-0 pt-9">
      <!--begin::Card Title-->
      <div class="card-title" style="margin: auto !important;">
        <!--begin::Avatar-->
        <div class="symbol symbol-200px w-200px">
          <img :src="icon" :alt="title" class="p-3" />
        </div>
        <!--end::Avatar-->
      </div>
      <!--end::Car Title-->
    </div>
    <!--end:: Card header-->

    <!--begin:: Card body-->
    <div class="card-body p-9">
      <!--begin::Name-->
      <div class="fs-2 fw-bolder text-dark text-center">
        {{ title }}
      </div>
      <!--end::Name-->

    </div>
    <!--end:: Card body-->
  </router-link>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "card-1",
  components: {},
  props: {
    pokemonId: Number,
    icon: String,
    title: String,
  },
  setup(props) {
    return {};
  },
});
</script>
