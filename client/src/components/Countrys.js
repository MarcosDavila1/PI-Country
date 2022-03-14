import React from 'react'
import Country from './Country'
import Loading from './Loading'
import styles from '../styles/countrys.module.css'

function Countrys({currentCountrys}) {
  return (
    <div className={styles.container}>
        {currentCountrys.length
            ? <Country currentCountrys={currentCountrys}/> 
            : <Loading />
        }
    </div>
  )
}

export default Countrys