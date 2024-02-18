import { createContext } from "react";
import useFetch from '../hooks/useFetch' // import the useFetch hook


const BASE_URL = 'http://localhost:8000';


const CitiesContext = createContext();



function CitiesProvider({children}){

    // fetch hook for cities => see useFetchCties file
    const {data: cities, loading, error} = useFetch(`${BASE_URL}/cities`);  


    return(
      <CitiesContext.Provider value={{
          cities: cities,
          loading: loading,
          error: error
      }}>

        {children}
      </CitiesContext.Provider>
    )
}

export {CitiesContext, CitiesProvider}

