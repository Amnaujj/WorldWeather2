import { GET_CITY, DELETE_CITY } from '../actions/index.js'

const initialState = {
    citiesLoaded: [],   
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_CITY:
            console.log(state)
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
        default:
            return {
                state,
            };
    }
}