import React from 'react'
import Country from './Country'
import styles from '../styles/countrys.module.css'

function Countrys({currentCountrys}) {
  return (
    <div className={styles.container}>
        {currentCountrys.length
            ? <Country currentCountrys={currentCountrys}/> 
            : <h2>Cargando... espere un momento</h2>
        }
    </div>
  )
}

export default Countrys