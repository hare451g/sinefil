import React from 'react';
import MovieCard from '../MovieCard';

function MovieCardDeck({ movies = [] }) {
  return movies.map(({ title, poster, imdbID }) => (
    <div data-testid={`card-${imdbID}`} key={`movie-${imdbID}`}>
      <MovieCard title={title} poster={poster} imdbID={imdbID} />
    </div>
  ));
}

export default MovieCardDeck;
