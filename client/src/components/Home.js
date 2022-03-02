import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, sortByAlph } from '../actions';
import Countrys from './Countrys';
import Filtros from './Filtros';
import NavBar from './NavBar';
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
    dispatch(sortByAlph(e.target.value))
    setCurrentPage(()=> 0)
    setTimeout(() => {
      setCurrentPage(()=> 1)
    }, 1);
  }

  function handleChangePopu(e) {
    console.log(e.target.value)
  }

  function handleChangeCont(e) {
      console.log(e.target.value)
  }

  if(countries.length < 1){
    return (
      <h1>Cargando espere</h1>
    )
  } else {
    return (
      <div>
        <NavBar/>
        <Filtros 
          handleChangeAlph={handleChangeAlph}
          handleChangePopu={handleChangePopu}
          handleChangeCont={handleChangeCont}
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