
const initialState = {
    details: {}
}

export default function detailsReducer (state=initialState, action) {
    switch (action.type) {
        case 'DETAILS':
            return {
                ...state,
                details: action.payload
            }
        default:
            return {...state}
    }
}