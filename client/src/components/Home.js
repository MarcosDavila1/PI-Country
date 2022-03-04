import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, sortByAlph, sortByPopulation, sortByContinent, sortByActivity } from '../actions';
import Countrys from './Countrys';
import Filtros from './Filtros';
import Paged from './Paged';

function Home() {  
  const countries = useSelector(state => state.countries)
  const dispatch = useDispatch();  
  
  //PAGINADO
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1)
  const lastCountry = currentPage * itemsPerPage; // 1 * 10 = 10
  const firstCountry = lastCountry - itemsPerPage; // 10 - 10 = 0
  const currentCountrys = countries.slice(firstCountry,lastCountry);

  const paged = (page)=>{
    setCurrentPage(page)
  }

  //MONTAJE DEL COMPONENTE
  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  //FILTROS
  function handleChangeAlph(e) {
    const value = e.target.value;
    if (value === 'asc' || value === 'desc') {
      dispatch(sortByAlph(value))
    }
  }

  function handleChangePopulation(e) {
    const value = e.target.value;
    if (value === 'asc' || value === 'desc') {
      dispatch(sortByPopulation(value))
    }
  }

  function handleChangeCont(e) {
    const value = e.target.value;
    if(typeof value === 'string'){
      dispatch(sortByContinent(value))
    }
  }

  function handleChangeActivity(e) {
    const value = e.target.value;
    if(typeof value === 'string'){
      dispatch(sortByActivity(value))
    }
  }

  // COMPONENTE

  if(countries.length < 1){
    return (
      <h1>Cargando espere</h1>
    )
  } else {
    return (
      <div>
        <Filtros 
          handleChangeAlph={handleChangeAlph}
          handleChangePopulation={handleChangePopulation}
          handleChangeCont={handleChangeCont}
          handleChangeActivity={handleChangeActivity}
        />

        <Countrys 
          currentCountrys={currentCountrys}
        />

        <Paged 
          itemsPerPage={itemsPerPage}
          countries={countries.length}
          paged={paged}
        />

      </div>
    )
  }
}

export default Home