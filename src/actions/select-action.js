import axios from "axios";
import { detailsUrlForPokemonWithId } from "../api";

export default function selectActionAsync (id) {
    return async (dispatch) => {
        const pokemonDetails = await axios.get(detailsUrlForPokemonWithId(id));
        dispatch(selectAction(pokemonDetails));
    }
}

const selectAction = (pokemonDetails) => {
    return {
        type: 'DETAILS',
        payload: {
            details: pokemonDetails.data
        }
    }
}