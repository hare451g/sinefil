import React from 'react';
import MovieCard from '../MovieCard';
import { Deck, CardWrapper } from './styled';

function MovieCardDeck({ movies = [] }) {
  if (movies.length > 0) {
    return (
      <Deck>
        {movies.map(({ title, poster, imdbID }) => (
          <CardWrapper data-testid={`card-${imdbID}`} key={`movie-${imdbID}`}>
            <MovieCard title={title} poster={poster} imdbID={imdbID} />
          </CardWrapper>
        ))}
      </Deck>
    );
  } else {
    return (
      <Deck>
        <h3 data-testid="deck-empty-label">Movie collection is empty</h3>
      </Deck>
    );
  }
}

export default MovieCardDeck;
