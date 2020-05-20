import styled from 'styled-components';

const DeckWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CardWrapper = styled.div`
  margin: 4px 6px;
`;

const ControlWrapper = styled.div`
  border-top: 1px solid #d6d6d6;
  padding: 16px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const LoadMoreButton = styled.div`
  background: none;
  border: 0;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  color: inherit;
  cursor: pointer;
  font: inherit;
  line-height: inherit;
  overflow: visible;
  vertical-align: inherit;
`;

export { DeckWrapper, CardWrapper, ControlWrapper, LoadMoreButton };
