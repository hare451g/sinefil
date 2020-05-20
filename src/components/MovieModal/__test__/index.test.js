import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import movie from '../../../__mock__/movie';
import MovieModal from '../index';

describe('Movie Modal Component', () => {
  it('Should hide when default condition', () => {
    const { getByTestId } = render(<MovieModal />);
    expect(getByTestId('modal-container')).toHaveStyle('display: none');
  });

  it('Should show movie poster and it alt text when modal open', () => {
    const { getByTestId } = render(<MovieModal {...movie} isOpen />);

    const modalContainer = getByTestId('modal-container');
    expect(modalContainer).toHaveStyle('display: block');

    const poster = getByTestId('modal-poster');
    expect(poster.src).toEqual(movie.poster);
    expect(poster.alt).toEqual(movie.title);
  });

  it('should hide modal when close clicked', () => {
    let isOpen = true;

    const mockCloseModal = jest.fn(() => {
      isOpen = false;
    });

    const { getByTestId, rerender } = render(
      <MovieModal {...movie} isOpen={isOpen} onClose={mockCloseModal} />,
    );
    const modalContainer = getByTestId('modal-container');
    const modalCloseButton = getByTestId('modal-close-button');

    fireEvent.click(modalCloseButton);

    rerender(<MovieModal isOpen={isOpen} />);

    expect(modalContainer).toHaveStyle('display: none');
  });
});
