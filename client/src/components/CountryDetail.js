import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountryByName } from '../actions'

function CountryDetail(props) {

    const dispatch = useDispatch()
    const countryDetail = useSelector(state=> state.countryDetail)
    const name = props.match.params.name;

    useEffect(()=> {
        dispatch(getCountryByName(name))
    }, [dispatch, name])

    const activitiesCountry = countryDetail[0]?.activities

  return (
    <div>
        {countryDetail.length > 0 && 
            <li key={countryDetail[0].id}>
                <img src={countryDetail[0].image} alt={`${countryDetail[0].name} Flag`}/>
                <h2>{countryDetail[0].name}</h2>
                <h4>{countryDetail[0].id}</h4>
                <h4>{countryDetail[0].continent}</h4>
                <h4>{countryDetail[0].capital}</h4>
                <h4>{countryDetail[0].subregion}</h4>
                <h4>{countryDetail[0].area}</h4>
                <h4>{countryDetail[0].population}</h4>
                <h4>Country Activities</h4>
                {activitiesCountry.length > 0 && 
                    activitiesCountry.map(el => (
                        <div key={el.id}>
                            <p>{el.name}</p>    
                            <p>Difficulty: {el.difficulty}</p>    
                            <p>Duration: {el.duration}</p>    
                            <p>Season: {el.season}</p>    
                        </div>
                    ))
                }
            </li>
        }
    </div>
  )
}

export default CountryDetail