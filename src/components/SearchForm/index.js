import React, { useRef } from 'react';

function SearchForm({ onSubmit = (keyword) => {} }) {
  const searchInputRef = useRef();

  const onSearchButtonClick = () => {
    onSubmit(searchInputRef.current.value);
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
    </div>
  );
}

export default SearchForm;
