import styles from './Map.module.css'
import { useSearchParams, useNavigate } from 'react-router-dom';




const Map = () => {

  const navigate = useNavigate();

  let [searchParams, setSearchParams] = useSearchParams(); // only gets the queries
  const lat = searchParams.get('lat'); // get the lat query from the url
  const lng = searchParams.get('lng'); // get lng query from the url
  

  function resetSearch(){
   setSearchParams({ 
    lat: 20,
    lng:20
   })
  }
  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
            <h1>Map</h1>
          <span>{lat}</span>
          <span>{lng}</span>

         {lat && lng && <button onClick={resetSearch}>Reset</button>}
    </div>
  )
}

export default Map