import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../actions'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function CreateActivity() {

    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
    const history = useHistory()

    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })
    const [errors, setErrors] = useState({})

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

    //Validaciones
    function validator(input){
        let errors = {}

        if(input.name === ''){
            errors.name = 'Name is required'
        }
        if(input.difficulty === ''){
            errors.difficulty = 'Difficulty is required'
        }
        if(input.duration === ''){
            errors.duration = 'Duration is required'
        }
        if(input.season === ''){
            errors.season = 'Season is required'
        }
        if(countries.length === 0){
            errors.countries = 'At least one Country is required'
        }

        return errors
    }

    //Submit
    async function handleSubmit(e){
        e.preventDefault()
        const validacion = validator(input)
        if(Object.keys(validacion).length === 0){
            const post = await axios.post('http://localhost:3001/activity', input)        
            alert(post.data.message)
            history.push('/home')
        } else{
            setErrors(validacion)
        }           
    }

    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch])

  return (
    <div>
        <form onSubmit={handleSubmit}>
            {errors.name && <p>{errors.name}</p>}
            <label>Name</label>
            <input
            type='text'
            name='name' 
            placeholder='Activity Name'
            value={input.name}
            onChange={handleChange}
            />
            
            {errors.difficulty && <p>{errors.difficulty}</p>}
            <label>Difficulty</label>
            <select name='difficulty' defaultValue='Select' onChange={handleChange}>
                <option disabled={true}>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>

            {errors.duration && <p>{errors.duration}</p>}
            <label>Duration</label>
            <input 
            type='text'
            name='duration' 
            placeholder='Duration'
            value={input.duration}
            onChange={handleChange}            
            />

            {errors.season && <p>{errors.season}</p>}
            <label>Season</label>
            <select name='season' defaultValue='Select' onChange={handleChange}>
                <option disabled={true}>Select</option>
                <option value='Summer'>Summer</option>
                <option value='Autumn'>Autumn</option>
                <option value='Winter'>Winter</option>
                <option value='Spring'>Spring</option>
            </select>

            {errors.countries && <p>{errors.countries}</p>}
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

            <input 
                type='submit'
                value='Create Activity'
            />
        </form>
    </div>
  )
}

export default CreateActivity