import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
        <h1>Bienvenidos a la mejor app</h1>
        <Link to={'/home'}>Ingresar</Link>
    </div>
  )
}

export default LandingPage