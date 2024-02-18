import styles from "./City.module.css";
import formatDate from '../helpers/helpers'
import { useParams} from "react-router";
import { useSearchParams } from 'react-router-dom'
import { useContext, useEffect,  } from "react";
import useFetch from '../hooks/useFetch'
import { CitiesContext } from "../context/CitiesContext";
import Button from "./Button";

import { useNavigate} from "react-router-dom";




const BASE_URL = 'http://localhost:8000'

// This is the template for when the city is called and to display all the city details

const City = () => {


// 1. get the id from the current city from when we click on this page
  const {id} = useParams();

  // use search params to get lat and lng
  let [searchParams, setSearchParams] = useSearchParams(); // only gets the queries
  const lat = searchParams.get('lat'); // get the lat query from the url
  const lng = searchParams.get('lng'); // get lng query from the url


  // 2. use useFetch hook to get the city
  const {data: city} = useFetch(`${BASE_URL}/cities/${id}`)

  // 3. get the city setter function from the context
  const {currentCity, setCurrentCity} = useContext(CitiesContext)

  // 4. set the current city with the data from the useFetch hook
  useEffect(() => {
    setCurrentCity(city)
  }, [setCurrentCity, city]);


const {cityName, emoji, date, notes,} = currentCity;


const navigate = useNavigate();

function backOne(){
  navigate(-1)
}


if(currentCity)
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
       <Button selected="back" onClick={backOne}>Back</Button>
      </div>
    </div>
  );
}

export default City;
