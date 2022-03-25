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
    species: {
        name: string
    };
    types: Array<string>;
}

@Module
export default class ApiModule extends VuexModule {
    pokemons = {} as DataIndex;
    pokemon = {} as PokemonDetails;

    /**
    * Get current pokemons object
    * @returns Pokemons
    */
    get allPokemons(): DataIndex {
        return this.pokemons;
    }

    /**
    * Get current pokemons object
    * @returns Pokemons
    */
    get pokemonDetail(): PokemonDetails {
        return this.pokemon;
    }

    @Action
    [Actions.GET_ALL_POKEMON](value: any) {
        return ApiService.queryAll("pokemon?limit=12", value)
        .then(({ data }) => {
            this.context.commit(Mutations.SET_VALUE_POKEMONS, data);
            const pokemons  = data;
            const foo: string[] = [];
            pokemons.results.forEach((pokemon: any) => {
                pokemon.id = pokemon.url
                    .split("/")
                    .filter((part: any) => {
                        return !!part;
                    })
                    .pop();
                foo.push(pokemon);
            })
        })
        .catch(({ response }) => {
            this.context.commit(Mutations.SET_ERROR, response.data.errors);
        });
    }

    @Action
    [Actions.GET_DETAIL_POKEMON](value: string) {
        return ApiService.getDetail("pokemon", value)
        .then(({ data }) => {
            this.context.commit(Mutations.SET_VALUE_POKEMON, data);
        })
        .catch(({ response }) => {
            this.context.commit(Mutations.SET_ERROR, response.data.errors);
        });
    }

    @Mutation
    [Mutations.SET_VALUE_POKEMONS](pokemons: any) {
        this.pokemons = pokemons;
    }

    @Mutation
    [Mutations.SET_VALUE_POKEMON](pokemon: any) {
        this.pokemon = pokemon;
        console.log(pokemon);
    }
}
