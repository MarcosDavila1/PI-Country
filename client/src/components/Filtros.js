import React from 'react'

function Filtros({handleChangeAlph, handleChangePopulation, handleChangeCont}) { 

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
        

        <li>
            Filter by Tourists Activities
        </li>        
    </div>
  )
}

export default Filtros