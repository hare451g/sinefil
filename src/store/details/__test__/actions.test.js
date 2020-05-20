import {
  fetchDetails,
  fetchDetailsFailed,
  fetchDetailsSuccess,
} from '../actions';

import {
  FETCH_DETAILS,
  FETCH_DETAILS_FAILED,
  FETCH_DETAILS_SUCCESS,
} from '../constants';
import details from '../../../__mock__/details';

describe('Fetch details actions', () => {
  // mock requests params
  const imdbID = 'tt0457939';
  const errorMessage = 'Something went wrong.';

  describe('fetch details start', () => {
    it('should have FETCH_DETAILS action type', () => {
      const dispatchedAction = fetchDetails();
      expect(dispatchedAction.type).toEqual(FETCH_DETAILS);
    });

    it('should contain imdbID as a payload', () => {
      const dispatchedAction = fetchDetails(imdbID);
      expect(dispatchedAction.payload).toEqual({ imdbID });
    });
  });

  describe('fetch details failed', () => {
    it('should have FETCH_DETAILS_FAILED action type', () => {
      const dispatchedAction = fetchDetailsFailed();
      expect(dispatchedAction.type).toEqual(FETCH_DETAILS_FAILED);
    });

    it('should contain default error messages as a payload', () => {
      const dispatchedAction = fetchDetailsFailed();
      expect(dispatchedAction.payload).toEqual({
        errorMessage: 'An unhandled error occurred',
      });
    });

    it('should contain error messages as provided in params', () => {
      const dispatchedAction = fetchDetailsFailed(errorMessage);
      expect(dispatchedAction.payload).toEqual({ errorMessage });
    });
  });

  describe('fetch details success', () => {
    it('should have FETCH_DETAILS_SUCCESS action type', () => {
      const dispatchedAction = fetchDetailsSuccess();
      expect(dispatchedAction.type).toEqual(FETCH_DETAILS_SUCCESS);
    });

    it('should contain normalized response as payload', () => {
      const dispatchedAction = fetchDetailsSuccess(details);
      expect(dispatchedAction.payload).toEqual({ details });
    });

    it('should never contain undefined as payload', () => {
      const dispatchedAction = fetchDetailsSuccess(undefined);
      expect(dispatchedAction.payload.details).toBeDefined();
    });
  });
});
