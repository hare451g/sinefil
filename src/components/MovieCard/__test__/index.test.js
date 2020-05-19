import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import MovieCard from '../index';
import mockMovie from '../../../__mock__/movie';

describe('Movie Card Component', () => {
  const { title, poster, tmdbID } = mockMovie;

  it('Should render movie title correctly', () => {
    const { getByTestId } = render(
      <MovieCard title={title} poster={poster} tmdbID={tmdbID} />,
    );
    const movieTitleLabel = getByTestId(`movie-title-${tmdbID}`);
    const renderedTitle = movieTitleLabel.innerHTML;

    expect(renderedTitle).toBe(title);
  });

  it('Should render movie poster correctly', () => {
    const { getByTestId } = render(
      <MovieCard title={title} poster={poster} tmdbID={tmdbID} />,
    );
    const moviePoster = getByTestId(`movie-poster-${tmdbID}`);
    expect(moviePoster).toHaveStyle(`background-image: url(${poster})`);
  });
});
