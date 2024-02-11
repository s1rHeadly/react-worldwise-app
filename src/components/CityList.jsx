import styles from './CityList.module.css';
import Spinner from './Spinner';
import CityItem from './CityItem';



const CityList = ({cities, isLoading, hasError}) => {

// if is loading...
if(isLoading){
  return <Spinner />
}



// if we have an error...
if(!isLoading && cities.length < 0){
  return <p>An `${hasError}` as occured</p>
}



// finally just return the list
return(
    <ul className={styles.cityList}>
       {cities?.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  ) 



}

export default CityList