
const initialState = {
    pokemon: []
}

export default function loadReducer (state=initialState, action) {
    switch (action.type) {
        case 'LOAD' :
            return {
                ...state,
                pokemon: [...state.pokemon, ...action.payload]
            }
        default:
            return {...state};
    }
}