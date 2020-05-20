import { useDispatch, useSelector } from 'react-redux';

import { clearList, selectMovie, unSelectMovie } from '../store/movies/actions';
import fetchMoviesThunk from '../thunks/fetchMoviesThunk';

function useMovieStore() {
  const state = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  return {
    state,
    actions: {
      onSubmit: (keyword) => {
        dispatch(clearList());
        dispatch(fetchMoviesThunk(keyword, 1));
      },
      onNextPageClick: () => {
        if (state.nextPage <= state.totalPage) {
          dispatch(fetchMoviesThunk(state.search, state.nextPage));
        }
      },
      fetchMovies: (keyword, page) => dispatch(fetchMoviesThunk(keyword, page)),
      clearList: () => dispatch(clearList()),
      selectMovie: (movie) => dispatch(selectMovie(movie)),
      unSelectMovie: () => dispatch(unSelectMovie()),
    },
  };
}

export default useMovieStore;
