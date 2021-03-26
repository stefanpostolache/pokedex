import { useSelector } from "react-redux";
import { bigImageUrlForPokemonWithId } from "../api";
import styled from 'styled-components';


export default function PokemonImage () {

    const selectedPokemon = useSelector(state => state.details.details.details);

    return (
        <StyledPokemonImage>
            {
                selectedPokemon && <img src={bigImageUrlForPokemonWithId(selectedPokemon.id)} alt={selectedPokemon.name} />
            }
        </StyledPokemonImage>
    )
}

const StyledPokemonImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        transition: transform 0.5s ease-in-out;
        &:hover {
            transform: scale(1.2);
        }
    }
`

