import React from 'react';
import styles from './Weather.module.css';

const Weather = (props) => {
  const {weatherResponse, weatherImage} = props;

  return(
    <div className={styles.getWeather}>
      { weatherImage }
      { weatherResponse }
    </div>
  );
}

export default Weather;
