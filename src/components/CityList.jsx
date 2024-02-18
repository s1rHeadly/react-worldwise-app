import { useContext } from 'react';
import styles from './CityList.module.css';
import Spinner from './Spinner';
import CityItem from './CityItem';
import Message from './Message';
import { CitiesContext } from '../context/CitiesContext';


const CityList = () => {

// importing the Cities Context
 const {cities, loading} =  useContext(CitiesContext)

// if is loading...
if(loading){
  return <Spinner />
}



// if there are no list items
if(!loading && cities.length < 1){
  return <Message message="Add a city by clicking on the map"/>
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