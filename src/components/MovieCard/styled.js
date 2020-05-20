import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const MoviePoster = styled.div`
  height: 222.5px;
  background: url('${(props) => props.poster}');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

const MovieTitle = styled.div`
  text-align: center;
  font-size: 1rem;
  height: 64px;
  padding-top: 8px;
`;

export { Card, MoviePoster, MovieTitle };
