import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import { movieLists } from '../../../__mock__/movieLists';

import MovieCardDeck from '../index';

describe('Movie Card Component', () => {
  it('Should render movie cards correctly', () => {
    const { getByTestId } = render(<MovieCardDeck movies={movieLists} />);

    const cardElements = movieLists.map((movie) => ({
      titleElement: getByTestId(`movie-title-${movie.imdbID}`),
      posterElement: getByTestId(`movie-poster-${movie.imdbID}`),
      id: movie.imdbID,
    }));

    cardElements.forEach((card) => {
      const cardTitle = card.titleElement.innerHTML;

      const selectedMovie = movieLists.find(
        (movie) => movie.imdbID === card.id,
      );

      expect(cardTitle).toBe(selectedMovie.title);
      expect(card.posterElement).toHaveStyle(
        `background-image: url(${selectedMovie.poster})`,
      );
    });
  });
});
