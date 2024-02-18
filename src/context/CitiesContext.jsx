import { createContext, useState, useEffect } from "react";
import useFetch from '../hooks/useFetch' // import the useFetch hook


const BASE_URL = 'http://localhost:8000';



const CitiesContext = createContext();



function CitiesProvider({children}){

    const {data: cities, loading, error} = useFetch(`${BASE_URL}/cities`)
    const [currentCity, setCurrentCity] = useState({});
    

  
   
  


    return(
      <CitiesContext.Provider value={{
          cities: cities,
          loading: loading,
          error: error,
          currentCity: currentCity,
          setCurrentCity: setCurrentCity,
      }}>

        {children}
      </CitiesContext.Provider>
    )
}

export {CitiesContext, CitiesProvider}

