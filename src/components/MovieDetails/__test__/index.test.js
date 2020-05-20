import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import details from '../../../__mock__/details';

import MovieDetails from '../index';

describe('Movie Card Component', () => {
  it('should render invalid id notice if id is null', () => {
    const { getByText } = render(<MovieDetails />);
    expect(getByText('Invalid movie id')).toBeInTheDocument();
    expect(
      getByText(/please make sure your url is correct/i),
    ).toBeInTheDocument();
  });

  it(
    'Should render without error' +
      ' and render Movie information with provided details',
    () => {
      const { getByText, getByTestId } = render(
        <MovieDetails {...details} id={details.imdbID} />,
      );
      expect(
        getByText(
          `${details.year} | ${details.runtime} | ${details.genre} | ${details.imdbRating} from ${details.imdbVotes} votes`,
        ),
      ).toBeInTheDocument();
      expect(getByText(details.title)).toBeInTheDocument();
      expect(getByText(details.plot)).toBeInTheDocument();
      expect(getByText(details.actors)).toBeInTheDocument();
      expect(getByText(details.director)).toBeInTheDocument();
      expect(getByText(details.writer)).toBeInTheDocument();
      expect(getByText(details.awards)).toBeInTheDocument();

      const poster = getByTestId('details-movie-poster');
      expect(poster.src).toEqual(details.poster);
    },
  );
});
