import React from 'react';
import Movie from '../movie/movie';

const MovieList = (props) => {
  const { title, movies, className, showMore, handleLikeDislike, overview_text } = props;

  return (
   <div className={ className }>
     <h3>{ title }</h3>
     {
       movies.map( movie => {
          return (<Movie
            original_title={movie.original_title}
            key={movie.id}
            genres={movie.genres}
            adult={movie.adult}
            original_language={movie.original_language}
            poster_path={movie.poster_path}
            popularity={movie.popularity}
            release_date={ movie.release_date }
            title={ movie.title }
            vote_average={ movie.vote_average }
            vote_count={ movie.vote_count }
            overview={ movie.overview }
            showMore={ showMore }
            isShowLess={ movie.isShowLess }
            handleLikeDislike={ handleLikeDislike }
            likes={ movie.likes }
            dislikes={ movie.dislikes }
            overview_text= { overview_text }
          />)
         }

       )
     }
   </div>
  )
};

export default MovieList;