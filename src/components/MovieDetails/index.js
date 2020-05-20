import React from 'react';
import { Link } from '@reach/router';
// components
import Descriptions from '../Descriptions';

import styled from 'styled-components';
import Ratings from '../Ratings';
// styled-components
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

function MovieDetails({
  title = '',
  year = '',
  rated = '',
  released = '',
  runtime = '',
  genre = '',
  director = '',
  writer = '',
  actors = '',
  plot = '',
  language = '',
  country = '',
  awards = '',
  poster = '',
  ratings = [],
  metascore = 0,
  imdbRating = 0,
  imdbVotes = 0,
  imdbID = null,
  type = '',
  dvd = '',
  boxOffice = '',
  production = '',
  website = '',
}) {
  // normalize ratings
  const normalizedRatings = ratings.map((rating) => ({
    label: rating.Source,
    value: rating.Value,
  }));
  return (
    <DetailsContainer>
      <DetailsColumn>
        <Link to="/">&lt; Back to Search </Link>
        <MovieTitle data-testid="details-movie-title">{title}</MovieTitle>
        <p data-testid="details-movie-summary">
          {year} | {runtime} | {genre} | {imdbRating} from {imdbVotes} votes
        </p>
      </DetailsColumn>
      <SynopsisContainer>
        <MoviePoster
          src={poster}
          alt={title}
          data-testid="details-movie-poster"
        />
        <Descriptions
          heading="Synopsis"
          contents={plot}
          data-testid="details-movie-synopsis"
        />
      </SynopsisContainer>

      <DescriptionContainer>
        <div>
          <Ratings ratings={normalizedRatings} />
        </div>
        <Descriptions
          heading="Casts"
          contents={actors}
          data-testid="details-movie-cast"
        />
      </DescriptionContainer>

      <DescriptionContainer>
        <Descriptions
          heading="Director"
          contents={director}
          data-testid="details-movie-director"
        />
        <Descriptions
          heading="Writer"
          contents={writer}
          data-testid="details-movie-writer"
        />
      </DescriptionContainer>

      <DescriptionContainer spanColumn>
        <Descriptions
          heading="Awards"
          contents={awards}
          data-testid="details-movie-awards"
        />
      </DescriptionContainer>
    </DetailsContainer>
  );
}

export default MovieDetails;
