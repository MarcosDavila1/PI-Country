import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActivites } from '../actions'
import styles from '../styles/filtros.module.css'

function Filtros({handleChangeAlph, handleChangePopulation, handleChangeCont, handleChangeActivity}) { 

    const dispatch = useDispatch()
    const {activities} = useSelector(state => state)

    useEffect(()=> {
        dispatch(getActivites())
    }, [dispatch])

  return (
    <div className={styles.container}>
        <select className={styles.select} defaultValue='Sort Alphabetically' onChange={(e)=> handleChangeAlph(e)}>
            <option disabled={true}>Sort Alphabetically</option>
            <option value='asc'>A-Z</option>
            <option value='desc'>Z-A</option>
        </select>
        

        
        <select className={styles.select} defaultValue='Sort by Population' onChange={(e)=> handleChangePopulation(e)}>
            <option disabled={true}>Sort by Population</option>
            <option value='asc'>Ascendant</option>
            <option value='desc'>Descendant</option>
        </select>
        

        
            
        <select className={styles.select} defaultValue='Sort by Continent' onChange={handleChangeCont}>
            <option disabled={true}>Sort by Continent</option>
            <option value='south america'>South America</option>
            <option value='north america'>North America</option>
            <option value='africa'>Africa</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
            <option value='antarctica'>Antarctica</option>
        </select>
        

        <select className={styles.select} defaultValue='Sort by Activity' onChange={handleChangeActivity}>
            <option disabled={true}>Sort by Activity</option>
            {activities?.length !== 0 &&
                activities?.map(el => (
                    <option key={el.id} value={el.name}>{el.name.charAt(0).toUpperCase() + el.name.slice(1)}</option>
                ))
            }
        </select>        
    </div>
  )
}

export default Filtros