import styled from 'styled-components';

const MovieTitle = styled.h1`
  text-transform: capitalize;
  margin-bottom: 0;
  margin-top: 32px;
`;

const DetailsColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const SynopsisContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 42px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

  > div {
    padding-left: 16px;
  }
`;

const MoviePoster = styled.img`
  width: 300px;
  @media screen and (max-width: 600px) {
    margin: auto;
    margin-bottom: 24px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 32px;
  max-width: 720px;
  margin: auto;
  min-height: 100vh;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;

  > div:first-child {
    width: 40%;
  }

  > div:last-child {
    width: ${(props) => (props.spanColumn ? '100%' : '60%')};
    padding-left: ${(props) => (props.spanColumn ? '0' : '16px')};
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    > div {
      width: 100% !important;
      padding-left: 0px !important;
      padding-top: 16px;
    }
  }
`;

export {
  DescriptionContainer,
  DetailsColumn,
  DetailsContainer,
  MoviePoster,
  SynopsisContainer,
  MovieTitle,
};
