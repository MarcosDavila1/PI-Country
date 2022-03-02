const initialState = {
    countries: [],
    activities:[],
    countriesName:[],
    countryDetail: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload
            }
        
        case 'GET_COUNTRY_BY_NAME':
            return{
                ...state,
                countries: action.payload
            }

        case 'SORT_BY_ALPH':
            let sort;

            if(action.payload === 'asc'){ 
                sort = state.countries.sort((a, b) => {
                    if(a.name > b.name){
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0;
                })
            } else if(action.payload === 'desc'){
                sort = state.countries.sort((a, b) => {
                    if(a.name > b.name){
                        return -1;
                    }
                    if(b.name > a.name){
                        return 1;
                    }
                    return 0;
                })
            }

            return{
                ...state,
                countries: sort
            }
    
        default:
            return {
                ...state
            }
    }
}

export default reducer;