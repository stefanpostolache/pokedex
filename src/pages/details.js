import { StyledContainer } from "../styles"
import styled from 'styled-components';
import PokemonImage from "../components/pokemon-image";
import PokemonDetails from "../components/pokemon-details";

export default function Details () {

    return (
        <div>
            <StyledDetails>
                <div className="parallelogram-back">
                </div>
                <div className="parallelogram-front">
                </div>
                <div className="content">
                    <PokemonImage />
                    <PokemonDetails />
                </div>
            </StyledDetails>
        </div>
    )
}

const parrallelogramMixin = `
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
`

const StyledDetails = styled(StyledContainer)`
    .parallelogram-back {
        ${parrallelogramMixin}
        background-color:#f3523b;
        clip-path: polygon(7% 0, 100% 0, 100% 79%, 93% 100%, 0 100%, 0 21%);
    }
    .parallelogram-front {
        ${parrallelogramMixin}
        background-color: #fa7247;
        clip-path: polygon(21% 0, 100% 0, 100% 37%, 79% 100%, 0 100%, 0 63%);
    }
`

