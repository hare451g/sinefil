import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
  CLEAR_LIST,
  SELECT_MOVIE,
} from './constants';

const fetchMovies = () => ({
  type: FETCH_MOVIES,
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

export {
  fetchMovies,
  fetchMovieSuccess,
  fetchMoviesFailed,
  clearList,
  selectMovie,
};
