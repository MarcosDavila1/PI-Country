import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import CountryDetail from './components/CountryDetail';
import CreateActivity from './components/CreateActivity';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Route path={'/home'} component={NavBar}/>
      <Route exact path={'/'} component={LandingPage} /> 
      <Route exact path={'/home'} component={SearchBar}/>
      <Route exact path={'/home'} component={Home}/>
      <Route exact path={'/home/country/:name'} component={CountryDetail}/>
      <Route exact path={'/home/create'} component={CreateActivity}/>
    </div>
  );
}

export default App;
