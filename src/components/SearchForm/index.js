import React, { useRef } from 'react';

function SearchForm({ onSubmit = (keyword) => {} }) {
  const searchInputRef = useRef();

  const onSearchButtonClick = () => {
    onSubmit(searchInputRef.current.value);
  };

  const onClearButtonClick = () => {
    searchInputRef.current.value = '';
  };

  return (
    <div>
      <input
        type="search"
        id="search"
        data-testid="search-form"
        ref={searchInputRef}
      />
      <button data-testid="search-button" onClick={onSearchButtonClick}>
        search
      </button>
      <button data-testid="clear-button" onClick={onClearButtonClick}>
        clear
      </button>
    </div>
  );
}

export default SearchForm;
