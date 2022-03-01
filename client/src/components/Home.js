import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../actions';
//import axios from 'axios';

function Home() {  
  
  //Montaje del componente
  useEffect(() => {
    // const apiCall = async () => {
    //   await dispatch(getCountries())
    // }
    // apiCall();
    dispatch(getCountries())
  }, [])
  
  const countries = useSelector(state => state.countries)
  const dispatch = useDispatch();
  
  //Paginado
  const itemsPerPage = 10;
  const itemsToShow = countries.length / itemsPerPage
  const [currentPage, setCurrentPage] = useState(1)
  const [firstIndex, setFirstIndex] = useState(0)

  function handleNextPage(){
    if(currentPage === itemsToShow) return
    setFirstIndex((prevState)=> (prevState + 1) * itemsPerPage)
    setCurrentPage((prevState)=> prevState + 1)
  }

  function handlePrevPage(){
    if(currentPage === 1) return
    setFirstIndex((prevState)=> (prevState - 1) * itemsPerPage)
    setCurrentPage((prevState)=> prevState - 1)
  }

  console.log(countries)

  return (
    <div>
      <input type='text' placeholder='Ingrese un país...'/>
      {countries.length > 0 
        ? [...countries]?.splice(firstIndex,itemsPerPage)?.map(el => (
          <li key={el.id}>
            <h2>{el.name}</h2>
          </li>
        ))
        : <h2>Cargando... espere un momento</h2>
      }
      <h3>Page: {currentPage}</h3>
      <button onClick={handlePrevPage}>Retroceder Pagina</button>
      <button onClick={handleNextPage}>Avanzar Pagina</button>
    </div>
  )
}

export default Home