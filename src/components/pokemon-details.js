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
    }, [pokemonDetails.id]);

    return (
        <StyledPokemonDetails>
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
                            pokemonDetails.types.map(type => <span>{type.type.name}</span>)
                        }
                        </td>
                    </tr>
                    <tr>
                        <th>Height</th>
                        <td>{`${Math.round(pokemonDetails.height*10)/100}m`}</td>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <td>{`${Math.round(pokemonDetails.weight*10)/100}kg`}</td>
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
    margin-right: 200pt;
    table {
        font-size: 30pt;
        font-family: "Roboto", sans-serif;
        width: 100%;
        th {
            font-weight: lighter;
        }
        td {
            background-color: white;
            height: 8vh;
        }
        thead {
            text-transform: capitalize;
            tr {
                background-color: #C3DDD5;
                border-bottom: 10pt solid transparent;
            }
            th {
                padding: 1.5rem 0;
            }
        }
        tbody {
            th {
                background-color:#C3DDD5
            }
        }
        tfoot:before {
            content:"@";
            display:block;
            line-height:1pt;
            text-indent:-99999px;
            font-size: 0.5px;
        }
        tbody:before {
            content:"@";
            display:block;
            line-height:1pt;
            text-indent:-99999px;
            font-size: 0.5px;
        }
        tfoot {
            background-color: white;
            th {
                background-color: white;
            }
        }
    }
`