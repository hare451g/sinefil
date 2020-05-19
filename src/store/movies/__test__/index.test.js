import { fetchMovies, fetchMoviesFailed, fetchMovieSuccess } from '../actions';
import movieReducer, { initialState } from '../index';
import movieLists from './__mock__/movieLists';

describe('Movie Reducer Test', () => {
  const unknownAction = {
    type: 'unkonwn',
  };

  it('Should return current state in default case', () => {
    expect(movieReducer(undefined, unknownAction)).toEqual(initialState);
  });

  describe('Start fetch movie list', () => {
    it('should set isFetching to true, and fetched to false', () => {
      expect(movieReducer(undefined, fetchMovies())).toEqual({
        ...initialState,
        isFetching: true,
        fetched: false,
      });
    });
  });

  describe('Fetch movie list failed', () => {
    it('it should set isFetching to false', () => {
      const reducer = movieReducer(undefined, fetchMoviesFailed());
      expect(reducer.isFetching).toBe(false);
    });

    it(
      'it should set error message to An unhandled error occurred ' +
        'when no error message provided',
      () => {
        const reducer = movieReducer(undefined, fetchMoviesFailed());
        expect(reducer.error).toBe('An unhandled error occurred');
      },
    );

    it('it should set error message to provided error message ', () => {
      const errorMessages = 'Too many results.';
      const reducer = movieReducer(undefined, fetchMoviesFailed(errorMessages));
      expect(reducer.error).toBe(errorMessages);
    });
  });

  describe('Fetch movie success', () => {
    it('should set isFetching to false, and loaded to true', () => {
      expect(movieReducer(undefined, fetchMovieSuccess())).toEqual({
        ...initialState,
        isFetching: false,
        fetched: true,
      });
    });

    it('should set fetched movies into movie reducer list', () => {
      const reducer = movieReducer(undefined, fetchMovieSuccess(movieLists));
      expect(reducer.list).toEqual(movieLists);
    });
  });
});
