import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
} from './constants';

const fetchMovies = () => ({
  type: FETCH_MOVIES,
});

const fetchMovieSuccess = () => ({
  type: FETCH_MOVIES_SUCCESS,
});

const fetchMoviesFailed = (errorMessages) => ({
  type: FETCH_MOVIES_FAILED,
  payload: { errorMessages },
});

export { fetchMovies, fetchMovieSuccess, fetchMoviesFailed };
