import axios from "axios"
import { detailsUrlForPokemonWithId } from "../api"

export default function selectActionAsync (id) {
    return async (dispatch) => {
        const pokemonDetails = await axios.get(detailsUrlForPokemonWithId())
    }
}

const selectAction = (pokemonDetails) => {
    return {

    }
}