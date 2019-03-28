import React from 'react';
import styles from './Search.module.css';

const Search = (props) => {
  const {value, handeSearch, searchResults} = props;

  return(
    <div className={styles.searchBlock + ' container'}>
      <h5>Weather Search</h5>
      <input placeholder="Enter 3 symbols to Search:" type="text" value={value} onChange={handeSearch}/>
      { searchResults }
    </div>
  );
}

export default Search;
