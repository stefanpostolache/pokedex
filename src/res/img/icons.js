import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faAdjust, faBahai, faBolt, faBrain, faBug, faCog, faDiceD20, faDragon, faFeatherAlt, faFire, faFistRaised, faGhost, faLeaf, faMoon, faMountain, faQuestion, faSkullCrossbones, faSnowflake, faTint } from "@fortawesome/free-solid-svg-icons"



export const loadPokemonTypeIcon = (pokemonType) => {

    switch (pokemonType) {

        case "normal" : return faCircle;
        case "fighting" : return faFistRaised;
        case "flying" : return faFeatherAlt;
        case "poison" : return faSkullCrossbones;
        case "ground" : return faMountain;
        case "rock" : return faDiceD20;
        case "bug" : return faBug;
        case "fire" : return faFire;
        case "ghost" : return faGhost;
        case "steel" : return faCog;
        case "water" : return faTint;
        case "grass" : return faLeaf;
        case "electric" : return faBolt;
        case "psychic" : return faBrain;
        case "ice" : return faSnowflake;
        case "dragon" : return faDragon;
        case "dark" : return faMoon;
        case "fairy" : return faBahai;
        case "unknown" : return faQuestion;
        case "shadow" : return faAdjust;
        default: return faCircle;
    }
}
