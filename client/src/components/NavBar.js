import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css'

function NavBar() {

  return (
    <div className={styles.container}>
        <a className={styles.country} href={'/home'}>Country App</a>
        <Link className={styles.btn} to={'/home/create'}>Create Activity</Link>
    </div>
  )
}

export default NavBar