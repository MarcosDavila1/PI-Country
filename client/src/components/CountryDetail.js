import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountryByName } from '../actions'
import styles from '../styles/countrydetail.module.css'

function CountryDetail(props) {

    const dispatch = useDispatch()
    const countryDetail = useSelector(state=> state.countryDetail)
    const name = props.match.params.name;

    useEffect(()=> {
        dispatch(getCountryByName(name))
    }, [dispatch, name])

    const activitiesCountry = countryDetail[0]?.activities

  return (
    <div className={styles.container}>
        {countryDetail.length > 0 && 
            <div className={styles.containerCountry}>
                <div className={styles.country} key={countryDetail[0].id}>
                    <img src={countryDetail[0].image} alt={`${countryDetail[0].name} Flag`}/>
                    <h2>{countryDetail[0].name}</h2>
                    <h4><span>Id:</span> {countryDetail[0].id}</h4>
                    <h4><span>Continent:</span> {countryDetail[0].continent}</h4>
                    <h4><span>Capital:</span> {countryDetail[0].capital}</h4>
                    <h4><span>Subregion:</span> {countryDetail[0].subregion}</h4>
                    <h4><span>Area:</span> {countryDetail[0].area}</h4>
                    <h4><span>Population:</span> {countryDetail[0].population}</h4>
                </div>
                <div className={styles.containerActivity}>
                    <h4>Activities</h4>
                    {activitiesCountry.length > 0 ? 
                        activitiesCountry.map(el => (
                            <div className={styles.activity} key={el.id}>
                                <h4>{el.name}</h4>    
                                <p><span>Difficulty:</span> {el.difficulty}</p>    
                                <p><span>Duration:</span> {el.duration}</p>    
                                <p><span>Season:</span> {el.season}</p>    
                            </div>
                        ))
                        : <div className={styles.noactivity}>
                            <h4>This country doesn't have activities</h4> 
                        </div>
                    }
                </div>
            </div>
        }
    </div>
  )
}

export default CountryDetail