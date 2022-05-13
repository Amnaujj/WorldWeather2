import { GET_CITY, DELETE_CITY, CITY_DETAIL } from '../actions/index.js'

const initialState = {
    citiesLoaded: [],
    city: {}
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_CITY:
            if(state.citiesLoaded === undefined) {
                return {
                    ...state,
                    citiesLoaded: [action.payload]
                }
            } else {
                return {
                    ...state,
                    citiesLoaded: [...state.citiesLoaded, action.payload] //state.citiesLoaded.concat(action.payload)
                }
            }
        case DELETE_CITY:
            return {
                ...state,
                citiesLoaded: state.citiesLoaded.filter((city) => city.id !== action.payload)
            }
        case CITY_DETAIL:
            // console.log(action.payload)
            return {
                ...state,
                city: action.payload
            }
        default:
            return {
                state,
            };
    }
}