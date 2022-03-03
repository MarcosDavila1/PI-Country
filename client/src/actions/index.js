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

export function sortByAlph(sort){
    return async function(dispatch){
        const get = await axios.get(`http://localhost:3001/countries?alph=${sort}`)
        dispatch({
            type: 'GET_COUNTRIES',
            payload: get.data
        })
    }
}

export function sortByPopulation(sort){
    return async function(dispatch){
        const get = await axios.get(`http://localhost:3001/countries?population=${sort}`)
        dispatch({
            type: 'GET_COUNTRIES',
            payload: get.data
        })
    }
}

export function sortByContinent(continent){
    return{
        type: 'GET_COUNTRIES',
        payload: continent
    }
}