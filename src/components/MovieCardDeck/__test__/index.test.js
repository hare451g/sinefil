import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, fireEvent } from '@testing-library/react';
import { movieLists, movieListPage2 } from '../../../__mock__/movieLists';

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

  it('should render loadmore button when next page is available', () => {
    const words = 'load more';
    const { getByTestId } = render(<MovieCardDeck isNextPageAvailable />);
    const buttonLabel = getByTestId('deck-loadmore-label');
    expect(buttonLabel.innerHTML).toEqual(words);
  });

  it('should append new array when next button clicked', () => {
    let movies = movieLists;
    const mockOnLoadMoreClicked = jest.fn(() => {
      movies = [...movies, ...movieListPage2];
    });

    const { getByTestId, rerender, getAllByTestId } = render(
      <MovieCardDeck
        movies={movieLists}
        isNextPageAvailable
        onNextPageClick={mockOnLoadMoreClicked}
      />,
    );
    const buttonLabel = getByTestId('deck-loadmore-label');

    fireEvent.click(buttonLabel);

    rerender(<MovieCardDeck movies={movies} isNextPageAvailable />);

    const cards = getAllByTestId(/movie-title-/i);
    expect(cards.length).toEqual(movies.length);
  });
});
