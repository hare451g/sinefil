import React, { useRef } from 'react';
import {
  FormContainer,
  InputContainer,
  Input,
  InputClearButton,
  SubmitButton,
} from './styled';

function SearchForm({ onSubmit = (keyword) => {} }) {
  const searchInputRef = useRef();

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
      <SubmitButton data-testid="search-button" onClick={onSearchButtonClick}>
        search
      </SubmitButton>
    </FormContainer>
  );
}

export default SearchForm;