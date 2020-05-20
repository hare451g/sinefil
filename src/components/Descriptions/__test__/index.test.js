import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Descriptions from '../index';
import mockDetails from '../../../__mock__/details';

describe('Movie Card Component', () => {
  const { plot } = mockDetails;
  const mockContents = plot;

  it('Should render provided text correctly', () => {
    const { getByTestId } = render(
      <Descriptions heading="Synopsis" contents={mockContents} />,
    );

    const heading = getByTestId('description-heading');
    expect(heading.innerHTML).toEqual('Synopsis');

    const contents = getByTestId('description-content');
    expect(contents.innerHTML).toEqual(mockContents);
  });
});
