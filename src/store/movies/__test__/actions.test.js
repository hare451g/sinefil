import { fetchMovies, fetchMovieSuccess, fetchMoviesFailed } from '../actions';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
} from '../constants';

describe('Fetch movie', () => {
  it('Should return FETCH_MOVIES action type', () => {
    const dispatchedAction = fetchMovies();
    expect(dispatchedAction.type).toEqual(FETCH_MOVIES);
  });
});

describe('Fetch movie success', () => {
  it('Should return FETCH_MOVIES_SUCCESS action type', () => {
    const dispatchedAction = fetchMovieSuccess();
    expect(dispatchedAction.type).toEqual(FETCH_MOVIES_SUCCESS);
  });
});

describe('Fetch movie failed', () => {
  it('Should return FETCH_MOVIES_FAILED action type', () => {
    const dispatchedAction = fetchMoviesFailed();
    expect(dispatchedAction.type).toEqual(FETCH_MOVIES_FAILED);
  });
});
