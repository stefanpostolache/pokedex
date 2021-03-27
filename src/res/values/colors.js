
export const loadColorsForType = (pokemonType) => {

    switch (pokemonType) {

        case "normal" : return {
            primary: "#7B8284",
            secondary: "#91979A",
            accent: "#767C7E",
            sliderTrack: "#272D2F",
            sliderThumb: "#848B8C"
        }
        case "fighting" : return {
            primary: "#D46622",
            secondary: "#EB7D36",
            accent: "#CE621BF",
            sliderTrack: "#7E1100",
            sliderThumb: "#DD702C"
        }
        case "flying" : return {
            primary: "#1AA4CD",
            secondary: "#32BBE4",
            accent: "#11A0C8",
            sliderTrack: "#004F77",
            sliderThumb: "#23AED7"
        }
        case "poison" : return {
            primary: "#A166B0",
            secondary: "#B77DC7",
            accent: "#9A61AB",
            sliderTrack: "#4A125B",
            sliderThumb: "#A96FB9"
        }
        case "ground" : return {
            primary: "#A38900",
            secondary: "#BAA001",
            accent: "#9E8300",
            sliderTrack: "#4D3400",
            sliderThumb: "#AD9300"
        }
        case "rock" : return {
            primary: "#9C8318",
            secondary: "#B29A30",
            accent: "#967F12",
            sliderTrack: "#463001",
            sliderThumb: "#A68E24"
        }
        case "bug" : return {
            primary: "#6A973A",
            secondary: "#81AE50",
            accent: "#659334",
            sliderTrack: "#144400",
            sliderThumb: "#73A142"
        }
        case "fire" : return {
            primary: "#F3523B",
            secondary: "#FA7249",
            accent: "#F0501F",
            sliderTrack: "#8E0001",
            sliderThumb: "#FF5A43"
        }
        case "ghost" : return {
            primary: "#8972B3",
            secondary: "#A288CB",
            accent: "#846DAE",
            sliderTrack: "#341B5E",
            sliderThumb: "#927ABB"
        }
        case "steel" : return {
            primary: "#6E8789",
            secondary: "#849D9F",
            accent: "#698285",
            sliderTrack: "#1B3334",
            sliderThumb: "#779190"
        }
        case "water" : return {
            primary: "#4492C2",
            secondary: "#5CA8DA",
            accent: "#3F8CBE",
            sliderTrack: "#003C6F",
            sliderThumb: "#4D9ACB"
        }
        case "grass" : return {
            primary: "#6B9B20",
            secondary: "#81B335",
            accent: "#66961B",
            sliderTrack: "#164700",
            sliderThumb: "#76A42A"
        }
        case "electric" : return {
            primary: "#A08B00",
            secondary: "#B6A200",
            accent: "#9B8601",
            sliderTrack: "#4B3601",
            sliderThumb: "#AA9400"
        }
        case "psychic" : return {
            primary: "#D94CA0",
            secondary: "#F062B6",
            accent: "#D5489A",
            sliderTrack: "#84014B",
            sliderThumb: "#E256A8"
        }
        case "ice" : return {
            primary: "#2A9DC1",
            secondary: "#42B5D8",
            accent: "#2499BC",
            sliderTrack: "#00496B",
            sliderThumb: "#34A7CA"
        }
        case "dragon" : return {
            primary: "#DB5C43",
            secondary: "#F3735B",
            accent: "#D7583D",
            sliderTrack: "#870600",
            sliderThumb: "#E5654C"
        }
        case "dark" : return {
            primary: "#7F7F7F",
            secondary: "#969696",
            accent: "#7A7A7B",
            sliderTrack: "#2A2A2B",
            sliderThumb: "#898989"
        }
        case "fairy" : return {
            primary: "#A96696",
            secondary: "#C17DAC",
            accent: "#A56191",
            sliderTrack: "#541141",
            sliderThumb: "#B26F9E"
        }
        case "unknown" : return {
            primary: "#8E7A77",
            secondary: "#A3908C",
            accent: "#7A7A7B",
            sliderTrack: "#2A2A2B",
            sliderThumb: "#898989"
        }
        case "shadow" : return {
            primary: "#7F7F7F",
            secondary: "#969696",
            accent: "#7A7A7B",
            sliderTrack: "#2A2A2B",
            sliderThumb: "#898989"
        }
        default: return {
            primary: "#7B8284",
            secondary: "#91979A",
            accent: "#767C7E",
            sliderTrack: "#272D2F",
            sliderThumb: "#848B8C"
        }
    }
}
