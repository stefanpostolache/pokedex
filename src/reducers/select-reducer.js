
const initialState = {
    details: {}
}

export default function selectReducer (state=initialState, action) {
    switch (action.type) {
        case 'DETAILS' :
            return {
                details: action.payload
            }
        default: 
            return {...state};
    }
}