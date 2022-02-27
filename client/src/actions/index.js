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