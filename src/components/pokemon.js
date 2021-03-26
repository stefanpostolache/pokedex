import styled, { keyframes } from "styled-components";
import { imageUrlForPokemonWithId } from "../api";
import chevronIcon from '../img/pokedex_chevron.png'

export default function Pokemon ({pokemon}) {
    const urlParts = pokemon.url.split('/');
    const pokemonId = urlParts[urlParts.length - 2]
    const pokemonIdFormatted = `00${pokemonId}`.slice(-3);

    return (
        <StyledPokemon className={pokemonId == 1 ? "selected" : ""}>
            <img className="pokemon-icon" src={imageUrlForPokemonWithId(pokemonId)} alt={pokemon.name} />
            <div className="trapezium-black"></div>
            <img className="chevron" src={chevronIcon} />
            <div className="name-number-container">
                <div>
                    <h1>{`No. ${pokemonIdFormatted}`}</h1>
                </div>
                <div>
                    <h2>{pokemon.name}</h2>
                </div>
            </div>
        </StyledPokemon>
    )
}

const chevronAnimation = keyframes`
    from {
        transform: translateX(-130%) translateY(-50%);
    } to {
        transform: translateX(-110%) translateY(-50%);
    }
`

const StyledPokemon = styled.div`
    margin-top: 2rem;
    margin-right: 2rem;
    margin-left: 3rem;
    padding: 0 2rem;
    border-radius: 30pt;
    position: relative;

    .trapezium-black {
        position: absolute;
        background-color: transparent;
        right: 0;
        top: 0;
        width: 55%;
        height: 100%;
        border-top-right-radius: 30pt;
        border-bottom-right-radius: 30pt;
        clip-path: polygon(5% 0%, 100% 0, 100% 100%, 0% 100%);
    }

    h1, h2 {
        font-size: 2em;
        margin: 5pt 0;
    }

    h1 {
        margin-left: 40pt;
    }

    h2 {
        text-transform: capitalize;
    }

    &.selected {
        background-color: #F0501F;
        box-shadow: 0 5pt 20pt rgba(0,0,0,0.2);
        h1, h2 {
            color: white;
            flex: 1;
        }
        .trapezium-black {
            background-color: black;
        }
        .chevron {
            display: block;;
        }
    }

    .name-number-container {
        display: flex;

        & > div {
            flex: 1;
            display: inline-block;
            z-index: 3;
        } 
        
    }

    img.pokemon-icon {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%) translateX(-20%);
    }

    img.chevron {
        position: absolute;
        height: 45pt;
        top: 50%;
        transform: translateX(-130%) translateY(-50%);
        animation: ${chevronAnimation} 1s ease infinite alternate;
        display: none;
    }

`