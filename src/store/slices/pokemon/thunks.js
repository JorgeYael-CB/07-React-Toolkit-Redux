import { pokeApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";



export const getPokemons = ( page = 0 ) => {
    return async(dispatch, getState) => {
        dispatch( startLoadingPokemons() );

        // TODO: realizar peticion HTTP
        const data = await pokeApi.get(`/pokemon?limit=10&offset=${page}`)

        dispatch( setPokemons({page: page + 1, pokemons: data.data.results}) );
    }
};