import React from 'react';
import Movie from '../movie/movie';

const MovieList = (props) => {
  console.log('MovieList - props - ', props);
  const { title, movies, className, showMore } = props;

  return (
   <div className={ className }>
     <h3>{ title }</h3>
     {
       movies.map( movie => {
          return (<Movie
            original_title={movie.original_title}
            backdrop_path={movie.backdrop_path}
            key={movie.id}
            genre_ids={movie.genre_ids}
            adult={movie.adult}
            original_language={movie.original_language}
            poster_path={movie.poster_path}
            popularity={movie.popularity}
            release_date={ movie.release_date }
            title={ movie.title }
            video={ movie.video }
            vote_average={ movie.vote_average }
            vote_count={ movie.vote_count }
            overview={ movie.overview }
            showMore={ showMore }
            isShowLess={ false }
          />)
         }

       )
     }
   </div>
  )
};

export default MovieList;