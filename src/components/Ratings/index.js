import React from 'react';
import { Heading, RatingContainer } from './styled';

function Ratings({ ratings = [] }) {
  return (
    <>
      <Heading>Ratings</Heading>
      {ratings.length >= 1 ? (
        ratings.map(({ value, label }, index) => (
          <RatingContainer
            key={`rating-item-${index}`}
            data-testid={`rating-item-${index}`}
          >
            <div>{label}</div>
            <div>{value}</div>
          </RatingContainer>
        ))
      ) : (
        <RatingContainer data-testid="rating-empty-label">
          Movie is not yet rated
        </RatingContainer>
      )}
    </>
  );
}

export default Ratings;
