import styled from 'styled-components';

const HomePageContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 120px 0px;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 720px;
`;

const Heading = styled.h1`
  text-align: center;
  margin: 0;
`;

const SubHeading = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 24px;
`;

const CardDeckContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 720px;
  margin: 24px auto;
`;

export {
  HomePageContainer,
  HeroContainer,
  Heading,
  SubHeading,
  CardDeckContainer,
};
