import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <div>
        <Link to={'/home'}>Country App</Link>
        <Link to={'/home/create'}>Create Activity</Link>
    </div>
  )
}

export default NavBar