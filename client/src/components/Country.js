import React from 'react'

function Country({currentCountrys}) {
  return (
    <div>
        {(currentCountrys.map(el => {
        return (
            <li key={el.id}>
            <img src={el.image} alt={`${el.name} Flag`}/>
            <h2>{el.name}</h2>
            <h4>{el.continent}</h4>
            </li>
        )
        }))}
    </div>
  )
}

export default Country