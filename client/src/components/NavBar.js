import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountryByName } from '../actions';

function NavBar() {

  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)

  const [countryName, setCountryName] = useState('')

  function handleChange(e){
    setCountryName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const findCountry = countries.find(country => country.name.toLowerCase() === countryName.toLowerCase())
    if(findCountry){
      dispatch(getCountryByName(countryName))
      setCountryName('')
    } else{
      setCountryName('')
      console.log('El pais ingresado no existe')
    }   
  }

  return (
    <div>
        <a href={'/home'}>Country App</a>

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

export default NavBar