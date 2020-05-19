import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
  CLEAR_LIST,
  SELECT_MOVIE,
  UNSELECT_MOVIE,
} from './constants';

const fetchMovies = (keyword = '', page = 1) => ({
  type: FETCH_MOVIES,
  payload: { keyword, page },
});

const fetchMovieSuccess = (list = []) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { list },
});

const fetchMoviesFailed = (errorMessages) => ({
  type: FETCH_MOVIES_FAILED,
  payload: { errorMessages },
});

const clearList = () => ({
  type: CLEAR_LIST,
});

const selectMovie = (movie) => ({
  type: SELECT_MOVIE,
  payload: { movie },
});

const unSelectMovie = () => ({
  type: UNSELECT_MOVIE,
});

export {
  fetchMovies,
  fetchMovieSuccess,
  fetchMoviesFailed,
  clearList,
  selectMovie,
  unSelectMovie,
};
