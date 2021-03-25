import { useSelector } from "react-redux"
import styled from "styled-components";
import { bigImageUrlForPokemonWithId } from "../api";

export default function PokemonImage () {

    const {id, name} = useSelector(state => state.details.details);

    return (
        <StyledPokemonImage>
            {
                id && <img src={bigImageUrlForPokemonWithId(id)} alt={name} />
            }
        </StyledPokemonImage>
    )
}

const StyledPokemonImage = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        transition: transform 0.6s ease;
        &:hover {
            transform: scale(1.2);
        }
    }
`

