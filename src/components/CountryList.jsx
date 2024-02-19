import styles from './CountryList.module.css';
import Spinner from './Spinner';
import CountryItem from './CountryItem';
import Message from './Message';
import { useContext } from 'react';
import { CitiesContext } from '../context/CitiesContext';


const CountryList = () => {

  const {cities, loading: isLoading} = useContext(CitiesContext)


// if is loading...
if(isLoading){
  return <Spinner />
}


// if we have an error...
if(!isLoading && cities.length < 1){
  return <Message message="Add a city by clicking on the map"/>
}


// derived state stripping out multple of the same country
const countriesUnique = new Set(
  cities.map(city =>
    JSON.stringify({ country: city.country, emoji: city.emoji }),
  ),
)

const countries = [...countriesUnique].map(each => JSON.parse(each))


return(
  <ul className={styles.countryList}>

      {countries.map(country => {
        return <CountryItem country={country} key={country.emoji} />
      })}
</ul>
  ) 



}

export default CountryList