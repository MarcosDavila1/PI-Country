import axios from 'axios';

export function getCountries(){
    return async function (dispatch){
        try {
            const get = await axios.get('http://localhost:3001/countries')
            dispatch({
                type: 'GET_COUNTRIES',
                payload: get.data
            })
        } catch (error) {
            return console.log('No fue posible traer los paises')
        }
    }
}

export function getCountryByName(name){
    return async function(dispatch){
        try {
            const get = await axios.get(`http://localhost:3001/countries?name=${name}`)
            dispatch({
                type: 'GET_COUNTRY_BY_NAME',
                payload: get.data
            })
        } catch (error) {
            return console.log('No fue posible encontrar el país')
        }
    }
}

export function sortByAlph(sort){
    return async function(dispatch){
        try {
            const get = await axios.get(`http://localhost:3001/countries?alph=${sort}`)
            dispatch({
                type: 'GET_COUNTRIES',
                payload: get.data
            })
        } catch (error) {
            return console.log('No fue posible ordenar')
        }
    }
}

export function sortByPopulation(sort){
    return async function(dispatch){
        try {
            const get = await axios.get(`http://localhost:3001/countries?population=${sort}`)
            dispatch({
                type: 'GET_COUNTRIES',
                payload: get.data
            })
        } catch (error) {
            return console.log('No fue posible ordenar')
        }
    }
}

export function sortByContinent(continent){
    return{
        type: 'GET_COUNTRIES',
        payload: continent
    }
}

export function getActivites(){
    return async function(dispatch){
        try {
            const get = await axios.get('http://localhost:3001/activity')
            dispatch({
                type: 'GET_ACTIVITIES',
                payload: get.data
            })
        } catch (error) {
            return console.log('Aun no hay actividades')
        }
    }
}

export function sortByActivity(activity){
    return{
        type: 'GET_COUNTRIES',
        payload: activity
    }
}