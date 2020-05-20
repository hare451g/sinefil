import React from 'react';
import { Link } from '@reach/router';
// components
import Descriptions from '../Descriptions';
import Ratings from '../Ratings';

// styled-components
import {
  DescriptionContainer,
  DetailsColumn,
  DetailsContainer,
  MoviePoster,
  SynopsisContainer,
  MovieTitle,
} from './styled';

function MovieDetails({
  title = '',
  year = '',
  runtime = '',
  genre = '',
  director = '',
  writer = '',
  actors = '',
  plot = '',
  awards = '',
  poster = '',
  ratings = [],
  imdbRating = 0,
  imdbVotes = 0,
  id = null,
}) {
  if (!id) {
    return (
      <DetailsContainer>
        <DetailsColumn>
          <Link to="/">&lt; Back to Search </Link>
          <MovieTitle data-testid="details-movie-title">
            Invalid movie id
          </MovieTitle>
          <p data-testid="details-movie-summary">
            please make sure your url is correct, or you could find your movie
            from <Link to="/">here</Link>.
          </p>
        </DetailsColumn>
      </DetailsContainer>
    );
  }

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
