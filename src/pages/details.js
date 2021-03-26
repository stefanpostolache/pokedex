import { StyledContainer } from "../styles"
import styled from 'styled-components';
import PokemonImage from "../components/pokemon-image";
import PokemonDetails from "../components/pokemon-details";

export default function Details () {
    return (
        <div>
            <StyledDetails>
                <div className="shadow-container">
                <div className="trapezium1">
                </div>
                </div>
                <div className="trapezium2">
                </div>
                <div className="content">
                    <PokemonImage />
                    <PokemonDetails />
                </div>
            </StyledDetails>
        </div>
    )
}

const StyledDetails = styled(StyledContainer)`
`