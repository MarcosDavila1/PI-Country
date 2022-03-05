import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/country.module.css'

function Country({currentCountrys}) {
  return (
    <div className={styles.container}>
        {(currentCountrys.map(el => {
        return (
            <li className={styles.content} key={el.id}>
              <img src={el.image} alt={`${el.name} Flag`}/>
              <Link className={styles.link} to={`/home/country/${el.name.toLowerCase()}`}>{el.name}</Link>
              <h4>{el.continent}</h4>
            </li>
        )
        }))}
    </div>
  )
}

export default Country