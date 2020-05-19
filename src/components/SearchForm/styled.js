import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 720px;
  justify-content: space-between;
  width: 100%;
`;

const InputContainer = styled.div`
  border: 1px solid #cccccc;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 34px;
  width: 100%;
`;

const Input = styled.input`
  border: none;
  padding: 6px 4px;
  font-size: 18px;
  width: 100%;
`;

const InputClearButton = styled.button`
  background: none;
  border: none;
  height: 100%;
  font-size: 18px;
  color: #ff3b30;
`;

const SubmitButton = styled.button`
  border: none;
  border-radius: 4px;
  background: none;
  background-color: #007aff;
  font-size: 18px;
  margin-left: 4px;
  padding: 4px 6px;
  color: #fff;
`;

export { FormContainer, InputContainer, Input, InputClearButton, SubmitButton };
