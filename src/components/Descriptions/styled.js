import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  padding-bottom: 12px;
`;

const Contents = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  padding-bottom: 8px;
`;

export { Container, Heading, Contents };
