import GET_CITY from '../actions/index.js'

const initialState = {
    cities: []
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_CITY:
            return {
                ...state,
                cities: action.payload,
            };
        default:
            return {
                state,
            };
    }
}