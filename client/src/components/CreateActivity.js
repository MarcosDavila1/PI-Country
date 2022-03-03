import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../actions'

function CreateActivity() {

    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)

    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })

    function handleChange(e){
        e.preventDefault()
        setInput({...input, [e.target.name]:e.target.value})
    }

    function handleAddCountry(e){
        e.preventDefault()
        setInput({...input, [e.target.name]:[...input.countries, e.target.value]})
    }

    function removeCountry(name){
        const filter = input.countries.filter(el => el !== name)
        setInput({...input, countries: filter})
    }

    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch])

  return (
    <div>
        <form>
            <label>Name</label>
            <input
            type='text'
            name='name' 
            placeholder='Activity Name'
            value={input.name}
            onChange={handleChange}
            />
            
            <label>Difficulty</label>
            <select name='difficulty' defaultValue='Select' onChange={handleChange}>
                <option disabled={true}>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>

            <label>Duration</label>
            <input 
            type='text'
            name='duration' 
            placeholder='Duration'
            value={input.duration}
            onChange={handleChange}            
            />

            <label>Season</label>
            <select name='season' defaultValue='Select' onChange={handleChange}>
                <option disabled={true}>Select</option>
                <option value='summer'>Summer</option>
                <option value='autumn'>Autumn</option>
                <option value='winter'>Winter</option>
                <option value='spring'>Spring</option>
            </select>

            <label>Countries</label>
            <select name='countries' defaultValue='Select' onChange={handleAddCountry}>
                <option disabled={true}>Select</option>
                {countries.length > 0 &&
                    countries.map(country => (
                        <option itemType='checkbox' key={country.id}>{country.name}</option>
                    ))
                }
            </select>
            
            <div>
                <h4>Countrys Add</h4>
                {input.countries.length > 0 &&
                    input.countries.map((country, index) => (
                        <div key={index}>
                            <p>{country}</p>
                            <button type='button' onClick={()=> removeCountry(country)}>X</button>
                        </div>
                    ))
                }
            </div>
        </form>
    </div>
  )
}

export default CreateActivity