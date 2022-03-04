import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountryByName } from '../actions';

function SearchBar() {

    const dispatch = useDispatch()
    const {allCountries} = useSelector(state => state)

    const [countryName, setCountryName] = useState('')

    function handleChange(e){
        setCountryName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        const findCountry = allCountries.find(country => country.name.toLowerCase() === countryName.toLowerCase())
        if(findCountry){
            dispatch(getCountryByName(countryName))
            setCountryName('')
        } else{
            setCountryName('')
            alert('El pais ingresado no existe')
        }   
    }

  return (
    <div>
        <form onSubmit={(e)=> handleSubmit(e)}>
          <input 
            type='text' 
            placeholder='Ingrese un país...'
            value={countryName}
            onChange={handleChange}
          />
          <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar