import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import HomePage from '../index';
import { createStore } from 'redux';
import movieReducer, { initialState } from '../../../store/movies';

describe('Home Page Container', () => {
  const mockStore = createStore(movieReducer, { movies: initialState });

  it('it should render empty card deck', () => {
    const { getByTestId, getAllByTestId } = render(
      <ReduxProvider store={mockStore}>
        <HomePage />
      </ReduxProvider>,
    );

    const emptyLabel = getByTestId('deck-empty-label');
    expect(emptyLabel.innerHTML).toBe('Movie collection is empty');
  });
});
