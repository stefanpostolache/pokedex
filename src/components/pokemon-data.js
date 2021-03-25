import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import loadActionAsync from "../actions/load-action";
import Pokemon from "./pokemon";

export default function PokemonData () {

    const dispatch = useDispatch();

    const pokemonData = useSelector(state => state.load.pokemon);

    const [hasMore, setHasMore] = useState(true);

    const fetchMorePokemon = () => {
        if (pokemonData.length >= 898) {
            setHasMore(false);
        } else {
            dispatch(loadActionAsync(pokemonData ? pokemonData.length : 0))
        }
    }

    // useEffect(() => {
    //     fetchMorePokemon(dispatch);
    // },[dispatch])

    return (
        <StyledPokemonData>
            <InfiniteScroll
                loadMore={fetchMorePokemon} 
                pageStart={0}
                hasMore={hasMore}
                loader={<div className="loader" key={0}>Loading ...</div>}
                initialLoad={true}
                useWindow={false}>
                    {
                        pokemonData ? pokemonData.map(pokemon => <Pokemon pokemon={pokemon} />) : <p>No Data</p>
                    }
            </InfiniteScroll>
        </StyledPokemonData>
    )
}

const StyledPokemonData = styled.div`
    margin-left: 300pt;
    overflow-y: scroll;
    margin-right: 1rem;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #FC5E43; 
    }

    &::-webkit-scrollbar-track {
        background-color: #920102;
    }
`