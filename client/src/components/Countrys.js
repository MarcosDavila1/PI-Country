import React from 'react'
import Country from './Country'

function Countrys({currentCountrys}) {
  return (
    <div>
        {currentCountrys.length
            ? <Country currentCountrys={currentCountrys}/> 
            : <h2>Cargando... espere un momento</h2>
        }
    </div>
  )
}

export default Countrys