import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 720px;
`;

const InputContainer = styled.div`
  border: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  padding: 6px 4px;
  font-size: 18px;
  height: 100%;
  width: 100%;
`;

const InputClearButton = styled.button`
  background: none;
  border: none;
  height: 100%;
  font-size: 18px;
  color: #ff3b30;
`;

export { FormContainer, InputContainer, Input, InputClearButton };
