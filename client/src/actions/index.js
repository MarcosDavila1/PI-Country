import axios from 'axios';

export function getCountries(){
    return async function (dispatch){
        const get = await axios.get('http://localhost:3001/countries')
        dispatch({
            type: 'GET_COUNTRIES',
            payload: get.data
        })
    }
}

export function getCountryByName(name){
    return async function(dispatch){
        const get = await axios.get(`http://localhost:3001/countries?name=${name}`)
        dispatch({
            type: 'GET_COUNTRY_BY_NAME',
            payload: get.data
        })
    }
}

export const sortByAlph = (sort)=>{
    return {
        type: 'SORT_BY_ALPH',
        payload: sort
    }
}