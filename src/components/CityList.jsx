import styles from './CityList.module.css';
import Spinner from './Spinner';
import CityItem from './CityItem';
import Message from './Message'


const CityList = ({cities, isLoading}) => {

// if is loading...
if(isLoading){
  return <Spinner />
}



// if we have an error...
if(!isLoading && cities.length < 1){
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