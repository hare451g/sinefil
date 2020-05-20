import React, { useRef, useEffect } from 'react';
import {
  FormContainer,
  InputContainer,
  Input,
  InputClearButton,
  SubmitButton,
} from './styled';

function SearchForm({ onSubmit = (keyword) => {}, keyword, isLoading }) {
  const searchInputRef = useRef();

  useEffect(() => {
    searchInputRef.current.value = keyword;
  }, []);

  const onSearchButtonClick = () => {
    onSubmit(searchInputRef.current.value);
  };

  const onClearButtonClick = () => {
    onSubmit('');
    searchInputRef.current.value = '';
  };

  return (
    <FormContainer>
      <InputContainer>
        <Input
          type="text"
          id="search"
          data-testid="search-form"
          ref={searchInputRef}
        />
        <InputClearButton
          data-testid="clear-button"
          onClick={onClearButtonClick}
        >
          X
        </InputClearButton>
      </InputContainer>
      <SubmitButton
        data-testid="search-button"
        onClick={onSearchButtonClick}
        disabled={isLoading}
      >
        {isLoading ? 'loading' : 'search'}
      </SubmitButton>
    </FormContainer>
  );
}

export default SearchForm;
