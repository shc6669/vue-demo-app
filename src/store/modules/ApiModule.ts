import ApiService from "@/core/services/ApiService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

export interface DataIndex {
  count: string;
  next: string;
  previous: string;
  result: Array<string>;
}

export interface PokemonDetails {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Array<string>;
    forms: Array<string>;
    game_indices: Array<string>;
    held_items: Array<string>;
    location_area_encounters: string;
    moves: Array<string>;
    past_types: Array<string>;
    sprites: any,
    species: Array<string>;
    types: Array<string>;
}

@Module
export default class ApiModule extends VuexModule {
  @Action
  [Actions.GET_ALL_POKEMON](value: any) {
    return ApiService.queryAll("pokemon", value)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_VALUE_POKEMON_DETAIL, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.GET_DETAIL_POKEMON](value: string) {
    return ApiService.getDetail("pokemon", value)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_VALUE_POKEMON_DETAIL, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }
}
