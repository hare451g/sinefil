import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Ratings from '../index';

describe('Movie Card Component', () => {
  const mockRatings = [
    {
      label: 'Internet Movie Database',
      value: '8.6 / 10',
    },
    {
      label: 'Internet Movie Database',
      value: '81%',
    },
    {
      label: 'Metacritic',
      value: '65 / 100',
    },
  ];

  it(
    'Should render without error' +
      ' and render Movie is not yet rated if there is no ratings provided',
    () => {
      const { getByTestId } = render(<Ratings />);
      const contents = getByTestId('rating-empty-label');
      expect(contents.innerHTML).toEqual('Movie is not yet rated');
    },
  );

  it('should render provided ratings keypair', () => {
    const { getAllByTestId } = render(<Ratings ratings={mockRatings} />);
    const contents = getAllByTestId(/rating-item-/i);

    expect(contents.length).toEqual(mockRatings.length);
    contents.forEach((content, index) => {
      expect(content.children).toMatchSnapshot(`
        <div>${mockRatings[index].label}</div>
        <div>${mockRatings[index].value}</div>
    `);
    });
  });
});
