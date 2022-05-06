import {GET_CITY} from '../actions/Actions.js'

const initialState = {
    Cities: []
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_CITY:
            return {
                ...state,
                Cities: action.payload,
            };
        default:
            return state;
    }
}