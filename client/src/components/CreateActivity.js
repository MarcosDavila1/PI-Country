import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../actions'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import styles from '../styles/createactivity.module.css'

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
        if(input.countries.length === 0){
            errors.countries = 'At least one Country is required'
        }
        console.log(errors)
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
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
            
            <div className={styles.field}>
                <label>Name</label>
                <input
                type='text'
                name='name' 
                placeholder='Activity Name'
                value={input.name}
                onChange={handleChange}
                />
            </div>
            {errors.name && <p className={styles.error}>{errors.name}</p>}
            
            
            <div className={styles.field}>
                <label>Difficulty</label>
                <select className={styles.select} name='difficulty' defaultValue='Select' onChange={handleChange}>
                    <option disabled={true}>Select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            {errors.difficulty && <p className={styles.error}>{errors.difficulty}</p>}

            
            <div className={styles.field}>
                <label>Duration</label>
                <input 
                type='text'
                name='duration' 
                placeholder='Duration'
                value={input.duration}
                onChange={handleChange}            
                />
            </div>
            {errors.duration && <p className={styles.error}>{errors.duration}</p>}

            
            <div className={styles.field}>
                <label>Season</label>
                <select className={styles.select} name='season' defaultValue='Select' onChange={handleChange}>
                    <option disabled={true}>Select</option>
                    <option value='Summer'>Summer</option>
                    <option value='Autumn'>Autumn</option>
                    <option value='Winter'>Winter</option>
                    <option value='Spring'>Spring</option>
                </select>
            </div>
            {errors.season && <p className={styles.error}>{errors.season}</p>}

            
            <div className={styles.field}>
                <label>Countries</label>
                <select className={styles.select} name='countries' defaultValue='Select' onChange={handleAddCountry}>
                    <option disabled={true}>Select</option>
                    {countries.length > 0 &&
                        countries.map(country => (
                            <option itemType='checkbox' key={country.id}>{country.name}</option>
                        ))
                    }
                </select>
            </div>
            {errors.countries && <p className={styles.error}>{errors.countries}</p>}
            
            <div className={styles.containercountrys}>
                <h4>Countrys Add</h4>
                <div className={styles.containercountries}>
                {input.countries.length > 0 &&
                    input.countries.map((country, index) => (
                        <div className={styles.country} key={index}>
                            <p>{country}</p>
                            <button type='button' onClick={()=> removeCountry(country)}>X</button>
                        </div>
                    ))
                }
                </div>
            </div>
            
            <div className={styles.containerbtn}>
                <input 
                    type='submit'
                    value='Create Activity'
                />
            </div>
        </form>
    </div>
  )
}

export default CreateActivity