import { createContext, useState, useEffect } from "react";

import { BASE_URL } from "../helpers/helpers";




const CitiesContext = createContext()



function CitiesProvider({children}){



 const [cities, setCities] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);
 const [currentCity, setCurrentCity] = useState({})



// get cities
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



      // get city by ID and update the current city
      const getCity = async(id) => {
          setLoading(true)
           try {
            const response = await fetch(`${BASE_URL}/cities/${id}`)
            const data = await response.json();
            setCurrentCity(data)
           } catch (error) {
            setError(error)
            setLoading(true)
           }finally{
            setLoading(false)
          }
      }
   
      
 


  return(
    <CitiesContext.Provider value={{
      cities: cities,
      loading: loading,
      error: error,
      getCity: getCity,
      currentCity: currentCity
    }}>
      {children}
    </CitiesContext.Provider>
  )



}

export {CitiesContext, CitiesProvider}