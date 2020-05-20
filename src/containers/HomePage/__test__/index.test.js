import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, waitForElement, store } from '../../../utils/testUtils';
import HomePage from '../index';

describe('Home Page Container', () => {
  it('should render empty card deck', () => {
    const { getByTestId } = render(<HomePage />);
    const emptyLabel = getByTestId('deck-empty-label');
    expect(emptyLabel.innerHTML).toEqual('Movie collection is empty');
  });

  it('should render default card deck with default keyword', async () => {
    const { getAllByTestId } = render(<HomePage />);

    const elements = await waitForElement(() => ({
      posters: getAllByTestId(/movie-poster-/i),
      titles: getAllByTestId(/movie-title-/i),
    }));

    const moviesState = await store.getState('movies');

    expect(elements.posters.length).toEqual(moviesState.movies.list.length);
    expect(elements.titles.length).toEqual(moviesState.movies.list.length);
  });
});
