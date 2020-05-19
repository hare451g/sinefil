import styled from 'styled-components';

const Card = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 320px;
  width: 150px;
`;

const MoviePoster = styled.div`
  height: 70%;
  width: 100%;
  background: url('${(props) => props.poster}');
  background-repeat: no-repeat;
  background-size: cover;
`;

const MovieTitle = styled.div`
  width: 100%;
  height: 30%;
  color: #1c1c1c;
  font-weight: bold;
  text-align: center;
  padding-top: 8px;
  font-family: sans-serif;
  font-size: 1rem;
`;

export { Card, MoviePoster, MovieTitle };
