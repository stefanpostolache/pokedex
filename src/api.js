
export const pokemonListDataURL = (startingFrom, ofNPokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${ofNPokemon || 100}&offset=${startingFrom}`
    console.log(url);
    return url;
}

export const detailsUrlForPokemonWithId = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

export const imageUrlForPokemonWithId = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export const bigImageUrlForPokemonWithId = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`