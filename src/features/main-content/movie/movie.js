import React from 'react';
import '../school/school-component.css';
import Button from '../../../global/button'

const Movie = (props) => {

  const { original_title, genres, adult, original_language, poster_path, overview, handleLikeDislike,
          popularity, release_date, title, vote_average, vote_count, isShowLess, showMore, likes, dislikes, overview_text } = props;

  return (
    <div className='clearfix description-wrapper'>
      <div className='container stadies-wraper clearfix' >
        <img src={ 'https://image.tmdb.org/t/p/w500/' + poster_path } alt='logo' className='index-logo'/>
        <h3>{ original_title }</h3>
          <div className='like-wrapper'>
            <span className='like-wrapper_good'>
              <i className="fa fa-thumbs-up likes-marker" onClick={ handleLikeDislike.bind(null, title, 'likes') }></i>
              <span className='likes-quantity'>{ likes }</span>
            </span>
            <span className='like-wrapper_bad'>
              <i className='fa fa-thumbs-down likes-marker' onClick={ handleLikeDislike.bind(null, title, 'dislikes') }></i>
              <span className='likes-quantity'>{ dislikes }</span>
            </span>
          </div>
        <div className='clearfix description-wrapper'>
          <Button
            onClick={ showMore.bind(null, title) }
            btnClass='btn btn-info float-right' >
            { isShowLess ? 'show more' : 'X'}
          </Button>

          <div className={ 'description-wrapper_text ' + (isShowLess ? 'hide' : 'show') } >
            <div className="movie_data">
              <div className="release_date"><b>Release date:</b> { release_date }</div>
              <div><b>Vote:</b> { vote_average }, <b>Vote count:</b> { vote_count }</div>
              <div><b>Adult:</b> { adult ? 'Yes' : 'No' }</div>
              <div><b>Genre:</b> { genres.join(', ') }</div>
              <div><b>Original Language:</b> { original_language }</div>
              <div><b>Popularity:</b> { popularity }</div>
            </div>
            <h4>{ overview_text }</h4>
            <div className="overview">{ overview }</div>

          </div>

        </div>
        <button className='btn btn-primary'>some buttton</button>
      </div>
    </div>
  )
};

export default Movie;
