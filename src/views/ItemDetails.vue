<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row">
    <!--begin::Sidebar-->
    <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
      <!--begin::Card-->
      <div class="card mb-5 mb-xl-8">
        <!--begin::Card body-->
        <div class="card-body pt-15">
          <!--begin::Summary-->
          <div class="d-flex flex-center flex-column mb-5">
            <!--begin::Avatar-->
            <div class="symbol symbol-150px symbol-circle mb-7">
              <img v-if="pokemon.id" :src="imagePreviewUrl + pokemon.id +'.png'" :alt="pokemon.name" />
            </div>
            <!--end::Avatar-->

            <!--begin::Name-->
            <a
              href="#"
              class="fs-3 text-gray-800 text-hover-primary fw-bolder mb-1"
              v-if="pokemon.name"
            >
              {{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}}
            </a>
            <!--end::Name-->

            <!--begin::Type-->
            <div class="fs-5 fw-bold text-bold mb-4 mt-6">Types</div>
            <!--end::Type-->

            <!--begin::Info-->
            <div class="d-flex flex-wrap flex-center">
              <!--begin::Types-->
              <div
                class="border border-gray-300 border-dashed rounded py-3 px-3 mx-3 mb-3"
                v-for="(info, index) in pokemon.types"
                :key="index"
              >
                <div class="fs-4 fw-bolder text-gray-700">
                  <span class="svg-icon svg-icon-3x svg-icon-success">
                    <inline-svg v-if="info.type.name === 'fire'" src="media/icons/duotune/abstract/abs002.svg" />
                    <inline-svg v-if="info.type.name === 'grass'" src="media/icons/duotune/abstract/abs047.svg" />
                    <inline-svg v-if="info.type.name === 'poison'" src="media/icons/duotune/abstract/abs012.svg" />
                    <inline-svg v-if="info.type.name === 'flying'" src="media/icons/duotune/abstract/abs025.svg" />
                  </span>
                </div>
                <div class="fw-bold text-center text-muted">{{ info.type.name }}</div>
              </div>
              <!--end::Types-->
            </div>
            <!--end::Info-->
          </div>
          <!--end::Summary-->

          <!--begin::Details toggle-->
          <div class="d-flex flex-stack fs-4 py-3">
            <div
              class="fw-bolder rotate collapsible"
              data-bs-toggle="collapse"
              href="#kt_customer_view_details"
              role="button"
              aria-expanded="false"
              aria-controls="kt_customer_view_details"
            >
              Details
              <span class="ms-2 rotate-180">
                <span class="svg-icon svg-icon-3">
                  <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
                </span>
              </span>
            </div>
          </div>
          <!--end::Details toggle-->

          <div class="separator separator-dashed my-3"></div>

          <!--begin::Details content-->
          <div id="kt_customer_view_details" class="collapse show">
            <div class="py-5 fs-6">
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">Height</div>
              <div class="text-gray-600">{{pokemon.height}} cm</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">Weight</div>
              <div class="text-gray-600">{{pokemon.weight}} gram</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">Abillities</div>
              <div class="text-gray-600">
                <span v-for="(list, index) in pokemon.abilities" :key="index">
                  <span>{{list.ability.name}}</span>
                  <span v-if="index + 1 < pokemon.abilities.length">, <br /></span>
                </span>
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">Species</div>
              <div class="text-gray-600" v-if="pokemon.species">{{pokemon.species.name}}</div>
              <!--begin::Details item-->
            </div>
          </div>
          <!--end::Details content-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->
    </div>
    <!--end::Sidebar-->

    <!--begin::Content-->
    <div class="flex-lg-row-fluid ms-lg-15">
      <!--begin:::Tabs-->
      <ul
        class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8"
      >
        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4 active"
            data-bs-toggle="tab"
            href="#kt_pokemon_stats_tab"
            >Stats</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-bs-toggle="tab"
            href="#kt_pokemon_moves_tab"
            >Moves</a
          >
        </li>
        <!--end:::Tab item-->
      </ul>
      <!--end:::Tabs-->

      <!--begin:::Tab content-->
      <div class="tab-content" id="myTabContent">
        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade show active"
          id="kt_pokemon_stats_tab"
          role="tabpanel"
        >
          <PaymentRecords card-classes="mb-6 mb-xl-9"></PaymentRecords>

          <PaymentMethods card-classes="mb-6 mb-xl-9"></PaymentMethods>

          <CreditBalance card-classes="mb-6 mb-xl-9"></CreditBalance>

          <Invoices card-classes="mb-6 mb-xl-9"></Invoices>
        </div>
        <!--end:::Tab pane-->

        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade"
          id="kt_pokemon_moves_tab"
          role="tabpanel"
        >
          <Logs card-classes="mb-6 mb-xl-9"></Logs>
          <Events card-classes="mb-6 mb-xl-9"></Events>
        </div>
        <!--end:::Tab pane-->
      </div>
      <!--end:::Tab content-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import PaymentRecords from "@/components/customers/cards/overview/PaymentRecords.vue";
import PaymentMethods from "@/components/customers/cards/overview/PaymentMethods.vue";
import CreditBalance from "@/components/customers/cards/overview/CreditBalance.vue";
import Invoices from "@/components/customers/cards/overview/Invoices.vue";

import Events from "@/components/customers/cards/events-and-logs/Events.vue";
import Logs from "@/components/customers/cards/events-and-logs/Logs.vue";

import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "item-details",
  components: {
    PaymentRecords,
    PaymentMethods,
    CreditBalance,
    Invoices,
    Events,
    Logs,
  },
  props: {
    id: Number
  },
  setup(props) {
    const store = useStore();
    const imagePreviewUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
    const pokemon = computed(() => {
      return store.getters.pokemonDetail;
    });

    onMounted(() => {
      setCurrentPageBreadcrumbs("Pokemon Detail", ["Dashboard"]);
      store.dispatch(Actions.GET_DETAIL_POKEMON, props.id);
    });

    return {
      imagePreviewUrl,
      pokemon
    };
  },
});
</script>
