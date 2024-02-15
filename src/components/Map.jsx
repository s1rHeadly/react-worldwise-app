import styles from './Map.module.css'
import { useSearchParams } from 'react-router-dom'

const Map = () => {

  
  let [searchParams, setSearchParams] = useSearchParams(); // only gets the queries
  const lat = searchParams.get('lat'); // get the lat query from the url
  const lng = searchParams.get('lng'); // get lng query from the url
  
  return (
    <div className={styles.mapContainer}>Map

          <span>{lat}</span>
          <span>{lng}</span>
    </div>
  )
}

export default Map