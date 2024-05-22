import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";



export const PokemonApp = () => {
    const dispatch = useDispatch();
    const { isLoading, pokemons, page } = useSelector( state => state.pokemons );


    useEffect(() => {
        dispatch( getPokemons() );
    }, []);

    const nextPage = () => {
        dispatch( getPokemons(page) );
    };


    return (
        <>
            <h1>PokemonApp</h1>
            <hr />

            <span>loading: {isLoading? 'True': 'False'}</span>

            <ul>
                {pokemons.map( poke => (
                    <li key={poke.name}>{poke.name}</li>
                ))}
            </ul>

            <button
                disabled={isLoading}
                onClick={ nextPage }
            >
                Next
            </button>
        </>
    )
}