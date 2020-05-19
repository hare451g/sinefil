import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
  CLEAR_LIST,
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

export { fetchMovies, fetchMovieSuccess, fetchMoviesFailed, clearList };
