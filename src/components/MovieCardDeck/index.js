import React from 'react';
import MovieCard from '../MovieCard';
import {
  CardWrapper,
  DeckWrapper,
  ControlWrapper,
  LoadMoreButton,
} from './styled';

function MovieCardDeck({
  movies = [],
  isLoading,
  error = null,
  onNextPageClick = () => {},
  isNextPageAvailable,
  onItemClick = (movie) => {},
}) {
  return (
    <>
      <DeckWrapper>
        {movies.length > 0
          ? movies.map(({ title, poster, imdbID }) => (
              <CardWrapper
                data-testid={`card-${imdbID}`}
                key={`movie-${imdbID}`}
                onClick={() => onItemClick({ title, poster, imdbID })}
              >
                <MovieCard title={title} poster={poster} imdbID={imdbID} />
              </CardWrapper>
            ))
          : !isLoading &&
            !error && (
              <h3 data-testid="deck-empty-label">Movie collection is empty</h3>
            )}
      </DeckWrapper>
      <ControlWrapper>
        {error ? (
          <div data-testid="deck-error-label">{error}</div>
        ) : isLoading ? (
          <div data-testid="deck-loading-label">loading contents...</div>
        ) : isNextPageAvailable ? (
          <LoadMoreButton
            data-testid="deck-loadmore-label"
            onClick={onNextPageClick}
          >
            load more
          </LoadMoreButton>
        ) : (
          <div />
        )}
      </ControlWrapper>
    </>
  );
}

export default MovieCardDeck;
