const initialState = {
    countries: [],
    allCountries: [],
    activities:[],
    allActivities:[],
    countriesName:[],
    countryDetail: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COUNTRIES':
            if(action.payload === 'south america' ||
                action.payload === 'north america' ||
                action.payload === 'africa' ||
                action.payload === 'asia' ||
                action.payload === 'europe' ||
                action.payload === 'oceania' ||
                action.payload === 'antarctica'
            ){
                const continent = action.payload;
                const filter = [...state.allCountries].filter(el => el.continent.toLowerCase() === continent.toLowerCase())
                return {
                    ...state,
                    countries: filter
                }
            } else if(typeof action.payload === 'string'){
                const activity = action.payload;
                const filter = [...state.allActivities].filter(el => el.name.toLowerCase() === activity.toLowerCase())
                // console.log(filter)
                const result = filter[0].countries
                return{
                    ...state,
                    countries: result
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

        case 'GET_ACTIVITIES':
            return{
                ...state,
                activities: action.payload,
                allActivities: action.payload
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer;