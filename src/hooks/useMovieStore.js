import { useDispatch, useSelector } from 'react-redux';

import {
  fetchMovies,
  clearList,
  selectMovie,
  unSelectMovie,
} from '../store/movies/actions';

function useMovieStore() {
  const moviesState = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  return {
    state: { ...moviesState },
    actions: {
      fetchMovies: (keyword, page) => dispatch(fetchMovies(keyword, page)),
      clearList: () => dispatch(clearList()),
      selectMovie: (movie) => dispatch(selectMovie(movie)),
      unSelectMovie: () => dispatch(unSelectMovie()),
    },
  };
}

export default useMovieStore;
