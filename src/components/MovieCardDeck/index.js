import React from 'react';
import MovieCard from '../MovieCard';
import { CardWrapper } from './styled';

function MovieCardDeck({ movies = [], isLoading }) {
  return (
    <>
      {movies.length > 0
        ? movies.map(({ title, poster, imdbID }) => (
            <CardWrapper data-testid={`card-${imdbID}`} key={`movie-${imdbID}`}>
              <MovieCard title={title} poster={poster} imdbID={imdbID} />
            </CardWrapper>
          ))
        : !isLoading && (
            <h3 data-testid="deck-empty-label">Movie collection is empty</h3>
          )}
      {isLoading && (
        <div data-testid="deck-loading-label">loading contents...</div>
      )}
    </>
  );
}

export default MovieCardDeck;
