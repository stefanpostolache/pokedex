import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import selectActionAsync from "../actions/select-action";
import { imageUrlForPokemonWithId } from "../api";

export default function Pokemon ({pokemon}) {

    const dispatch = useDispatch();

    const urlParts = pokemon.url.split('/');
    const pokemonId = urlParts[urlParts.length - 2]
    const pokemonIdFormatted = `00${pokemonId}`.slice(-3);

    const {id} = useSelector(state => state.details.details);

    const onClickHandler = () => {
        dispatch(selectActionAsync(Number(pokemonId)))
    }

    return (
        <StyledPokemon className={Number(pokemonId) === id ? "selected" : ""} onClick={onClickHandler}>
            <div className="trapezium-black"></div>
            <img src={imageUrlForPokemonWithId(pokemonId)} alt={pokemon.name} />
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

const StyledPokemon = styled.div`
    margin-top: 2rem;
    margin-right: 1.5rem;
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
        clip-path: polygon(5% 0%, 100% 0, 100% 100%, 0% 100%)
    }

    h1, h2 {
        font-size: 2em;
        margin: 5pt 0pt;
    }

    h1 {
        text-transform: capitalize;
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
        }
        .trapezium-black {
            background-color: black;
        }
    }

    .name-number-container {
        display: flex;
        div {
            flex: 1;
            display: inline-block;
            z-index: 3;
        }
    }

    img {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%) translateX(-20%);
    }

`