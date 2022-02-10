import React from 'react'
import MovieCard from '../MovieCard/MovieCard.js';
import './MovieList.css';

const MovieList = ({Movies}) => {
  return (
    <div className="display">
      {
      Movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
    }
    </div>
  )
}

export default MovieList