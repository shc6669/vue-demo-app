<template>
  <!--begin::Row-->
  <div class="row g-6 g-xl-9">
    <!--begin::Col-->
    <div class="col-md-6 col-xl-4"
      v-for="(pokemon, index) in pokemons.results"
      :key="index"
    >
      <KTCard
        :progress="50"
        title="Fitnes App"
        icon="media/svg/brand-logos/plurk.svg"
        :users="users1"
      ></KTCard>
    </div>
    <!--end::Col-->

    <!--begin::Pagination-->
    <div class="d-flex flex-stack flex-wrap pt-10">
      <div class="fs-6 fw-bold text-gray-700">
        Showing 1 to 10 of {{pokemons.count}} entries
      </div>

      <!--begin::Pages-->
      <ul class="pagination">
        <li class="page-item previous">
          <a href="#" class="page-link"><i class="previous"></i></a>
        </li>

        <li class="page-item active">
          <a href="#" class="page-link">1</a>
        </li>

        <li class="page-item">
          <a href="#" class="page-link">2</a>
        </li>

        <li class="page-item">
          <a href="#" class="page-link">3</a>
        </li>

        <li class="page-item">
          <a href="#" class="page-link">4</a>
        </li>

        <li class="page-item">
          <a href="#" class="page-link">5</a>
        </li>

        <li class="page-item">
          <a href="#" class="page-link">6</a>
        </li>

        <li class="page-item next">
          <a href="#" class="page-link"><i class="next"></i></a>
        </li>
      </ul>
      <!--end::Pages-->
    </div>
    <!--end::Pagination-->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import KTCard from "@/components/cards/Card1.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "dashboard",
  components: {
    KTCard,
  },
  setup() {
    const store = useStore();

    const pokemons = computed(() => {
      return store.getters.allPokemons;
    });

    onMounted(() => {
      setCurrentPageTitle("Dashboard");

      store.dispatch(Actions.GET_ALL_POKEMON);
    });

    const example = [
      { name: "Emma Smith", src: "media/avatars/300-6.jpg" },
      { name: "Rudy Stone", src: "media/avatars/300-1.jpg" },
      { name: "Susan Redwood", initials: "S", state: "primary" },
    ];

    return {
      example,
      pokemons,
    };
  },
});
</script>
