import { createContext, useState, useEffect } from "react";
import useFetch from '../hooks/useFetch' // import the useFetch hook


const BASE_URL = 'http://localhost:8000';



const CitiesContext = createContext();



function CitiesProvider({children}){


    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentCity, setCurrentCity] = useState({});
    


    useEffect(() => {
      const citiesData = async(url) => {
        setLoading(true)
        try {
          const response = await fetch(url);
          if(!response.ok) return
          
          if(response.status === 200){
            const data = await response.json();
            setCities(data)
            
          }
        
        } catch (error) {
          setError(error)
          setLoading(true)
        }finally{
          setLoading(false)
        }
      }

      citiesData(`${BASE_URL}/cities`)

    }, []);

  
   
  


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

