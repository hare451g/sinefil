import { fetchMovies, fetchMoviesFailed } from '../actions';
import movieReducer, { initialState } from '../index';

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
});
