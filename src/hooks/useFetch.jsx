import { useState, useEffect } from "react";


const useFetchCities = (url) => { // need this url placeholder to put into where the fetch hook is being called


 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);



//fetch for local url => move later to a hook
 useEffect(() => {
      const getData = async(url) => {
        setLoading(true)
        try {
          const response = await fetch(url);
          if(!response.ok) return
          
          if(response.status === 200){
            const results = await response.json();
            setData(results)
          }
        
        } catch (error) {
          setError(error)
          setLoading(true)
        }finally{
          setLoading(false)
        }
      }
      getData(url)
 
 }, [url]);


 return {data, loading, error}
}


export default useFetchCities;
