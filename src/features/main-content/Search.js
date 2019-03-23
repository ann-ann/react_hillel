import React, {Component} from 'react';


const Search = (props) => {
  const {value, handeSearch} = props;


    return(
      <input placeholder="Search:" type="text" value={value} onChange={handeSearch}/>
    );

}

export default Search;
