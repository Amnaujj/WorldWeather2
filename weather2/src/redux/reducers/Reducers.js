import {GET_INFO} from '../actions/Actions.js'

const initialState = {
    Cities: []
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_INFO:
            return {
                ...state,
                Cities: action.payload,
            };
        default:
            return state;
    }
}