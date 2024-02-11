import { useState, useEffect } from "react";


const useFetchCities = (url) => { // need this url placeholder to put into where the fetch hook is being called


 const [cities, setCities] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);



//fetch for local url => move later to a hook
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
      citiesData(url)
 
 }, [url]);


 return {cities, loading, error}
}


export default useFetchCities;
