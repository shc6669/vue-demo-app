<template>
  <!--begin::Row-->
  <div class="row g-6 g-xl-9">
    <!--begin::Col-->
    <div class="col-md-6 col-xl-4"
      v-for="(pokemon, index) in pokemons.results"
      :key="index"
    >
      <KTCard
        :pokemonId="parseInt(pokemon.id)"
        :title="pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)"
        :icon="imagePreviewUrl + pokemon.id +'.png'"
      ></KTCard>
    </div>
    <!--end::Col-->

    <!--begin::Pagination-->
    <div class="d-flex flex-stack flex-wrap pt-10">
      <div class="fs-6 fw-bold text-gray-700">
        Showing 1 to 30 of {{pokemons.count}} entries
      </div>

      <!--begin::Pages-->
      <ul class="pagination">
        <li class="page-item previous">
          <a href="#" class="page-link" v-if="pokemons.previous" @click="previousButton">
            <i class="previous"></i>
          </a>
        </li>

        <li class="page-item next">
          <a href="#" class="page-link" v-if="pokemons.next" @click="nextButton">
            <i class="next"></i>
          </a>
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
    const imagePreviewUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
    const url = 'pokemon';
    const queryParams = {
      limit: '30',
      offset: ''
    };
    const pokemons = computed(() => {
      return store.getters.allPokemons;
    });

    onMounted(() => {
      setCurrentPageTitle("Dashboard");
      store.dispatch(Actions.GET_ALL_POKEMON, {
        urlPage: url,
        params: queryParams
      });
    });

    const nextButton = () => {
      const nextUrl = store.getters.nextPokemons;
      store.dispatch(Actions.GET_ALL_POKEMON, {
        urlPage: nextUrl,
        params: null
      });
    }

    const previousButton = () => {
      const prevUrl = store.getters.prevPokemons;
      store.dispatch(Actions.GET_ALL_POKEMON, {
        urlPage: prevUrl,
        params: null
      });
    }

    return {
      imagePreviewUrl,
      nextButton,
      pokemons,
      previousButton
    };
  },
});
</script>
