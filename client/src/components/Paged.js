import React from 'react'
import styles from '../styles/paged.module.css'

function Paged({itemsPerPage, countries, paged}) {

    const pageNumber = [];

    for (let i = 0; i <= Math.ceil(countries/itemsPerPage)-1; i++) {
        pageNumber.push(i+1);
        
    }

    return (
    <nav className={styles.container}>
        <ul className={styles.ul}>
            {
            pageNumber?.map(n =>(
                <button className={styles.btn} onClick={()=>paged(n)} key={n}>{n}</button>
            ))
            }
        </ul>
    </nav>
    )
}

export default Paged