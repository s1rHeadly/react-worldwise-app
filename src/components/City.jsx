import styles from "./City.module.css";
import { useNavigate } from "react-router-dom";
import formatDate from '../helpers/helpers';
import { useParams} from "react-router";
import { useSearchParams } from 'react-router-dom'
import { useContext } from "react";
import { CitiesContext } from "../context/CitiesContext";
import { useEffect } from "react";
import Spinner from "./Spinner";
import Button from "./Button";



// This is the template for when the city is called and to display all the city details

const City = () => {


  const {id} = useParams();

  let [searchParams, setSearchParams] = useSearchParams(); // only gets the queries
  const lat = searchParams.get('lat'); // get the lat query from the url
  const lng = searchParams.get('lng'); // get lng query from the url

  const {getCity, currentCity, loading} = useContext(CitiesContext)


  useEffect(() => {
   getCity(id)
  }, [id]);


  const {cityName, emoji, notes, date} = currentCity

  const navigate = useNavigate()


  if(loading){
    return <Spinner />
  }

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
      <Button selected="back" onClick={() => navigate(-1)}>Go back</Button>
      </div>
    </div>
  );
}

export default City;
