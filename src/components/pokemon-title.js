import { useSelector } from "react-redux"
import styled from "styled-components";
import { imageUrlForPokemonWithId } from "../api";

export default function PokemonTitle () {

    const selectedPokemon = useSelector(state => state.details.details.details);

    const pokemonIdFormatted = `00${selectedPokemon.id}`.slice(-3);

    return (
        <StyledPokemonTitle>
            <img className="pokemon-icon" src={imageUrlForPokemonWithId(selectedPokemon.id)} alt={selectedPokemon.name} loading="lazy"/>
            <div className="trapezium-black"></div>
            <div className="name-number-container">
                <div className="number">
                    <h1>{`No. ${pokemonIdFormatted}`}</h1>
                </div>
                <div className="name">
                    <h2>{selectedPokemon.name}</h2>
                </div>
            </div>
        </StyledPokemonTitle>
    )
}

const StyledPokemonTitle = styled.div`
    margin-top: 2rem;
    padding: 0.5rem 2rem;
    position: relative;
    width: 100%;
    background-color: #F0501F;
    margin-bottom: 2rem;

    .trapezium-black {
        position: absolute;
        background-color: black;
        right: 0;
        top: 0;
        width: 69%;
        height: 100%;
        clip-path: polygon(5% 0%, 100% 0, 100% 100%, 0% 100%);
    }

    h1, h2 {
        font-size: 2em;
        margin: 5pt 0;
        color: white;
    }

    h1 {
        margin-left: 40pt;
    }

    h2 {
        text-transform: capitalize;
    }

    .name-number-container {
        display: flex;

        & > div:first-child {
            flex: 1;
            display: inline-block;
            z-index: 3;
        } 
        
        & > div:last-child {
            flex: 2;
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

`
