const initialState = {
    countries: [],
    allCountries: [],
    activities:[],
    countriesName:[],
    countryDetail: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COUNTRIES':
            if(typeof action.payload === 'string'){
                const continent = action.payload;
                const filter = [...state.allCountries].filter(el => el.continent.toLowerCase() === continent.toLowerCase())
                return {
                    ...state,
                    countries: filter
                }
            }
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        
        case 'GET_COUNTRY_BY_NAME':
            return{
                ...state,
                countries: action.payload,
                countryDetail: action.payload
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer;