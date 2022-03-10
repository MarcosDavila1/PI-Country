import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, sortByAlph, sortByPopulation, sortByContinent, sortByActivity } from '../actions';
import Countrys from './Countrys';
import Filtros from './Filtros';
import Paged from './Paged';
import styles from '../styles/home.module.css'

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

  //CSS CLASS PAGINA ACTUAL
  function handleSelect(id){
    const btns = document.getElementsByTagName('button')
    for(const btn of btns){
        btn.classList.remove('active')
        btn.classList.add('btn')
    }
    const elem = document.getElementById(id)
    elem.className = 'active'
}

  //FILTROS
  function handleChangeAlph(e) {
    const value = e.target.value;
    if (value === 'asc' || value === 'desc') {
      dispatch(sortByAlph(value))
      setCurrentPage(1)
      handleSelect('paged0')
    }
  }

  function handleChangePopulation(e) {
    const value = e.target.value;
    if (value === 'asc' || value === 'desc') {
      dispatch(sortByPopulation(value))
      setCurrentPage(1)
      handleSelect('paged0')
    }
  }

  function handleChangeCont(e) {
    const value = e.target.value;
    if(typeof value === 'string'){
      dispatch(sortByContinent(value))
      setCurrentPage(1)
      handleSelect('paged0')
    }
  }

  function handleChangeActivity(e) {
    const value = e.target.value;
    if(typeof value === 'string'){
      dispatch(sortByActivity(value))
      setCurrentPage(1)
      handleSelect('paged0')
    }
  }

  // COMPONENTE

  if(countries.length < 1){
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <Filtros 
          handleChangeAlph={handleChangeAlph}
          handleChangePopulation={handleChangePopulation}
          handleChangeCont={handleChangeCont}
          handleChangeActivity={handleChangeActivity}
        />

        <Paged 
          itemsPerPage={itemsPerPage}
          countries={countries.length}
          paged={paged}
          handleSelect={handleSelect}
        />

        <Countrys 
          currentCountrys={currentCountrys}
        />

        {/* <Paged 
          itemsPerPage={itemsPerPage}
          countries={countries.length}
          paged={paged}
        /> */}

      </div>
    )
  }
}

export default Home