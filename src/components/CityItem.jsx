import styles from './CityItem.module.css';
import formatDate from '../helpers/helpers';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CitiesContext } from '../context/CitiesContext';

const CityItem = ({city}) => {

  const {cityName, emoji, date, id, position} = city;
  const {currentCity} = useContext(CitiesContext)

  return (
    <li>
      <Link
      to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      className={`${styles.cityItem} ${currentCity.id === id ? styles['cityItem--active'] : ""}`}
      >
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  )
}

export default CityItem