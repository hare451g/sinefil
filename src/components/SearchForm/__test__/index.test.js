import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from '../index';

describe('Movie Card Component', () => {
  const keyword = 'se7en';

  it('Should handle onChange correctly', () => {
    const mockOnSubmitKeyword = jest.fn((keyword) => keyword);
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

  it('Should clear search input when clear clicked', () => {
    const mockOnSubmitKeyword = jest.fn((keyword) => keyword);
    const { getByTestId } = render(
      <SearchForm onSubmit={mockOnSubmitKeyword} />,
    );

    const searchForm = getByTestId('search-form');
    searchForm.value = keyword;
    fireEvent.change(searchForm);

    const clearButton = getByTestId('clear-button');
    fireEvent.click(clearButton);

    expect(searchForm.value).toBe('');
    expect(mockOnSubmitKeyword.mock.calls.length).toBe(1);
    expect(mockOnSubmitKeyword.mock.results[0].value).toEqual('');
  });

  it('Should notify loading when content is loading ', () => {
    const { getByTestId } = render(<SearchForm isLoading />);
    const searchButton = getByTestId('search-button');
    expect(searchButton.innerHTML).toEqual('loading');
    expect(searchButton).toHaveStyle('background-color: #eee');
    expect(searchButton).toHaveStyle('color: #8a8a8a');
  });

  it('Should notify error when error occurred', () => {
    const errorMessage = 'Keyword is required';
    const { getByTestId } = render(<SearchForm error={errorMessage} />);
    const searchForm = getByTestId('search-input-container');
    expect(searchForm).toHaveStyle('border: 1px solid #ff3b30');
  });
});
