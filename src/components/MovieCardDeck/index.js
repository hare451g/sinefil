import React from 'react';
import MovieCard from '../MovieCard';
import { CardWrapper } from './styled';

function MovieCardDeck({ movies = [], isLoading, error = null }) {
  return (
    <>
      {movies.length > 0
        ? movies.map(({ title, poster, imdbID }) => (
            <CardWrapper data-testid={`card-${imdbID}`} key={`movie-${imdbID}`}>
              <MovieCard title={title} poster={poster} imdbID={imdbID} />
            </CardWrapper>
          ))
        : !isLoading &&
          !error && (
            <h3 data-testid="deck-empty-label">Movie collection is empty</h3>
          )}
      {isLoading && (
        <div data-testid="deck-loading-label">loading contents...</div>
      )}
      {error && <div data-testid="deck-error-label">{error}</div>}
    </>
  );
}

export default MovieCardDeck;
