import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css'

function NavBar() {

  return (
    <div className={styles.container}>
        <Link className={styles.country} to={'/home'}>Country App</Link>
        <Link className={styles.btn} to={'/home/create'}>Create Activity</Link>
    </div>
  )
}

export default NavBar