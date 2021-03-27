import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux"
import styled from "styled-components"
import { speciesUrlForPokemonWihId } from "../api";
import { loadPokemonTypeIcon } from "../res/img/icons";
import { loadColorsForType } from "../res/values/colors";
import PokemonTitle from "./pokemon-title";

export default function PokemonDetails () {

    const pokemonDetails = useSelector(state => state.details.details.details);
    const [speciesInfo, setSpeciesInfo] = useState(null);

    useEffect(() => {
        axios.get(speciesUrlForPokemonWihId(pokemonDetails.id))
        .then(data => setSpeciesInfo(data.data));
    }, [pokemonDetails.id]);

    return (
        <StyledPokemonDetails>
            <PokemonTitle />
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">
                            {speciesInfo && speciesInfo.genera[7].genus}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Type</th>
                        <td>
                        {
                            pokemonDetails.types.map(type => <StyledType type={type.type.name}><div><FontAwesomeIcon icon={loadPokemonTypeIcon(type.type.name)} /></div>{type.type.name}</StyledType>)
                        }
                        </td>
                    </tr>
                    <tr>
                        <th>Height</th>
                        <td>{`${Math.round(pokemonDetails.height*10)/100} m`}</td>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <td>{`${Math.round(pokemonDetails.weight*10)/100} kg`}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">
                            {speciesInfo && speciesInfo.flavor_text_entries[0].flavor_text}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </StyledPokemonDetails>
    )
}

const StyledPokemonDetails = styled.div`
    margin-right: 150pt;
    table {
        font-size: 30pt;
        font-family: "Roboto", sans-serif;
        width: 84%;
        margin-left: auto;
        margin-right: auto;
        thead {
            text-transform: capitalize;
            tr {
                background-color: #cdd4d4;
                border-bottom: 10pt solid transparent;
            }
            th {
                padding: 1.5rem 0;
            }
        }
        tbody {
            th {
                background-color:#cdd4d4;
                padding-left: 1rem;
                padding-right: 1rem;
            }
            &:before {
                content:"";
                display:block;
                line-height:1pt;
                margin: 2pt 0;
            }
            td {
                padding-left: 1rem;
            }
        }
        tfoot {
            td {
                padding: 1rem;
                font-family: 'Roboto Slab', serif;
            }
            &:before {
                content:"";
                display:block;
                line-height:1pt;
                margin: 2pt 0;
            }
        }
        th {
            font-weight: lighter;
        }
        td {
            background-color: white;
            height: 8vh;
        }
    }
`

const StyledType = styled.span`
    background-color: #333333;
    color: white;
    margin-right: 1rem;
    padding: 0.2rem 1rem 0.2rem 4rem;
    text-transform: uppercase;
    border-radius: 5pt;
    position: relative;
    text-align: center;
    div {
        position: absolute;
        left: -1pt;
        top: 0;
        width: 4rem;
        height: 100%;
        clip-path: polygon(0% 0%, 100% 0, 65% 100%, 0% 100%);
        background-color: ${props => loadColorsForType(props.type).secondary};
        border-top-left-radius: 5pt;
        border-bottom-left-radius: 5pt;
        color: white;
        font-size: 0.8em;
        display: flex;
        justify-content: left;
        align-items: center;
        svg {
            margin-left: 8pt;
        }
    }
`