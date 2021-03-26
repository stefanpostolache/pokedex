import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux"
import styled from "styled-components"
import { speciesUrlForPokemonWihId } from "../api";

export default function PokemonDetails () {

    const pokemonDetails = useSelector(state => state.details.details.details);
    const [speciesInfo, setSpeciesInfo] = useState(null);

    useEffect(() => {
        axios.get(speciesUrlForPokemonWihId(pokemonDetails.id))
        .then(data => setSpeciesInfo(data.data));
    });

    return (
        <StyledPokemonDetails>
            <table>
                <thead>
                    <th colSpan="2">
                        {pokemonDetails.name}
                    </th>
                </thead>
                <tbody>

                </tbody>
                <tfoot>
                    <th colSpan="2">
                        {speciesInfo && speciesInfo.flavor_text_entries[0].flavor_text}
                    </th>
                </tfoot>
            </table>
        </StyledPokemonDetails>
    )
}

const StyledPokemonDetails = styled.div`
    margin-right: 200pt;
    table {
        width: 100%;
        height: 100%;
        thead {
            background-color: #C3DDD5;
            border-bottom: 4pt solid transparent;
        }
        tfoot {
            background-color: white;
        }
    }
`