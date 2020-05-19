import { fetchMovies, fetchMovieSuccess, fetchMoviesFailed } from '../actions';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
} from '../constants';
import movieLists from './__mock__/movieLists';

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

  it('Should contain movie lists, even without providing list', () => {
    const dispatchedAction = fetchMovieSuccess();
    expect(dispatchedAction.payload.list).toEqual(expect.any(Array));
  });

  it('should contain movie list from response', () => {
    const dispatchedAction = fetchMovieSuccess(movieLists);
    expect(dispatchedAction.payload.list).toEqual(movieLists);
  });
});

describe('Fetch movie failed', () => {
  it('Should return FETCH_MOVIES_FAILED action type', () => {
    const dispatchedAction = fetchMoviesFailed();
    expect(dispatchedAction.type).toEqual(FETCH_MOVIES_FAILED);
  });

  it('Should contain error messages', () => {
    const errorMessages = 'Unhandled Error';
    const dispatchedAction = fetchMoviesFailed(errorMessages);

    expect(dispatchedAction.payload).toEqual({ errorMessages });
  });
});
