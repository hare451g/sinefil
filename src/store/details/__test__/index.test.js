import details from '../../../__mock__/details';

import {
  fetchDetails,
  fetchDetailsFailed,
  fetchDetailsSuccess,
} from '../actions';

import movieReducer, { initialState } from '../index';

describe('Movie Reducer Test', () => {
  // mock request params
  const imdbID = 'tt0457939';
  const errorMessage = 'Something went wrong.';

  const unknownAction = {
    type: 'unkonwn',
  };

  it('Should return current state in default case', () => {
    expect(movieReducer(undefined, unknownAction)).toEqual(initialState);
  });

  describe('Start fetch movie details', () => {
    it('should set isFetching to true, and fetched to false', () => {
      expect(movieReducer(undefined, fetchDetails())).toEqual({
        ...initialState,
        isFetching: true,
        fetched: false,
      });
    });

    it('should set imdbID into id', () => {
      const reducer = movieReducer(undefined, fetchDetails(imdbID));
      expect(reducer.imdbID).toEqual(imdbID);
    });
  });

  describe('Fetch movie list failed', () => {
    it('it should set isFetching to false', () => {
      const reducer = movieReducer(undefined, fetchDetailsFailed());
      expect(reducer.isFetching).toBe(false);
    });

    it(
      'it should set error message to An unhandled error occurred ' +
        'when no error message provided',
      () => {
        const reducer = movieReducer(undefined, fetchDetailsFailed());
        expect(reducer.error).toBe('An unhandled error occurred');
      },
    );

    it('it should set error message to provided error message ', () => {
      const reducer = movieReducer(undefined, fetchDetailsFailed(errorMessage));
      expect(reducer.error).toBe(errorMessage);
    });
  });

  describe('Fetch movie success', () => {
    it(
      'should set isFetching to false,' +
        ' and fill the details field with response',
      () => {
        const dispatchedAction = fetchDetailsSuccess(details);

        expect(movieReducer(undefined, dispatchedAction)).toEqual({
          ...initialState,
          isFetching: false,
          fetched: true,
          details,
        });
      },
    );
  });
});
