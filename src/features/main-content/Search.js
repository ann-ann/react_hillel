import React, {Component} from 'react';
import styles from './Search.module.css';

const Search = (props) => {
  const {value, handeSearch, weatherResponse, weatherImage} = props;
    return(
      <div class={styles.weatherBlock}>
        <h5>Weather Search</h5>
        <input placeholder="Enter 3 symbols to Search:" type="text" value={value} onChange={handeSearch}/>
        <div id="weather-data" class={styles.getWeather}>
          { weatherImage }
          { weatherResponse }
        </div>
      </div>
    );
}

export default Search;
