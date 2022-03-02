import React from 'react'

function Filtros({handleChangeAlph, handleChangePopu, handleChangeCont}) { 

  return (
    <div>
        <ul>
            <li>
            Alphabetically Sort
            <select defaultValue='Select' onChange={(e)=> handleChangeAlph(e)}>
                <option disabled={true}>Select</option>
                <option value='asc'>A-Z</option>
                <option value='desc'>Z-A</option>
            </select>
            </li>

            <li>
            Population Sort
            <select defaultValue='Select' onChange={handleChangePopu}>
                <option disabled={true}>Select</option>
                <option value='asc'>Ascendant</option>
                <option value='desc'>Descendant</option>
            </select>
            </li>

            <li>
                Filter by Continent
                <select defaultValue='Select' onChange={handleChangeCont}>
                    <option disabled={true}>Select</option>
                    <option value='america'>America</option>
                    <option value='africa'>Africa</option>
                    <option value='asia'>Asia</option>
                    <option value='europe'>Europe</option>
                    <option value='oceania'>Oceania</option>
                </select>
            </li>

            <li>
                Filter by Tourists Activities
            </li>
        </ul>
    </div>
  )
}

export default Filtros