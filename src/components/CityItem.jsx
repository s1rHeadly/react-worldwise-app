import React from 'react';
import styles from './CityItem.module.css';
import formatDate from '../helpers/helpers'

const CityItem = ({city}) => {
  const {cityName, country, emoji, date} = city;

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
    </li>
  )
}

export default CityItem