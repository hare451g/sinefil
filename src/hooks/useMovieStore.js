import { useDispatch, useSelector } from 'react-redux';

import { clearList, selectMovie, unSelectMovie } from '../store/movies/actions';
import fetchMoviesThunk from '../thunks/fetchMoviesThunk';

function useMovieStore() {
  const moviesState = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  return {
    state: { ...moviesState },
    actions: {
      onSubmit: (keyword) => {
        dispatch(clearList());
        dispatch(fetchMoviesThunk(keyword, 1));
      },
      fetchMovies: (keyword, page) => dispatch(fetchMoviesThunk(keyword, page)),
      clearList: () => dispatch(clearList()),
      selectMovie: (movie) => dispatch(selectMovie(movie)),
      unSelectMovie: () => dispatch(unSelectMovie()),
    },
  };
}

export default useMovieStore;
