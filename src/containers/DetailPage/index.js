import React, { useEffect } from 'react';
import MovieDetails from '../../components/MovieDetails';
import useDetailStore from '../../hooks/useDetailStore';

function DetailPage({ id }) {
  const {
    state: { details, error, isFetching },
    actions: { fetchDetails },
  } = useDetailStore();

  useEffect(() => {
    if (id && !isFetching) {
      fetchDetails(id);
    }
  }, []);

  return (
    <div>
      {error ? (
        <div data-testid="details-error-label">{error}</div>
      ) : isFetching ? (
        <div data-testid="details-loading-label">
          Loading movie details . . .
        </div>
      ) : (
        <MovieDetails {...details} id={id} />
      )}
    </div>
  );
}

export default DetailPage;
