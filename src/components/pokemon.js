import styled from "styled-components";
import { imageUrlForPokemonWithId } from "../api";

export default function Pokemon ({pokemon}) {
    const urlParts = pokemon.url.split('/');
    const pokemonId = urlParts[urlParts.length - 2]
    const pokemonIdFormatted = `00${pokemonId}`.slice(-3);

    return (
        <StyledPokemon className={pokemonId == 1 ? "selected" : ""}>
            <img src={imageUrlForPokemonWithId(pokemonId)} alt={pokemon.name} />
            <div className="name-number-container">
                <h1>{`No. ${pokemonIdFormatted}`}</h1>&nbsp;&nbsp;&nbsp;<h2>{pokemon.name}</h2>
            </div>
        </StyledPokemon>
    )
}

const StyledPokemon = styled.div`
    margin-top: 2rem;
    margin-right: 2rem;
    margin-left: 3rem;
    padding: 0 2rem;
    border-radius: 30pt;
    position: relative;

    h1, h2 {
        font-size: 2.5em;
    }

    &.selected {
        background-color: #F0501F;
        box-shadow: 0 5pt 20pt rgba(0,0,0,0.2);
        h1, h2 {
            color: white;
            flex: 1;
        }
    }

    .name-number-container {
        display: flex;
        
    }

    img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
`