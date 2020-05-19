import React from 'react';
import MovieCard from '../MovieCard';

function MovieCardDeck({ movies = [] }) {
  if (movies.length > 0) {
    return movies.map(({ title, poster, imdbID }) => (
      <div data-testid={`card-${imdbID}`} key={`movie-${imdbID}`}>
        <MovieCard title={title} poster={poster} imdbID={imdbID} />
      </div>
    ));
  } else {
    return (
      <div>
        <div>
          <h3 data-testid="deck-empty-label">Movie collection is empty</h3>
        </div>
      </div>
    );
  }
}

export default MovieCardDeck;
