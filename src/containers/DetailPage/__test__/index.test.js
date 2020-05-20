import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, store } from '../../../utils/testUtils';
import DetailPage from '../index';

describe('Home Page Container', () => {
  const imdbID = 'tt0114369';

  it('should render loading content when mounted', () => {
    const { getByTestId } = render(<DetailPage id={imdbID} />);
    const loadingLabel = getByTestId('details-loading-label');
    expect(loadingLabel.innerHTML).toEqual('Loading movie details . . .');
  });

  it('should notify error when error occurred', async () => {
    const { findByText } = render(<DetailPage />);

    expect(
      await findByText(/please make sure your url is correct/i),
    ).toBeInTheDocument();
  });

  it('should render movie information', async () => {
    const { findByText } = render(<DetailPage id={imdbID} />);
    const state = store.getState().details;
    expect(await findByText(state.details.title)).toBeInTheDocument();
    expect(await findByText(state.details.plot)).toBeInTheDocument();
  });
});
