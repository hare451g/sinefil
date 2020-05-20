import React from 'react';
import MovieDetails from '../../components/MovieDetails';
import details from '../../__mock__/details';

function DetailPage({ id }) {
  return (
    <div>
      <MovieDetails {...details} id={id} />
    </div>
  );
}

export default DetailPage;
