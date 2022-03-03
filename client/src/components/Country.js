import React from 'react'
import { Link } from 'react-router-dom'

function Country({currentCountrys}) {
  return (
    <div>
        {(currentCountrys.map(el => {
        return (
            <li key={el.id}>
            <img src={el.image} alt={`${el.name} Flag`}/>
            <Link to={`/home/country/${el.name.toLowerCase()}`}>{el.name}</Link>
            <h4>{el.continent}</h4>
            </li>
        )
        }))}
    </div>
  )
}

export default Country