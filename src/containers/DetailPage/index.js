import React from 'react';
import Descriptions from '../../components/Descriptions';
import mockDetails from '../../__mock__/details';
import MovieDetails from '../../components/MovieDetails';
import details from '../../__mock__/details';

function DetailPage() {
  return (
    <div>
      <MovieDetails {...details} />
    </div>
  );
}

export default DetailPage;
