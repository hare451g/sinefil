import React from 'react';

// styled-components
import { Card, MoviePoster, MovieTitle } from './styled';

function MovieCard({ title, poster, imdbID }) {
  return (
    <Card>
      <MoviePoster
        poster={poster}
        alt={title}
        data-testid={`movie-poster-${imdbID}`}
        role="img"
      />
      <MovieTitle data-testid={`movie-title-${imdbID}`}>{title}</MovieTitle>
    </Card>
  );
}

export default MovieCard;
