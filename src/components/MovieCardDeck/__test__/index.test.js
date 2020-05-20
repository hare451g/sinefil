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

  it('Should render empty lists text when array of movie is empty', () => {
    const { getByTestId } = render(<MovieCardDeck movies={[]} />);

    const emptyLabel = getByTestId('deck-empty-label');

    expect(emptyLabel.innerHTML).toBe('Movie collection is empty');
  });

  it('should render loading label when loading', () => {
    const { getByTestId } = render(<MovieCardDeck isLoading />);
    const loadingLabel = getByTestId('deck-loading-label');
    expect(loadingLabel.innerHTML).toEqual('loading contents...');
  });

  it('should render error messages when error occured', () => {
    const errorMessage = 'Keyword is required';
    const { getByTestId } = render(<MovieCardDeck error={errorMessage} />);
    const errorLabel = getByTestId('deck-error-label');
    expect(errorLabel.innerHTML).toEqual(errorMessage);
  });
});
