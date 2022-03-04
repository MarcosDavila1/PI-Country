import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <div>
        <a href={'/home'}>Country App</a>
        <Link to={'/home/create'}>Create Activity</Link>
    </div>
  )
}

export default NavBar