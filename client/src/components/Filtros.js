import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActivites } from '../actions'

function Filtros({handleChangeAlph, handleChangePopulation, handleChangeCont, handleChangeActivity}) { 

    const dispatch = useDispatch()
    const {activities} = useSelector(state => state)

    useEffect(()=> {
        dispatch(getActivites())
    }, [dispatch])

  return (
    <div>
        <select defaultValue='Select' onChange={(e)=> handleChangeAlph(e)}>
            <option disabled={true}>Select</option>
            <option value='asc'>A-Z</option>
            <option value='desc'>Z-A</option>
        </select>
        

        
        <select defaultValue='Select' onChange={(e)=> handleChangePopulation(e)}>
            <option disabled={true}>Select</option>
            <option value='asc'>Ascendant</option>
            <option value='desc'>Descendant</option>
        </select>
        

        
            
        <select defaultValue='Select' onChange={handleChangeCont}>
            <option disabled={true}>Select</option>
            <option value='south america'>South America</option>
            <option value='north america'>North America</option>
            <option value='africa'>Africa</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
            <option value='antarctica'>Antarctica</option>
        </select>
        

        <select defaultValue='Select' onChange={handleChangeActivity}>
            <option disabled={true}>Select</option>
            {activities.length !== 0 && 
                activities.map(el => (
                    <option key={el.id} value={el.name}>{el.name.charAt(0).toUpperCase() + el.name.slice(1)}</option>
                ))
            }
        </select>        
    </div>
  )
}

export default Filtros