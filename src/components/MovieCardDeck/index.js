import React from 'react';
import MovieCard from '../MovieCard';
import { CardWrapper } from './styled';

function MovieCardDeck({ movies = [] }) {
  if (movies.length > 0) {
    return movies.map(({ title, poster, imdbID }) => (
      <CardWrapper data-testid={`card-${imdbID}`} key={`movie-${imdbID}`}>
        <MovieCard title={title} poster={poster} imdbID={imdbID} />
      </CardWrapper>
    ));
  } else {
    return <h3 data-testid="deck-empty-label">Movie collection is empty</h3>;
  }
}

export default MovieCardDeck;
