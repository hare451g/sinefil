import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import {
  render,
  waitForElement,
  store,
  fireEvent,
} from '../../../utils/testUtils';
import HomePage from '../index';

describe('Home Page Container', () => {
  it('should render loading content when mounted', () => {
    const { getByTestId } = render(<HomePage />);
    const loadingLabel = getByTestId('deck-loading-label');
    expect(loadingLabel.innerHTML).toEqual('loading contents...');
  });

  it('should render default card deck with default keyword', async () => {
    const { getAllByTestId, getByTestId } = render(<HomePage />);

    const elements = await waitForElement(() => ({
      posters: getAllByTestId(/movie-poster-/i),
      titles: getAllByTestId(/movie-title-/i),
      searchForm: getByTestId('search-form'),
    }));

    const moviesState = await store.getState('movies');
    expect(elements.searchForm.value).toEqual(moviesState.movies.search);
    expect(elements.posters.length).toEqual(moviesState.movies.list.length);
    expect(elements.titles.length).toEqual(moviesState.movies.list.length);
  });

  it('should retrieve movies with related keyword', async () => {
    const keyword = 'se7en';

    const { getAllByTestId, getByTestId } = render(<HomePage />);

    const elements = await waitForElement(() => ({
      searchForm: getByTestId('search-form'),
      searchButton: getByTestId('search-button'),
    }));

    // events
    fireEvent.change(elements.searchForm, { target: { value: keyword } });
    expect(elements.searchForm.value).toBe(keyword);

    fireEvent.click(elements.searchButton);

    const cards = await waitForElement(() => getAllByTestId(/card-tt/i));
    expect(cards.length).toEqual(store.getState().movies.list.length);
  });
});
