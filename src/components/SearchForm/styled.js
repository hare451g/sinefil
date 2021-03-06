import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 720px;
  justify-content: space-between;
  width: 100%;
`;

const InputContainer = styled.div`
  border: ${(props) =>
    props.error ? '1px solid #ff3b30' : '1px solid #cccccc'};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  width: 100%;
`;

const Input = styled.input`
  border: none;
  border-radius: 4px;
  padding: 6px 4px;
  font-size: 18px;
  width: 100%;
`;

const InputClearButton = styled.button`
  background: none;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  height: 100%;
  font-size: 18px;
  color: #ff3b30;
  font-size: 16px;
  font-weight: bold;
`;

const SubmitButton = styled.button`
  border: none;
  border-radius: 4px;
  background: none;
  font-size: 16px;
  font-weight: bold;
  margin-left: 4px;
  padding: 4px 24px;
  text-transform: uppercase;
  color: ${(props) => (props.disabled ? '#8a8a8a' : '#fff')};
  background-color: ${(props) => (props.disabled ? '#eee' : '#007aff')};
`;

export { FormContainer, InputContainer, Input, InputClearButton, SubmitButton };
