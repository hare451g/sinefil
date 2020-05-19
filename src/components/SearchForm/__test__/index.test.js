import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from '../index';

describe('Movie Card Component', () => {
  const mockOnSubmitKeyword = jest.fn((keyword) => keyword);
  const keyword = 'se7en';

  it('Should render movie title correctly', () => {
    const { getByTestId } = render(
      <SearchForm onSubmit={mockOnSubmitKeyword} />,
    );

    const searchForm = getByTestId('search-form');
    searchForm.value = keyword;
    fireEvent.change(searchForm);

    const searchButton = getByTestId('search-button');
    fireEvent.click(searchButton);

    expect(mockOnSubmitKeyword.mock.calls.length).toBe(1);
    expect(mockOnSubmitKeyword.mock.results[0].value).toEqual(keyword);
  });
});
