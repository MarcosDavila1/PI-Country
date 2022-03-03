import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component={LandingPage} /> 
      <Route exact path={'/home'} component={Home}/>
      <Route exact path={'/home/country/:name'} component={CountryDetail}/>
    </div>
  );
}

export default App;
