import React from 'react';

// styled-components
import { Card, MoviePoster, MovieTitle } from './styled';

function MovieCard({ title, poster }) {
  return (
    <Card>
      <MoviePoster
        poster={poster}
        alt={title}
        data-testid="movie-poster"
        role="img"
      />
      <MovieTitle data-testid="movie-title">{title}</MovieTitle>
    </Card>
  );
}

export default MovieCard;
