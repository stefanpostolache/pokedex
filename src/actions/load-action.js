import axios from "axios"
import { pokemonListDataURL } from "../api"

export default function loadActionAsync (page) {
    console.log(`page number: ${page}`);
    return async (dispatch) => {
        let pokemonData;
        const range = page*100 + 100;
        if (range >= 898) {
            pokemonData = await axios.get(pokemonListDataURL(page*100, 98));
        } else {
            pokemonData = await axios.get(pokemonListDataURL(page*100));
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