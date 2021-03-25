import axios from "axios"
import { pokemonListDataURL } from "../api"

export default function loadActionAsync (startingFrom) {
    return async (dispatch) => {
        let pokemonData;
        const range = startingFrom + 100;
        if (range >= 898) {
            pokemonData = await axios.get(pokemonListDataURL(startingFrom, 98));
        } else {
            pokemonData = await axios.get(pokemonListDataURL(startingFrom));
        }
        dispatch(loadAction(pokemonData))
    }
}

const loadAction = (pokemonData) => {
    return {
        type: "LOAD",
        payload: pokemonData.data.results
    }
}