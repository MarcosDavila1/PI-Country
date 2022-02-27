import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../actions';
//import axios from 'axios';

function Home() {

  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries)
  
  useEffect(() => {
    const apiCall = async () => {
      await dispatch(getCountries())
  }
  apiCall();
  }, [])

  console.log(countries)
  
  return (
    <div>
      <input type='text' placeholder='Ingrese un país...'/>
    </div>
  )
}

export default Home