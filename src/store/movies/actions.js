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

const fetchMoviesFailed = () => ({
  type: FETCH_MOVIES_FAILED,
});

export { fetchMovies, fetchMovieSuccess, fetchMoviesFailed };
